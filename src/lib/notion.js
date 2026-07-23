import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

const getTags = (tags = []) => tags.map((tag) => tag.name);

const getPlainText = (richText = []) => richText?.[0]?.plain_text || '';

const getSlug = (slugProperty) => {
  if (!slugProperty) return '';
  if (slugProperty.type === 'formula') {
    return slugProperty.formula?.string || '';
  }
  if (slugProperty.type === 'rich_text') {
    return getPlainText(slugProperty.rich_text);
  }
  return '';
};

const getPostDate = (post) => {
  const dateStart = post.properties?.Date?.date?.start;
  return getToday(dateStart || post.last_edited_time);
};

function getToday(datestring) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const date = datestring ? new Date(datestring) : new Date();
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
}

const getPageMetaData = (post) => {
  if (!post?.properties) {
    return null;
  }

  return {
    id: post.id,
    cover: post.properties.Cover?.url || null,
    title: getPlainText(post.properties.Name?.title) || 'Untitled',
    tags: getTags(post.properties.Tags?.multi_select),
    description: getPlainText(post.properties.Description?.rich_text),
    date: getPostDate(post),
    slug: getSlug(post.properties.Slug),
  };
};

export const getAllPublished = async () => {
  if (!process.env.NOTION_TOKEN || !process.env.NOTION_DATABASE_ID) {
    return [];
  }

  try {
    const posts = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      filter: {
        property: 'Published',
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: 'Date',
          direction: 'descending',
        },
      ],
    });

    return posts.results.map(getPageMetaData).filter((post) => post?.slug);
  } catch (error) {
    console.error('Failed to fetch Notion posts:', error);
    return [];
  }
};

export const getSingleBlogPostBySlug = async (slug) => {
  if (!process.env.NOTION_TOKEN || !process.env.NOTION_DATABASE_ID || !slug) {
    return null;
  }

  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      filter: {
        property: 'Slug',
        formula: {
          string: {
            equals: slug,
          },
        },
      },
    });

    const page = response.results[0];
    if (!page) {
      return null;
    }

    const metadata = getPageMetaData(page);
    if (!metadata) {
      return null;
    }

    const mdblocks = await n2m.pageToMarkdown(page.id);
    const mdString = n2m.toMarkdownString(mdblocks);
    const markdown = typeof mdString === 'string' ? mdString : mdString?.parent || '';

    return {
      metadata,
      markdown,
    };
  } catch (error) {
    console.error(`Failed to fetch Notion post for slug "${slug}":`, error);
    return null;
  }
};

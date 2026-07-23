import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Posts from '@/components/Posts/Posts';
import SEO from '@/components/SEO/SEO';
import { getAllPublished, getSingleBlogPostBySlug } from '../../lib/notion';

const Post = ({ post }) => {
  return (
    <div className='App'>
      <SEO
        title={post.metadata.title}
        description={post.metadata.description || 'Blog post by Luis Tellez'}
        path={`/blog/${post.metadata.slug}`}
        image={post.metadata.cover || undefined}
      />
      <Header />
      <Posts post={post} />
      <Footer />
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const post = await getSingleBlogPostBySlug(params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 86400,
  };
};

export const getStaticPaths = async () => {
  const posts = await getAllPublished();
  const paths = posts.map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: 'blocking',
  };
};

export default Post;

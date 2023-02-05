import './Post.scss';
import React from 'react';
import Markdown from 'markdown-to-jsx';
import Code from '../Code/Code';
import { useParams } from 'react-router-dom';

function Post() {
  // get the id from the url visited by the user and use it to import the markdown file from the posts folder
  const id = useParams().id;

  const [post, setPost] = React.useState('');
  const [metadata, setMetadata] = React.useState({});

  React.useEffect(() => {
    import(`../../posts/${id}.md`).then((res) => {
      fetch(res.default)
        .then((response) => response.text())
        .then((text) => {
          const metadata = extractMetadata(text);
          setMetadata(metadata);
          const cleanedText = removeMetadata(text);
          setPost(cleanedText);
        });
    });
  }, [id]);

  // function that extracts the metadata from the markdown file imported
  function extractMetadata(markdown) {
    const startIndex = markdown.indexOf('---');
    const endIndex = markdown.indexOf('---', startIndex + 3);
    const metadataText = markdown.slice(startIndex + 3, endIndex).trim();
    const metadataLines = metadataText.split('\n');
    return metadataLines.reduce((acc, line) => {
      const [key, value] = line.split(':');
      acc[key.trim()] = value.trim();
      return acc;
    }, {});
  }

  // function that removes the metadata from the markdown file imported
  function removeMetadata(markdown) {
    const startIndex = markdown.indexOf('---');
    const endIndex = markdown.indexOf('---', startIndex + 3);
    return markdown.slice(0, startIndex) + markdown.slice(endIndex + 3);
  }

  // function that counts the total words in the markdown file imported, this is to then calculate the reading time
  function countWords(str) {
    return str.split(' ').length;
  }

  function readTime(wordCount) {
    const wordsPerMinute = 200;
    const minutes = wordCount / wordsPerMinute;
    const readTime = Math.ceil(minutes);
    return readTime;
  }

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  return (
    <article className='post'>
      <h1>{metadata.title}</h1>
      <div className='post__meta'>
        {formatDate(metadata.datePublished)} / {readTime(countWords(post))} mins read
      </div>

      <Markdown
        options={{
          overrides: {
            Code: {
              component: Code,
            },
          },
        }}
      >
        {post}
      </Markdown>
    </article>
  );
}

export default Post;

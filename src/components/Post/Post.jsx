import './Post.scss';
import React from 'react';
import Markdown from 'markdown-to-jsx';
import Code from '../Code/Code';

function Post() {
  const [post, setPost] = React.useState('');

  React.useEffect(() => {
    import('../../posts/hello-world.md').then((res) => {
      fetch(res.default)
        .then((response) => response.text())
        .then((text) => {
          const cleanedText = removeMetadata(text);
          const title = findTitle(cleanedText);
          const postWithoutTitle = removeTitle(cleanedText, title);
          setPost(postWithoutTitle);
        });
    });
  }, []);

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

  // function that finds the title of the markdown file imported it checks for the first # and then returns the text after it removing the #
  function findTitle(markdown) {
    let match = markdown.match(/^#[^\n]+/m);
    return match ? match[0].slice(1) : null;
  }

  function removeTitle(markdown, title) {
    const titleIndex = markdown.indexOf(title);
    const endOfLineIndex = markdown.indexOf('\n', titleIndex);
    return markdown.slice(0, titleIndex) + markdown.slice(endOfLineIndex + 1);
  }

  console.log(countWords(post));
  console.log(findTitle(post));

  return (
    <article className='post'>
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

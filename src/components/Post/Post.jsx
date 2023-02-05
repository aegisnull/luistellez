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
        .then((text) => setPost(text));
    });
  }, []);

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

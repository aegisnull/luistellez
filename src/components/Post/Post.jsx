import Markdown from 'markdown-to-jsx';
import React from 'react';

function Post() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    import('../../posts/hello-world.md').then((post) => {
      fetch(post.default)
        .then((res) => res.text())
        .then((text) => setPost(text))
        .finally(() => console.log(post));
    });
  }, []);

  return (
    <div className='Post'>
      <Markdown>{post}</Markdown>
    </div>
  );
}

export default Post;

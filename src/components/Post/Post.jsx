import './Post.scss';
import React from 'react';
import Markdown from 'markdown-to-jsx';
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
    <div className='post'>
      <Markdown>{post}</Markdown>
    </div>
  );
}

export default Post;

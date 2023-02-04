import './Post.scss';
import React from 'react';
import Markdown from 'markdown-to-jsx';

function Post() {
  const [post, setPost] = React.useState('');

  React.useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/aegisnull/luistellez/feat/blog/src/posts/hello-world.md',
    )
      .then((res) => res.text())
      .then((text) => setPost(text));
  }, []);

  return (
    <div className='post'>
      <Markdown>{post}</Markdown>
    </div>
  );
}

export default Post;

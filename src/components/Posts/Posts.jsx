import styles from './Posts.module.scss';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeBlock = ({ language, codestring }) => {
  return (
    <SyntaxHighlighter language={language} style={vscDarkPlus} PreTag="div">
      {codestring}
    </SyntaxHighlighter>
  );
};

function Posts({ post }) {
  return (
    <section className={styles.container}>
      <img className={styles.blog__cover} src={post.metadata.cover} />
      <h2 className={styles.blog__title}>{post.metadata.title}</h2>
      <span className={styles.blog__date}>{post.metadata.date}</span>
      <p className={styles.post__tags}>{post.metadata.tags.join(', ')}</p>
      <ReactMarkdown
        components={{
          p: ({ children }) => <p className={styles.blog__paragraph}>{children}</p>,
          h2: ({ children }) => <h2 className={styles.blog__subheading}>{children}</h2>,
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <CodeBlock codestring={String(children).replace(/\n$/, '')} language={match[1]} />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}>
        {post.markdown}
      </ReactMarkdown>
    </section>
  );
}

export default Posts;

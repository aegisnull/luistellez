import styles from './Posts.module.scss';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Image from 'next/image';

const CodeBlock = ({ language, codestring }) => {
  return (
    <SyntaxHighlighter language={language} style={vscDarkPlus} PreTag='div'>
      {codestring}
    </SyntaxHighlighter>
  );
};

function Posts({ post }) {
  const { metadata, markdown } = post;

  return (
    <section className={styles.container}>
      {metadata.cover ? (
        <Image
          className={styles.blog__cover}
          src={metadata.cover}
          alt={metadata.title}
          width={1024}
          height={512}
          priority
        />
      ) : null}
      <h1 className={styles.blog__title}>{metadata.title}</h1>
      <span className={styles.blog__date}>{metadata.date}</span>
      {metadata.tags?.length ? (
        <p className={styles.post__tags}>{metadata.tags.join(', ')}</p>
      ) : null}
      <ReactMarkdown
        components={{
          p: ({ children }) => <p className={styles.blog__paragraph}>{children}</p>,
          h2: ({ children }) => <h2 className={styles.blog__subheading}>{children}</h2>,
          code({ className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return match ? (
              <CodeBlock codestring={String(children).replace(/\n$/, '')} language={match[1]} />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {typeof markdown === 'string' ? markdown : ''}
      </ReactMarkdown>
    </section>
  );
}

export default Posts;

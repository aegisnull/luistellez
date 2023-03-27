import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { getAllPublished, getSingleBlogPostBySlug } from "../../lib/notion";
import styles from "../../styles/Blog.module.css";

const CodeBlock = ({ language, codestring }) => {
  return (
    <SyntaxHighlighter language={language} style={vscDarkPlus} PreTag="div">
      {codestring}
    </SyntaxHighlighter>
  );
};
const Post = ({ post }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.blog__title}>{post.metadata.title}</h2>
      <span className={styles.blog__date}>{post.metadata.date}</span>
      <p className={styles.post__tags}>{post.metadata.tags.join(", ")}</p>
      <ReactMarkdown
        components={{
          p: ({ children }) => (
            <p className={styles.blog__paragraph}>{children}</p>
          ),
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <CodeBlock
                codestring={String(children).replace(/\n$/, "")}
                language={match[1]}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {post.markdown}
      </ReactMarkdown>
    </section>
  );
};

export const getStaticProps = async ({ params }) => {
  const post = await getSingleBlogPostBySlug(params.slug);
  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  const posts = await getAllPublished();
  const paths = posts.map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: "blocking",
  };
};

export default Post;

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import Link from "next/link";
import { getAllPublished } from "../lib/notion";
import styles from "../styles/Home.module.css";

function BlogPage({ posts }) {
  if (!posts) return <h1>No posts</h1>;
  return (
    <>
      <div className="App">
        <Header />
        <div className={styles.container}>
          <main className={styles.main}>
            <h1>Blog</h1>
            {posts.map((post, index) => (
              <section key={index} className={styles.card}>
                <div>
                  <h2>
                    <Link href={`/posts/${post.slug}`} legacyBehavior>
                      <a className={styles.action}>{post.title}</a>
                    </Link>
                  </h2>
                  <div>{post.date}</div>
                </div>
                <p>{post.description}</p>
              </section>
            ))}
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default BlogPage;

export const getStaticProps = async () => {
  const data = await getAllPublished();
  return {
    props: {
      posts: data,
    },
    revalidate: 60,
  };
};

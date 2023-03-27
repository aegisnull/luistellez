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
            <div className={styles.blog__title}>
              <h2 className="title">Blog</h2>
              <div className={styles.blog__line} />
            </div>
            <div className={styles.cards__container}>
              {posts.map((post, index) => (
                <article key={index} className={styles.card}>
                  <img
                    className={styles.card__image}
                    width="328px"
                    height="200px"
                    src={post.cover}
                  />
                  <div className={styles.card__tags}>
                    {post.tags.map((tag, index) => (
                      <span key={index} className={styles.card__tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className={styles.card__content}>
                    <div className={styles.card__postdate}>{post.date}</div>
                    <h2>
                      <Link href={`/blog/${post.slug}`} legacyBehavior>
                        <a className={styles.card__title}>{post.title}</a>
                      </Link>
                    </h2>

                    <p className={styles.card__description}>
                      {post.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
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

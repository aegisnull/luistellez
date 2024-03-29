import Link from 'next/link';
import styles from './Blog.module.scss';
import { useRouter } from 'next/router';
import Image from 'next/image';

function Blog({ posts }) {
  const router = useRouter();

  if (!posts) return <h1>No posts</h1>;
  return (
    <section className={styles.blog}>
      <div className={styles.blog__container}>
        <div className={styles.blog__title}>
          <h2 className='title'>Blog</h2>
          <div className={styles.blog__line} />
        </div>
        {router.pathname === '/' ? (
          <div className={styles.blog__nav}>
            <Link href='/blog'>View all</Link>
          </div>
        ) : null}
      </div>
      <div className={styles.blog__cards}>
        {posts.map((post, index) => (
          <article key={index} className={styles.card}>
            <Image
              className={styles.card__image}
              src={post.cover}
              width={328}
              height={200}
              alt={post.title}
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
                <Link href={`/blog/${post.slug}`} className={styles.card__title}>
                  {post.title}
                </Link>
              </h2>

              <p className={styles.card__description}>{post.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Blog;

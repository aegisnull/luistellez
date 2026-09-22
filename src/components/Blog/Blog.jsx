import Link from 'next/link';
import styles from './Blog.module.scss';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Reveal from '../Reveal/Reveal';

const HOMEPAGE_POST_LIMIT = 3;

function Blog({ posts }) {
  const router = useRouter();
  const isHomepage = router.pathname === '/';
  const postsToShow = isHomepage ? posts?.slice(0, HOMEPAGE_POST_LIMIT) : posts;

  if (!postsToShow?.length) {
    return (
      <section className={styles.blog}>
        <Reveal className={styles.blog__container}>
          <div className={styles.blog__title}>
            <h2 className='title'>Blog</h2>
            <div className={styles.blog__line} />
          </div>
        </Reveal>
        <p className={styles.blog__empty}>No posts published yet.</p>
      </section>
    );
  }

  return (
    <section className={styles.blog}>
      <Reveal className={styles.blog__container}>
        <div className={styles.blog__title}>
          <h2 className='title'>Blog</h2>
          <div className={styles.blog__line} />
        </div>
        {isHomepage ? (
          <div className={styles.blog__nav}>
            <Link href='/blog'>View all</Link>
          </div>
        ) : null}
      </Reveal>
      <div className={styles.blog__cards}>
        {postsToShow.map((post, index) => (
          <Reveal key={post.id || post.slug} delay={Math.min(index, 4) * 80} variant='scale'>
            <article className={styles.card}>
              {post.cover ? (
                <Image
                  className={styles.card__image}
                  src={post.cover}
                  width={328}
                  height={200}
                  alt={post.title}
                />
              ) : (
                <div className={styles.card__image_placeholder} aria-hidden='true' />
              )}
              <div className={styles.card__tags}>
                {post.tags.map((tag) => (
                  <span key={tag} className={styles.card__tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className={styles.card__content}>
                <div className={styles.card__postdate}>{post.date}</div>
                <h3>
                  <Link href={`/blog/${post.slug}`} className={styles.card__title}>
                    {post.title}
                  </Link>
                </h3>
                <p className={styles.card__description}>{post.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Blog;

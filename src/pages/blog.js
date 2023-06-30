import Blog from '@/components/Blog/Blog';
import Head from 'next/head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { getAllPublished } from '@/lib/notion';

function BlogPage({ posts }) {
  return (
    <div className='App'>
      <Header />
      <Head>
        <title>Luis Tellez | Blog</title>
        <meta
          name='description'
          content='Looking for insights and expertise on the latest developments in web development and software engineering? Check out the blog page of my developer portfolio for informative and engaging content. Stay ahead of the curve and take your digital projects to the next level with my tips and tutorials.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Blog posts={posts} />
      <Footer />
    </div>
  );
}

export default BlogPage;

export const getStaticProps = async () => {
  const data = await getAllPublished();
  return {
    props: {
      posts: data,
    },
    revalidate: 86400,
  };
};

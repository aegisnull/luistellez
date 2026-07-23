import Blog from '@/components/Blog/Blog';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import SEO from '@/components/SEO/SEO';
import { getAllPublished } from '@/lib/notion';

function BlogPage({ posts }) {
  return (
    <div className='App'>
      <SEO
        title='Blog'
        description='Articles and notes on web development, software engineering, and building for the web.'
        path='/blog'
      />
      <Header />
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

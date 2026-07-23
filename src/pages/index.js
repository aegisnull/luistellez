import Main from '../components/Main/Main';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SEO from '../components/SEO/SEO';
import { getAllPublished } from '../lib/notion';

function Index({ posts }) {
  return (
    <div className='App'>
      <SEO
        title='Luis Tellez | Front End Developer'
        description='Developer portfolio of Luis Tellez — projects, skills, blog posts, and contact.'
        path='/'
      />
      <Header />
      <Main posts={posts} />
      <Footer />
    </div>
  );
}

export default Index;

export const getStaticProps = async () => {
  const data = await getAllPublished();
  return {
    props: {
      posts: data,
    },
    revalidate: 86400,
  };
};

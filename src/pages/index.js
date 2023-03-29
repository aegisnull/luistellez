import Head from 'next/head';
//import { Inter } from "@next/font/google";
import Main from '../components/Main/Main';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { getAllPublished } from '../lib/notion';

//const inter = Inter({ subsets: ["latin"] });

function Index({ posts }) {
  return (
    <>
      <div className="App">
        <Header />
        <Head>
          <title>Luis Tellez | Front End Developer</title>
          <meta name="description" content="Developer Portfolio of Luis Tellez" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/logo.svg" />
        </Head>
        <Main posts={posts} />
        <Footer />
      </div>
    </>
  );
}

export default Index;

export const getStaticProps = async () => {
  const data = await getAllPublished();
  return {
    props: {
      posts: data,
    },
    revalidate: 60,
  };
};

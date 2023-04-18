import Head from 'next/head';
import { getAllPublished, getSingleBlogPostBySlug } from '../../lib/notion';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Posts from '@/components/Posts/Posts';

const Post = ({ post }) => {
  return (
    <div className="App">
      <Head>
        <title>{post.metadata.title}</title>
        <meta name="description" content={post.metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Posts post={post} />
      <Footer />
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const post = await getSingleBlogPostBySlug(params.slug);
  return {
    props: {
      post,
    },
    revalidate: 86400,
  };
};

export const getStaticPaths = async () => {
  const posts = await getAllPublished();
  const paths = posts.map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: 'blocking',
  };
};

export default Post;

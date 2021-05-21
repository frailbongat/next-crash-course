import Head from 'next/head';
import Articles from '../components/Articles';

const index = ({ articles }) => {
  return (
    <div>
      <Head>
        <title>WebDev Newz</title>
        <meta name='keywords' content='we development, programming' />
      </Head>

      <Articles articles={articles} />
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

export default index;

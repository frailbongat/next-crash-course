import { server } from '../config';
import Articles from '../components/Articles';

const index = ({ articles }) => {
  return (
    <div>
      <Articles articles={articles} />
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  // const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

export default index;

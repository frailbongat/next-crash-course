import Article from './Article';
import styles from '../styles/Article.module.css';

const Articles = ({ articles }) => {
  return (
    <div className={styles.grid}>
      {articles.map((article) => (
        <Article article={article} />
      ))}
    </div>
  );
};

export default Articles;

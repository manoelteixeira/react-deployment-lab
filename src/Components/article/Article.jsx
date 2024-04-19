// src/Components/article/Article.jsx
import "./article.scss";

export default function Article({ article }) {
  return (
    <article>
      <img src={article.img} />
      <h3>{article.title}</h3>
      <p>{article.text}</p>
      <aside>
        <a href="#">Go to article...</a>
      </aside>
    </article>
  );
}

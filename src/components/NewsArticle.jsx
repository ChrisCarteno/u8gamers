import React from 'react';
import './newsarticle.css'; // Import CSS file for styling

const NewsArticle = ({ title, content, author, date }) => {
  return (
    <div className="news-article">
      <h2 className="article-title">{title}</h2>
      <p className="article-content">{content}</p>
      <p className="article-info">
        By <span className="article-author">{author}</span> | {date}
      </p>
    </div>
  );
};

NewsArticle.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default NewsArticle;
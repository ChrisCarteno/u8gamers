import React from 'react'
import './news.css'

const News = () => {
  const articles = [
    {
      id: 1,
      title: 'Breaking News 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      author: 'John Doe',
      date: 'June 16, 2023'
    },
    {
      id: 2,
      title: 'Breaking News 2',
      content: 'Praesent vel enim in nunc interdum sollicitudin.',
      author: 'Jane Smith',
      date: 'June 17, 2023'
    },
    {
      id: 3,
      title: 'Breaking News 3',
      content: 'Fusce consectetur massa id metus commodo, ac lacinia nunc tincidunt.',
      author: 'Mark Johnson',
      date: 'June 18, 2023'
    }
  ];

  const mystyle = {
  }; 
  return (
    <div className="main__news" style={mystyle}>
    <div className="news-articles">
      <h1 className='news__title'>Latest News Articles</h1>
      {articles.map(article => (
        <div key={article.id} className="article">
          <h3 className="article-title">{article.title}</h3>
          <p className="article-content">{article.content}</p>
          <p className="article-info">
            By <span className="article-author">{article.author}</span> | {article.date}
          </p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default News
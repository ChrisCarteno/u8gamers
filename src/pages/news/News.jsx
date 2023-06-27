import React from 'react'
import './news.css'

const News = () => {
  const articles = [
    {
      id: 1,
      title: 'Introducing u8Gamers: The Next Frontier in Gaming',
      content: `In the ever-evolving world of gaming, a new 
      powerhouse has emerged, captivating players and enthusiasts 
      alike. u8Gamers, a revolutionary gaming organization, has 
      burst onto the scene, promising to redefine the gaming 
      landscape. With a strong focus on community, competition,
      and innovation, u8Gamers is poised to make a lasting 
      impact.Founded by a group of passionate gamers, u8Gamers 
      sets out to create a vibrant ecosystem where gamers of all 
      levels can thrive. The organization aims to foster a supportive
      and inclusive environment, encouraging gamers to connect, 
      learn, and grow together. Whether you're a casual player or 
      a seasoned professional, u8Gamers has something to offer for 
      everyone. One of the core pillars of u8Gamers is its dedication
      to competitive gaming. With an array of talented teams across 
      various popular titles, u8Gamers is set to make waves in esports 
      tournaments. From heart-pounding action in first-person shooters 
      to strategic battles in real-time strategy games, u8Gamers' teams
      are poised to showcase their skills on the global stage.
      Beyond competitive gaming, u8Gamers is committed to nurturing the
      gaming community. They host regular events, tournaments, and 
      workshops, allowing gamers to come together, share their experiences,
      and forge lasting connections. With a passionate team of organizers,
      u8Gamers ensures that every event is meticulously planned, creating
      unforgettable experiences for all participants. In line with their 
      vision for innovation, u8Gamers embraces the latest gaming technologies
      and trends. From exploring virtual reality to diving into the world
      of cloud gaming, u8Gamers stays at the forefront of technological
      advancements. By pushing boundaries and embracing new possibilities,
       they aim to elevate the gaming experience to unprecedented heights.
      As u8Gamers takes its first steps into the gaming industry, anticipation
      and excitement reverberate throughout the community. Gamers from around
      the world are eagerly awaiting the opportunities, friendships, and
      thrilling moments that u8Gamers is bound to deliver. With their
      commitment to excellence, inclusivity, and pushing the boundaries
      of gaming, u8Gamers is poised to become a dominant force, leaving
      an indelible mark on the gaming world. Join u8Gamers today and be
      part of a new era in gaming. Brace yourself for unforgettable adventures,
      fierce competitions, and a supportive community that celebrates your
      passion for gaming. The future of gaming starts here, with u8Gamers 
      leading the charge into a thrilling new chapter.`,
      author: 'Christian Carteno',
      date: 'June 26, 2023'
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
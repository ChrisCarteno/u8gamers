import React from 'react'
import './events.css'
import MultiActionAreaCard from '../../components/Flexbox.jsx'

const Events = () => {

  const articles = [
    {
      id: 0,
      title: 'Introducing u8Gamers: The Next Frontier in Gaming',
      date: 'June 26, 2023'
    },
    {
      id: 1,
      title: 'Ricardo Calderon: The Rising Star of Super Smash Brothers',
      date: 'June 27, 2023'
    },
    {
      id: 2,
      title: 'Nate Rodriguez: Overcoming Obstacles in the Realm of Elden Ring',
      date: 'June 28, 2023'
    }
  ];

  return (
    <div className='events-page'>
      <h2> Check Out Our Upcoming Events </h2>
      <div className="events-cards">
      {articles.map(article => (
        <MultiActionAreaCard key={'event' + article.id} title={article.title} author={article.author} date={article.date}/>
      ))}
      </div>
      
    </div>
  )
}


export default Events

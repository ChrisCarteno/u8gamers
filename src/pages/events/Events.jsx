import React from 'react'
import './events.css'
import MultiActionAreaCard from '../../components/Flexbox.jsx'

const Events = () => {

  const articles = [
    {
      id: 0,
      title: 'Barbenheimer: Movie Day',
      date: 'June 26, 2023'
    },
    {
      id: 1,
      title: 'Halloween Spooktacular',
      date: 'October 26, 2023'
    },
    {
      id: 2,
      title: 'Big Bear Summit',
      date: 'January 26, 2024'
    }
  ];

  return (
    <div className='events-page'>
      <h2> Check Out Our Upcoming Events </h2>
      <div className="events-cards">
      {articles.map(article => (
        <MultiActionAreaCard key={'event' + article.id} title={article.title} author={article.author} date={article.date} icon={article.icon}/>
      ))}
      </div>

    </div>
  )
}


export default Events

import React from 'react'
import './events.css'
import MultiActionAreaCard from '../../components/Flexbox.jsx'
import { BsFilm } from 'react-icons/bs';

const Events = () => {

  const articles = [
    {
      id: 0,
      title: 'Barbenheimer: Movie Day',
      image: "https://agentsoffandom.com/wp-content/uploads/2023/07/IMG_6060-819x1024.jpg",
      date: 'June 26, 2023'
    },
    {
      id: 1,
      title: 'Halloween Spooktacular',
      image: "",
      date: 'June 26, 2023'
    },
    {
      id: 2,
      title: 'Big Bear Summit',
      image: "",
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

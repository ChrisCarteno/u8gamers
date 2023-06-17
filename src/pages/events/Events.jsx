import React from 'react'
import './events.css'

const Events = ({ title, date, location, description }) => {
  return (
  <header className="main__header">
    <div className="event-card">
    <h3>{title}</h3>
    <p>Date: {date}</p>
    <p>Location: {location}</p>
    <p>{description}</p>
  </div>
  </header>
  )
}

// EventsPage component to display the events page content
class EventsPage extends React.Component {
  state = {
    events: [
      {
        title: 'Gaming Tournament Extravaganza',
        date: 'July 15, 2023',
        location: 'Virtual Arena',
        description: 'Join us for an epic gaming tournament featuring top players from around the world!'
      },
      {
        title: 'Game Developers Conference',
        date: 'August 22-24, 2023',
        location: 'Convention Center',
        description: 'Explore the latest trends and innovations in game development with industry experts.'
      },
      // Add more events as needed
    ]
  };

  render() {
    const { events } = this.state;

    return (
      <div className="events-page">
        <h2>Upcoming Events</h2>
        {events.length > 0 ? (
          events.map((event, index) => (
            <Events
              key={index}
              title={event.title}
              date={event.date}
              location={event.location}
              description={event.description}
            />
          ))
        ) : (
          <p>No upcoming events at the moment. Please check back regularly for updates!</p>
        )}
      </div>
    );
  }
}


export default Events
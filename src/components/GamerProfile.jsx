import React from 'react';
import './gamer.css'; // Import CSS file for styling
import { useParams } from 'react-router-dom';

const GamerProfile = () => {
  const articles = [
    {
      id: 0,
      gamer: 'Franny Duran',
      excerpt: `I am a gamer through and through`,
      joindate: 'June 26, 2023'
    },
    {
      id: 1,
      gamer: 'Gooner',
      excerpt: `I am a gamer through and through`,
      joindate: 'June 26, 2023'
    },
    {
      id: 2,
      gamer: 'Joel',
      excerpt: `I am a gamer through and through`,
      joindate: 'June 26, 2023'
    },
    {
      id: 3,
      gamer: 'Chuy',
      excerpt: `I am a gamer through and through`,
      joindate: 'June 26, 2023'
    },
    {
      id: 4,
      gamer: 'Pablo',
      excerpt: `I am a gamer through and through`,
      joindate: 'June 26, 2023'
    },
    {
      id: 5,
      gamer: 'Peter',
      excerpt: `I am a gamer through and through`,
      joindate: 'June 26, 2023'
    },
    {
      id: 6,
      gamer: 'Roach',
      excerpt: `I am a gamer through and through`,
      joindate: 'June 26, 2023'
    },
    {
      id: 7,
      gamer: 'Nate',
      excerpt: `I am a gamer through and through`,
      joindate: 'June 26, 2023'
    }
    
  ];

  const params = useParams();
  let { gamerId } = params;
  switch (gamerId) {
    case 'franny':
      gamerId = 0;
      break;
    case 'gooner':
      gamerId = 1;
      break;
    case 'joel':
      gamerId = 2;
      break;
    case 'chuy':
      gamerId = 3;
      break;
    case 'pablo':
      gamerId = 4;
      break;
    case 'peter':
      gamerId = 5;
      break;
    case 'roach':
      gamerId = 6;
      break;
    case 'nate':
      gamerId = 7;
      break;
    default:
      gamerId = 0;
  } 
  return (
    <div className="main__news">
    <div className="article">
      <h1 className='news__title'>{articles[gamerId].gamer}</h1>
      <p className="articleContent"> {articles[gamerId].excerpt}</p>
      <p className="article-info">
        <span className="article-author">DATE JOINED</span> | {articles[gamerId].joindate} 
      </p>

    </div>
    </div>
  );
};

export default GamerProfile;
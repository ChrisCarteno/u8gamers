import React from 'react';
import './gamer.css'; // Import CSS file for styling
import { useParams } from 'react-router-dom';
import FrannyImg from '../images/Franny.png'
import GoonerImage from '../images/GoonerRIkcy.png'
import JoelTank from '../images/JoelTank.png'
import uCHuy from '../images/u8CHuy.png'
import PabloMinerals from '../images/PabloMinerals.png'
import PETERDAYS from '../images/PETERDAYS.jpg'
import ROACHATA from '../images/ROACHATA.jpg'
import NateDog from '../images/NateDog.jpg'

const GamerProfile = () => {
  const articles = [
    {
      id: 0,
      gamer: 'Franny Duran',
      excerpt: `I am a gamer through and through`,
      joindate: 'June 26, 2023',
      image: FrannyImg
    },
    {
      id: 1,
      gamer: 'Gooner',
      excerpt: `I am a gamer through and through`,
      joindate: 'June 26, 2023',
      image: GoonerImage
    },
    {
      id: 2,
      gamer: 'Joel',
      excerpt: `I am a gamer through and through`,
      joindate: 'June 26, 2023',
      image: JoelTank
    },
    {
      id: 3,
      gamer: 'Chuy',
      excerpt: `I am a gamer through and through`,
      joindate: 'June 26, 2023',
      image: uCHuy
    },
    {
      id: 4,
      gamer: 'Pablo',
      excerpt: `I am a gamer through and through`,
      joindate: 'June 26, 2023',
      image: PabloMinerals
    },
    {
      id: 5,
      gamer: 'Peter',
      excerpt: `I am a gamer through and through`,
      joindate: 'June 26, 2023',
      image: PETERDAYS
    },
    {
      id: 6,
      gamer: 'Roach',
      excerpt: `I am a gamer through and through`,
      joindate: 'June 26, 2023',
      image: ROACHATA
    },
    {
      id: 7,
      gamer: 'Nate',
      excerpt: `I am a gamer through and through`,
      joindate: 'June 26, 2023',
      image: NateDog
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
    <div className="">
    <div className="gamer">
      <h1 className='news__title'>{articles[gamerId].gamer}</h1>
      <div className="">
        <img style={{width: "50%"}} src={articles[gamerId].image} alt="Logoooo"/>
       <p className="articleContent"> {articles[gamerId].excerpt}</p>
      </div>
      <p className="article-info">
        <span className="article-author">DATE JOINED</span> | {articles[gamerId].joindate} 
      </p>
    </div>
    </div>
  );
};

export default GamerProfile;
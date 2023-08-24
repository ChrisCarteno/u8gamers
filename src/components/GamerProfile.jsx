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
      excerpt: `Don't hate the player, hate the game.`,
      joindate: 'August 8th 2014',
      image: FrannyImg,
      type: 'racer',
      height: '5\' 10\"',
      weight: '165 lbs',
      age: '24',
      favgame: 'Need For Speed',
      favfood: 'Pizza',
      favcolor: 'hotpink'
    },
    {
      id: 1,
      gamer: 'Gooner',
      excerpt: `I'm roonkie of the year!`,
      joindate: 'March 20th 2019',
      image: GoonerImage,
      type: 'gamer',
      height: '5\' 10\"',
      weight: '220 lbs',
      age: '24',
      favgame: 'Super Smash Bros',
      favfood: 'Chilaquiles',
      favcolor: '#003566',
    },
    {
      id: 2,
      gamer: 'Joel',
      excerpt: `Trust the process, not the RNG.`,
      joindate: 'March 20th 2014',
      image: JoelTank,
      type: 'physical',
      height: '5\' 11\"',
      weight: '172 lbs',
      age: '24',
      favgame: 'Super Smash Bros',
      favfood: 'Pizza',
      favcolor: '#00b4d8'
    },
    {
      id: 3,
      gamer: 'Chuy',
      excerpt: `Ready for the grind. Taking no L’s today!`,
      joindate: 'March 20th 2020',
      image: uCHuy,
      type: 'scrapper',
      height: '5\' 8\"',
      weight: '172 lbs',
      age: '25',
      favgame: 'Assassins Creed',
      favfood: 'Enchiladas',
      favcolor: 'Green'
    },
    {
      id: 4,
      gamer: 'Pablo',
      excerpt: `Stay calm and respawn.`,
      joindate: 'January 20th 2021',
      image: PabloMinerals,
      type: 'gamer',
      height: '5\' 10\"',
      weight: '162 lbs',
      age: '24',
      favgame: 'Mortal Kombat',
      favfood: 'Tacos',
      favcolor: 'darkorchid'
    },
    {
      id: 5,
      gamer: 'Peter',
      excerpt: `Keyboard warrior in the flesh.`,
      joindate: 'February 20th 2018',
      image: PETERDAYS,
      type: 'creative',
      height: '5\' 9\"',
      weight: '159 lbs',
      age: '24',
      favgame: 'MineCraft',
      favfood: 'Pizza',
      favcolor: 'midnightblue'
    },
    {
      id: 6,
      gamer: 'Roach',
      excerpt: `Wake, game, repeat.`,
      joindate: 'March 20th 2014',
      image: ROACHATA,
      type: 'gamer',
      height: '5\' 8\"',
      weight: '180 lbs',
      age: '24',
      favgame: 'League of Legends',
      favfood: 'Pancakes',
      favcolor: '#90323d'
    },
    {
      id: 7,
      gamer: 'Nate',
      excerpt: `Waawaa Weewooo I game, buibuibeibeibeip.`,
      joindate: 'March 20th 2019',
      image: NateDog,
      type: 'brawler',
      height: '5\' 10\"',
      weight: '270 lbs',
      age: '24',
      favgame: 'Elden Ring',
      favfood: 'Cheese Burgers',
      favcolor: '#ef476f'
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
    <div className="gamer">
      <h1 className="gamerTitle">{articles[gamerId].gamer}</h1>
      <div className="gamerContent">
        <img className='gamer__image' src={articles[gamerId].image} alt="Logoooo"/>
        <div>
          <p className="gamer__desc"> {articles[gamerId].excerpt}</p>
          <div className='gamer__info' style={{backgroundColor: articles[gamerId].favcolor} }>
            <div className='gamer__info__item'>
              <span className="gamer__title">Type</span> | {articles[gamerId].type}
            </div>
            <div className='gamer__info__item'>
              <span className="gamer__title">HEIGHT</span> | {articles[gamerId].height}
            </div>
            <div className='gamer__info__item'>
              <span className="gamer__title">WEIGHT</span> | {articles[gamerId].weight}
            </div>
            <div className='gamer__info__item'>
              <span className="gamer__title">AGE</span> | {articles[gamerId].age}
            </div>
            <div className='gamer__info__item'>
              <span className="gamer__title">FAVORITE GAME</span> | {articles[gamerId].favgame}
            </div>
            <div className='gamer__info__item'>
              <span className="gamer__title">FAVORITE FOOD</span> | {articles[gamerId].favfood}
            </div>
            <div className='gamer__info__item'>
              <span className="gamer__title">FAVORITE COLOR</span> | {articles[gamerId].favcolor}
            </div>
          </div>
        </div>
      </div>
      <p className="article-info">
        <span className="gamer__title">DATE JOINED</span> | {articles[gamerId].joindate} 
      </p>
    </div>
  );
};

export default GamerProfile;
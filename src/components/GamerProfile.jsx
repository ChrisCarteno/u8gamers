import React from 'react';
import './gamer.css'; // Import CSS file for styling
import { useParams } from 'react-router-dom';

const GamerProfile = () => {
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
      title: 'Ricardo Calderon: The Rising Star of Super Smash Brothers',
      content: `In the electrifying world of competitive Super Smash Brothers, a new player has emerged, captivating audiences and leaving a trail of defeated opponents in his wake. Ricardo Calderon, a young and talented prodigy, is making waves in the gaming community with his exceptional skills and unwavering determination. As his journey unfolds, Calderon's name is becoming synonymous with excellence in the Super Smash Brothers scene.
Hailing from Southern California, Calderon discovered his passion for gaming at an early age. With an innate talent for strategy and lightning-fast reflexes, he quickly gravitated towards Super Smash Brothers, finding his true calling in the game. Under the tag of "Ronky Kong" he has honed his skills, dedicating countless hours to mastering the game's intricacies.
What sets Calderon apart is not only his exceptional gameplay, but also his unwavering dedication to improvement. He approaches each match with unwavering focus, analyzing opponents' strategies, studying game mechanics, and constantly refining his own techniques. Calderon's commitment to self-improvement is evident in every move he makes, consistently pushing the boundaries of what is possible in the game.
With a formidable presence on both online platforms and local tournaments, Calderon has quickly risen through the ranks, earning respect from fellow players and spectators alike. His skillful maneuvering, calculated decision-making, and lightning-quick reflexes have become the stuff of legends, leaving opponents bewildered and audiences on the edge of their seats.
Beyond his individual prowess, Calderon has also made a mark as a charismatic and humble figure within the gaming community. Known for his sportsmanship and genuine love for the game, he has garnered a loyal fan base that supports him every step of the way. Calderon's infectious enthusiasm and genuine interactions have made him a beloved figure within the Super Smash Brothers community.
As the competitive scene takes notice of Calderon's rise, he has set his sights on larger stages and more prestigious tournaments. With ambitions to compete on a national level, he is eager to prove himself against the world's best players. The Super Smash Brothers community eagerly anticipates Calderon's participation in upcoming events, eager to witness his relentless pursuit of victory and the exhilarating gameplay he consistently delivers.
Off the battlefield, Calderon is an inspiration to aspiring gamers, encouraging them to pursue their dreams and embrace their passion for gaming. He actively engages with his fans through social media, sharing tips, tricks, and personal insights into his journey. Calderon's presence serves as a testament to the power of perseverance, dedication, and the boundless possibilities that gaming offers.
Ricardo Calderon's meteoric rise in the Super Smash Brothers competitive scene is a testament to his immense talent, unwavering dedication, and magnetic personality. As he continues to evolve as a player, his journey promises to inspire a new generation of gamers and reshape the landscape of professional gaming. With each victory, Calderon etches his name in the annals of Super Smash Brothers history, solidifying his status as a rising star and a force to be reckoned with. The future holds endless possibilities for this extraordinary player, and the gaming world eagerly awaits the next chapter in Ricardo Calderon's remarkable journey.`,
      author: 'Christian Carteno',
      date: 'June 27, 2023'
    },
    
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
      <h1 className='news__title'>{articles[gamerId].title}</h1>
      <p className="articleContent"> {articles[gamerId].content}</p>
      <p className="article-info">
        By <span className="article-author">{articles[gamerId].author}</span> | {articles[gamerId].date} 
      </p>

    </div>
    </div>
  );
};

export default GamerProfile;
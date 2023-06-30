import { BrowserRouter, Routes, Route } from 'react-router-dom'

import React from 'react'
import './news.css'
import NewsArticle from '../../components/NewsArticle';

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
      title: 'Ricardo Calderon: The Rising Star of Super Smash Brothers',
      content: `In the electrifying world of competitive Super Smash Brothers, a new player has emerged, captivating audiences and leaving a trail of defeated opponents in his wake. Ricardo Calderon, a young and talented prodigy, is making waves in the gaming community with his exceptional skills and unwavering determination. As his journey unfolds, Calderon's name is becoming synonymous with excellence in the Super Smash Brothers scene.
Hailing from [hometown], Calderon discovered his passion for gaming at an early age. With an innate talent for strategy and lightning-fast reflexes, he quickly gravitated towards Super Smash Brothers, finding his true calling in the game. Under the tag of "Calderon Smash," he has honed his skills, dedicating countless hours to mastering the game's intricacies.
What sets Calderon apart is not only his exceptional gameplay, but also his unwavering dedication to improvement. He approaches each match with unwavering focus, analyzing opponents' strategies, studying game mechanics, and constantly refining his own techniques. Calderon's commitment to self-improvement is evident in every move he makes, consistently pushing the boundaries of what is possible in the game.
With a formidable presence on both online platforms and local tournaments, Calderon has quickly risen through the ranks, earning respect from fellow players and spectators alike. His skillful maneuvering, calculated decision-making, and lightning-quick reflexes have become the stuff of legends, leaving opponents bewildered and audiences on the edge of their seats.
Beyond his individual prowess, Calderon has also made a mark as a charismatic and humble figure within the gaming community. Known for his sportsmanship and genuine love for the game, he has garnered a loyal fan base that supports him every step of the way. Calderon's infectious enthusiasm and genuine interactions have made him a beloved figure within the Super Smash Brothers community.
As the competitive scene takes notice of Calderon's rise, he has set his sights on larger stages and more prestigious tournaments. With ambitions to compete on an international level, he is eager to prove himself against the world's best players. The Super Smash Brothers community eagerly anticipates Calderon's participation in upcoming events, eager to witness his relentless pursuit of victory and the exhilarating gameplay he consistently delivers.
Off the battlefield, Calderon is an inspiration to aspiring gamers, encouraging them to pursue their dreams and embrace their passion for gaming. He actively engages with his fans through social media, sharing tips, tricks, and personal insights into his journey. Calderon's presence serves as a testament to the power of perseverance, dedication, and the boundless possibilities that gaming offers.
Ricardo Calderon's meteoric rise in the Super Smash Brothers competitive scene is a testament to his immense talent, unwavering dedication, and magnetic personality. As he continues to evolve as a player, his journey promises to inspire a new generation of gamers and reshape the landscape of professional gaming. With each victory, Calderon etches his name in the annals of Super Smash Brothers history, solidifying his status as a rising star and a force to be reckoned with. The future holds endless possibilities for this extraordinary player, and the gaming world eagerly awaits the next chapter in Ricardo Calderon's remarkable journey.`,
      author: 'Christian Carteno',
      date: 'June 27, 2023'
    },
    {
      id: 3,
      title: 'Nate Rodriguez: Overcoming Obstacles in the Realm of Elden Ring',
      content: `In the vast and treacherous world of Elden Ring, one player's journey stands out as a testament to perseverance and resilience. Nate Rodriguez, a determined and dedicated gamer, has been on a challenging quest to conquer the trials and tribulations that this mystical realm presents. Despite facing numerous setbacks and hurdles, Rodriguez's unwavering spirit fuels his determination to succeed.
      As a fan of FromSoftware's notoriously difficult games, Rodriguez eagerly embraced the release of Elden Ring. However, his journey through this unforgiving universe has proven to be a true test of his skills and patience. Encountering formidable foes, intricate puzzles, and perilous landscapes, Rodriguez has discovered that Elden Ring is not for the faint of heart.
      Struggling through countless defeats and setbacks, Rodriguez has faced the depths of frustration that come with each failed attempt. However, it is his unyielding determination that sets him apart. Rather than succumbing to discouragement, Rodriguez harnesses his failures as fuel to improve and refine his strategies.
      Rodriguez's journey is not just a personal struggle but also a source of inspiration for fellow gamers. Through his streams and online presence, he openly shares his experiences, providing valuable insights into the challenges of Elden Ring. His authenticity and vulnerability resonate with others who have faced similar struggles in their own gaming endeavors.
      Engaging with fellow players, he actively participates in forums, discussions, and seeks advice from seasoned Elden Ring veterans. Rodriguez understands that collaboration and support from the community can make all the difference in overcoming the obstacles that lie ahead.
      As he navigates through Elden Ring's intricate world, Rodriguez continues to grow as a player. Each victory, no matter how small, is cherished and celebrated, serving as a testament to his progress and dedication. Rodriguez's journey serves as a reminder that success often comes to those who are willing to embrace challenges and persist through adversity.
      While the path may be arduous, Rodriguez remains undeterred. He sees every defeat as an opportunity to learn and adapt, refining his skills and deepening his understanding of the game's mechanics. With each encounter, he hones his reflexes, refines his strategies, and inches closer to the triumph that he seeks.
      Nate Rodriguez's journey through Elden Ring is a testament to the indomitable human spirit in the face of daunting challenges. His unwavering determination, resilience, and openness serve as an inspiration to gamers around the world who encounter similar struggles in their own virtual realms. As he persists in his quest, Rodriguez embodies the belief that triumph is not solely measured by the destination but by the lessons learned and personal growth experienced along the way.
      In the realm of Elden Ring, where danger lurks at every corner, Nate Rodriguez continues to rise, undeterred and unyielding. Through his perseverance, he not only battles the adversaries within the game but also inspires others to persist in their own quests, whatever they may be. Rodriguez's story is a testament to the power of determination, reminding us that even in the face of adversity, the pursuit of victory is a noble and worthwhile endeavor.`,
      author: 'Christian Carteno',
      date: 'June 28, 2023'
    }
  ];

  const mystyle = {
  };

  return (
    <div className="main__news" style={mystyle}>
    <div className="news-articles">
      <h1 className='news__title'>Latest News Articles</h1>
      {/* <BrowserRouter>
      <Routes>
        <Route path="/news/:id" component={<NewsArticle />} />
      </Routes>
    </BrowserRouter> */}
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

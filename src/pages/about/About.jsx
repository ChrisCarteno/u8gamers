import * as React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../../images/logo55.png'
import Flexbox from '../../components/Flexbox';

import './about.css'

const About = () => {
  return (
    <div>
      <h1 className='aboutHeader'>ABOUT U8</h1>
      <div className="aboutSection">
        Elevate Your Game: At u8 Gamers, we believe in pushing the boundaries of what's possible in gaming. Whether you're an aspiring pro gamer or a casual enthusiast, our team of experienced coaches and mentors will help you refine your skills, develop winning strategies, and reach new heights of achievement.
        <br/>
        Join a Thriving Community: Gaming is more than just playing—it's about connecting with like-minded individuals who share your passion. When you become part of the u8 Gamers community, you'll find a vibrant and welcoming group of fellow gamers who will become your teammates, friends, and lifelong companions on your gaming journey.
        <br/>
        {/* need to fix the following line too many Opportunites  */}
        Embrace Endless Opportunities: u8 Gamers opens doors to exciting opportunities in the gaming world. As a member, you'll gain access to exclusive tournaments, leagues, and events where you can showcase your talents and compete against top-tier gamers. Who knows? You might catch the eye of sponsors or professional teams scouting for rising stars.
        <br/>
        Professional Support at Your Fingertips: We understand the challenges that gamers face, from technical issues to mental fatigue. That's why u8 Gamers provides comprehensive support services to ensure you can focus on what you do best—gaming. Our dedicated team is available round-the-clock to assist you with technical queries, mental well-being, and any other concerns you may have.
        <br/>
        Unleash Your Creativity: Gaming is not just about winning; it's a canvas for your creativity. At u8 Gamers, we celebrate your unique style and help you express yourself through content creation, streaming, and esports journalism. Unleash your creativity and become a respected influencer in the gaming community.
        <br/>
        Join u8 Gamers today and embark on a thrilling gaming adventure that will redefine your gaming experience. Together, we'll conquer new challenges, forge unforgettable friendships, and create gaming memories that will last a lifetime. Get ready to level up with u8 Gamers—the ultimate gaming organization for champions like you!
        <br/>
        Visit our website at <a href='https://www.u8gamers.com' alt="u8gamers">www.u8gamers.com</a> and discover the power of play like never before. Let's #GameOnTogether!
      </div>
  </div>
  )
}

export default About
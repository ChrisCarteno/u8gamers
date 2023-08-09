import React from 'react';
import './gamer.css'; // Import CSS file for styling
import { useParams } from 'react-router-dom';

const GamerProfile = () => {
  const profiles = [
    {
      id: 1,
      title: 'franny',
      content: 'Franny Duran is one of the great gamers of all time.',
    }
  ];

  let profilesArr = profiles[0].content.split('.');
  console.log(profilesArr);

  const params = useParams();
  let { gamerId } = params;

  return (
    <div >
      
      <h1 >{profiles[gamerId].title}</h1>
      <p >{profiles[gamerId].content}</p>
      <div>thtistesfseef</div>
      <div>thtistesfseef</div>

      <div>thtistesfseef</div>

      <div>thtistesfseef</div>

      <div>thtistesfseef</div>

      <div>thtistesfseef</div>

      <div>thtistesfseef</div>

    </div>
  );
};

export default GamerProfile;
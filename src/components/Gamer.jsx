import React from 'react';
import './gamer.css'; // Import CSS file for styling
import { useParams } from 'react-router-dom';

const GamerProfile = () => {
  const profiles = [
    {
      id: 1,
    }
  ];

  let profilesArr = profiles[0].content.split('.');
  console.log(profilesArr);

  const params = useParams();
  let { newsId } = params;

  return (
    <div className="gamer">
      <h1 className='gamer__title'>{profiles[newsId].title}</h1>
      <p className="gamerContent"> {profiles[newsId].title}</p>
      <p className="gamer-info">
        By <span className="gamer-author">{profiles[newsId].title}</span> | {profiles[newsId].date} 
      </p>

    </div>
  );
};

export default GamerProfile;
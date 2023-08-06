import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ActorDetail = ({ actorId }) => {
  const [actor, setActor] = useState(null);

  useEffect(() => {
    loadActorDetails();
  }, []);

  const loadActorDetails = async () => {
    try {
      const response = await axios.get(`/actor/${actorId}`);
      setActor(response.data);
    } catch (error) {
      console.error('Error loading actor details:', error);
    }
  };

  if (!actor) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{actor.actorName}</h1>
      <p>직업: {actor.actorJob}</p>
      <h3>최근 출연 작품</h3>
      <ul>
        <li>{actor.actorRecentPlay1}</li>
        <li>{actor.actorRecentPlay2}</li>
        <li>{actor.actorRecentPlay3}</li>
      </ul>
    </div>
  );
};

export default ActorDetail;

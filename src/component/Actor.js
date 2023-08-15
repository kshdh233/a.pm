import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ActorDetail from './ActorDetail'; // 배우 상세 정보 컴포넌트

const Actor = () => {
  const [actorList, setActorList] = useState([]);
  const [selectedActorId, setSelectedActorId] = useState(null);

  useEffect(() => {
    loadActorList();
  }, []);

  const loadActorList = async () => {
    try {
      const response = await axios.get('https://apm-backend-a20e349efc23.herokuapp.com/actor/list/pm');
      setActorList(response.data.content);
    } catch (error) {
      console.error('Error loading actor list:', error);
    }
  };

  const handleActorClick = (actorId) => {
    setSelectedActorId((prevSelectedId) => (prevSelectedId === actorId ? null : actorId));
  };

  return (
    <div>
      <h1>배우 목록</h1>
      <ul>
        {actorList.map((actor) => (
          <li key={actor.actorId} onClick={() => handleActorClick(actor.actorId)} style={{ cursor: 'pointer' }}>
            {actor.actorName}
          </li>
        ))}
      </ul>
      {selectedActorId && <ActorDetail actorId={selectedActorId} />}
    </div>
  );
};

export default Actor;

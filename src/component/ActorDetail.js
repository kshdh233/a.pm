import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ActorDetail = () => {
  const { actorId } = useParams();
  const [actor, setActor] = useState(null);

  useEffect(() => {
    const fetchActorDetail = async () => {
      try {
        const response = await axios.get(`/actor/${actorId}`);
        setActor(response.data); // 서버에서 가져온 배우 정보를 상태로 설정
      } catch (error) {
        console.error('Error loading actor detail:', error);
      }
    };

    fetchActorDetail();
  }, [actorId]);

  if (!actor) {
    return <div>Loading...</div>;
  }

  return (
    <div style={containerStyle}>
      <div>
        <img
          src={actor.image}
          alt={actor.actorName}
          style={{
            float: 'left',
            marginRight: '20px',
            marginBottom: '20px',
            width: '200px',
            height: 'auto',
          }}
        />
      </div>
      <div style={infoStyle}>
        <h2>{actor.actorName}</h2>
        <p><strong>직업:</strong> {actor.actorJob}</p>
        <p style={recentPlayStyle}><strong>최근 출연 작품1:</strong> {actor.actorRecentPlay1}</p>
        <p style={recentPlayStyle}><strong>최근 출연 작품2:</strong> {actor.actorRecentPlay2}</p>
        <p style={recentPlayStyle}><strong>최근 출연 작품3:</strong> {actor.actorRecentPlay3}</p>
      </div>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  alignItems: 'flex-start',
};

const infoStyle = {
  marginLeft: '20px',
};

const recentPlayStyle = {
  marginTop: '5px',  // 각 작품 정보 사이의 간격을 늘립니다.
};

export default ActorDetail;

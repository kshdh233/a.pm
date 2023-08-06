import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ActorList = () => {
  const [actorList, setActorList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    loadActorList(currentPage);
  }, [currentPage]);

  const loadActorList = async (page) => {
    try {
      const response = await axios.get(`/actor/list?page=${page}`);
      setActorList(response.data.content);
    } catch (error) {
      console.error('Error loading actor list:', error);
    }
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>전체 배우 목록</h1>
      <ul style={listStyle}>
        {actorList.map((actor) => (
          <li key={actor.id} style={itemStyle}>
            <h3>{actor.actorName}</h3>
            <p>{actor.bio}</p>
          </li>
        ))}
      </ul>
      <div style={buttonContainerStyle}>
        <button style={buttonStyle} onClick={() => setCurrentPage((prev) => prev - 1)}>이전 페이지</button>
        <button style={buttonStyle} onClick={() => setCurrentPage((prev) => prev + 1)}>다음 페이지</button>
      </div>
    </div>
  );
};

const containerStyle = {
  width: '80%',
  maxWidth: '600px',
  margin: '0 auto',
  padding: '20px',
};

const headingStyle = {
  textAlign: 'center',
  fontSize: '24px',
  marginBottom: '20px',
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
};

const itemStyle = {
  border: '1px solid #ccc',
  borderRadius: '5px',
  padding: '10px',
  margin: '10px 0',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
};

const buttonStyle = {
  padding: '10px 20px',
  margin: '0 5px',
  borderRadius: '5px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
};

export default ActorList;

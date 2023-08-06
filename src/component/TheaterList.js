import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TheaterDetail from './TheaterDetail';

const TheaterList = () => {
  const [theaterList, setTheaterList] = useState([]);
  const [selectedTheaterId, setSelectedTheaterId] = useState(null);

  useEffect(() => {
    loadTheaterList();
  }, []);

  const loadTheaterList = async () => {
    try {
      const response = await axios.get('/theater/list');
      setTheaterList(response.data);
    } catch (error) {
      console.error('Error loading theater list:', error);
    }
  };

  const handleTheaterClick = (theaterId) => {
    setSelectedTheaterId((prevSelectedId) => (prevSelectedId === theaterId ? null : theaterId));
  };

  return (
    <div>
      <h1>극장 목록</h1>
      <ul>
        {theaterList.map((theater) => (
          <li
            key={theater.theaterId}
            onClick={() => handleTheaterClick(theater.theaterId)}
            style={{ cursor: 'pointer' }}
          >
            {theater.theaterName}
          </li>
        ))}
      </ul>
      {selectedTheaterId && <TheaterDetail theaterId={selectedTheaterId} />}
    </div>
  );
};

export default TheaterList;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TheaterDetail = ({ theaterId }) => {
  const [theater, setTheater] = useState(null);

  useEffect(() => {
    loadTheaterDetails();
  }, []);

  const loadTheaterDetails = async () => {
    try {
      const response = await axios.get(`/theater/${theaterId}`);
      setTheater(response.data);
    } catch (error) {
      console.error('Error loading theater details:', error);
    }
  };

  if (!theater) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{theater.theaterName}</h1>
      <p>위치: {theater.theaterLocation}</p>
      <h3>최근 공연</h3>
      <ul>
        <li>{theater.theaterRecentPlay1}</li>
        <li>{theater.theaterRecentPlay2}</li>
        <li>{theater.theaterRecentPlay3}</li>
      </ul>
    </div>
  );
};

export default TheaterDetail;

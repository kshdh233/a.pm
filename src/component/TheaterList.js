import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TheaterList = () => {
  const [theaterList, setTheaterList] = useState([]);

  useEffect(() => {
    const fetchTheaters = async () => {
      try {
        const response = await axios.get('/theater/list');

        const seoulTheaters = response.data.filter(theater => theater.theaterLocation.includes('서울'));
        
        setTheaterList(seoulTheaters);
      } catch (error) {
        console.error('Error fetching theaters:', error);
      }
    };

    // 함수 호출
    fetchTheaters();
  }, []);

  return (
    <div>
      <h2>서울 지역 극장 목록</h2>
      <ul>
        {theaterList.map(theater => (
          <li key={theater.theaterId}>
            <p>극장명: {theater.theaterName}</p>
            <p>극장 위치: {theater.theaterLocation}</p>
            {/* 여기에 필요한 정보를 추가로 표시하거나 수정 가능 */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TheaterList;
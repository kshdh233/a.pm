import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TheaterList = () => {
  const [theaterList, setTheaterList] = useState([]);

  useEffect(() => {
    // 서버에서 데이터 가져오는 함수 정의
    const fetchTheaters = async () => {
      try {
        // Axios를 이용하여 서버에서 극장 목록 가져오기
        const response = await axios.get('/theater/list');

        // 서버에서 받아온 데이터 중에서 서울 지역인 극장만 필터링하여 React 상태에 저장
        setTheaterList(response.data);
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

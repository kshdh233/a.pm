import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PmShowDetail() {
  const [pmShow, setpmShow] = useState(null);
  const { pmShowId } = useParams();

  useEffect(() => {
    fetch(`/pmshow/${pmShowId}`)
      .then(response => response.json())
      .then(data => {
        setpmShow(data);
      });
  }, [pmShowId]);

  if (!pmShow) {
    return <div>로딩 중...</div>;
  }

  return (
    <div style={containerStyle}>
      <h1>{pmShow.title}</h1>
      <img src={pmShow.poster} alt={`${pmShow.title} 포스터`} />
      <div style={detailTextStyle}>
        <p><strong>공연장:</strong> {pmShow.theater.theaterName}</p>
        <p><strong>위치:</strong> {pmShow.theater.theaterLocation}</p>
        <p><strong>공연 기간:</strong> {pmShow.showDate}</p>
        <p><strong>러닝 타임:</strong> {pmShow.runningTime}</p>
        <p><strong>장르:</strong> {pmShow.genre}</p>
        {/* 필요한 다른 상세 정보 표시 */}
      </div>
    </div>
  );
}

const containerStyle = {
  width: '80%',
  maxWidth: '800px', 
  margin: '0 auto',
  padding: '20px',
};

const detailTextStyle = {
  fontSize: '14px', 
  marginTop: '20px', 
};

export default PmShowDetail;
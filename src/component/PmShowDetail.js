import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Btn.css';

function PmShowDetail() {
  const [pmShow, setPmShow] = useState(null);
  const [currentSection, setCurrentSection] = useState('playinfo'); // 초기 섹션

  const { pmShowId } = useParams();

  useEffect(() => {
    fetch(`/pmshow/${pmShowId}`)
      .then(response => response.json())
      .then(data => {
        setPmShow(data);
      });
  }, [pmShowId]);

  if (!pmShow) {
    return <div>로딩 중...</div>;
  }

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  // 각 섹션에 맞는 이미지들 배열로 관리
  const sectionImages = {
    playinfo: [pmShow.playinfo1, pmShow.playinfo2],
    actorschedule: [pmShow.castinginfo1, pmShow.castinginfo2],
    event: [pmShow.saleinfo1, pmShow.saleinfo2],
    notice: [pmShow.notice1, pmShow.notice2, pmShow.otherNotice]
  };

  return (
    <div style={containerStyle}>
      <img src={pmShow.poster} alt={`${pmShow.title} 포스터`} />
      <div style={detailTextStyle}>
        <p><strong>공연장:</strong> {pmShow.theaterName}</p>
        <p><strong>위치:</strong> {pmShow.theater.theaterLocation}</p>
        <p><strong>공연 기간:</strong> {pmShow.showDate}</p>
        <p><strong>러닝 타임:</strong> {pmShow.runningTime}</p>
        <p><strong>장르:</strong> {pmShow.genre}</p>
        <p><strong>캐스팅:</strong> {pmShow.castingInformation}</p>
        <p><strong>시놉시스:</strong> {pmShow.synopsis}</p>
        <div style={playinfoStyle}>
          <button className="swiper-slide-btn" onClick={() => handleSectionChange('playinfo')}>공연 정보</button>
          <button className="swiper-slide-btn" onClick={() => handleSectionChange('actorschedule')}>배우 스케줄</button>
          <button className="swiper-slide-btn" onClick={() => handleSectionChange('event')}>이벤트</button>
          <button className="swiper-slide-btn" onClick={() => handleSectionChange('notice')}>공지사항</button>
          {currentSection in sectionImages && (
            <div>
              {sectionImages[currentSection].map((image, index) => (
                image ? (
                  <img
                    key={index}
                    src={image}
                    alt={`${pmShow.title} ${currentSection} 이미지 ${index + 1}`}
                    style={playinfoImageStyle}
                  />
                ) : null
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // 수직 가운데 정렬
  width: '100%',
  margin: '0',
  padding: '0',
  boxSizing: 'border-box',
  marginTop: '20px'
};

const detailTextStyle = {
  fontSize: '14px',
  marginTop: '20px',
};

const playinfoStyle = {
  marginTop: '20px',
};

const playinfoImageStyle = {
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
};

export default PmShowDetail;

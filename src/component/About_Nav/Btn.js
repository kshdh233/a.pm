import React from "react";
import { useNavigate } from "react-router-dom";

function Btn({ navigateToPlay, navigateToSchedule, navigateToEvent, navigateToVenue}) {
  const navigate = useNavigate();

  const handlePlayClick = () => {
    navigateToPlay(); 
  };

  const handleScheduleClick = () => {
    navigateToSchedule(); 
  };

  const handleEventClick = () => {
    navigateToEvent(); 
  };

  const handleVenueClick = () => {
    navigateToVenue(); 
  };

  return (
    <div className="swiper-container">
      <button className="swiper-slide-btn" onClick={handlePlayClick}>
        공연 정보
      </button>
      <button className="swiper-slide-btn" onClick={handleScheduleClick}>
        배우 스케줄
      </button>
      <button className="swiper-slide-btn" onClick={handleEventClick}>
        이벤트
      </button>
      <button className="swiper-slide-btn" onClick={handleVenueClick}>
        공연장 정보
      </button>
    </div>
  );
}

export default Btn;

import React from 'react';
import { useNavigate } from 'react-router-dom';

function Btn() {
  const navigate = useNavigate();
  
  const navigateToPlay = ()=> {
    navigate("/Play_information_page")
  }
  const navigateToSchedule = ()=> {
    navigate("/Actor_schedule_page")
  }
  const navigateToEvent = ()=> {
    navigate("/Event_page")
  }
  const navigateToVenue = ()=> {
    navigate("/Venue_information_page")
  }

  return (
    <div className="swiper-container">
      <div
        className="swiper-wrapper"
        style={{ transitionDuration: '300em', transform: 'translate3d(20px, 0px, 0px)' }}
      >
        <button data-index="0" className="swiper-slide-btn" onClick={navigateToPlay}>
          공연 정보
        </button>
        <button data-index="1" className="swiper-slide-btn" onClick={navigateToSchedule}>
          배우 스케줄
        </button>
        <button data-index="2" className="swiper-slide-btn" onClick={navigateToEvent}>
          이벤트
        </button>
        <button data-index="3" className="swiper-slide-btn" onClick={navigateToVenue}>
          공연장 정보
        </button>
      </div>
    </div>
  );
}

export default Btn;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from 'react-router-dom';

const Carousell = () => {
  const [popularShows, setPopularShows] = useState([]);
  const navigate = useNavigate();

  const handleImageClick = (link) => {
    navigate(link);
  };

  useEffect(() => {
    // 서버에서 인기 공연 탑텐 목록을 가져오는 API 호출
    axios.get('/pmshow/topTen')
      .then(response => {
        setPopularShows(response.data);
      })
      .catch(error => {
        console.error('Error fetching popular shows:', error);
      });
  }, []);

  return (
    <div className="popular-shows-container">
      <h2>인기 공연 TOP 10</h2>
      <Carousel showThumbs={false} infiniteLoop autoPlay interval={3000}>
        {popularShows.map(pmShow => (
          <div key={pmShow.pmShowId} className="poster-card" onClick={() => handleImageClick(`/pmShow/${pmShow.pmShowId}`)}>
              <img src={pmShow.poster} alt={pmShow.title} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Carousell;

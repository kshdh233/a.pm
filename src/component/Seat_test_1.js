import React, { useState } from 'react';
import axios from 'axios';

function Seat({ seatId, seatName, averageSeatScore, theaterId }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [userComment, setUserComment] = useState('');

  const handleSeatClick = () => {
    setIsPopupOpen(true);
  };

  const handleRatingChange = (event) => {
    setUserRating(parseInt(event.target.value));
  };

  const handleCommentChange = (event) => {
    setUserComment(event.target.value);
  };

  const handleSubmit = () => {
    // 서버로 데이터 전송 (API 호출)
    // userRating와 userComment를 서버로 전송하고 업데이트된 평균 별점을 받아와서 averageSeatScore를 업데이트
    axios.post(`https://apm-backend-a20e349efc23.herokuapp.com/api/seat/${seatId}/rate`, { rating: userRating, comment: userComment })
         .then((response) => {
           const updatedAverageSeatScore = response.data.averageSeatScore;
           setAverageSeatScore(updatedAverageSeatScore);
           setIsPopupOpen(false);
         })
         .catch((error) => {
           console.error('Error submitting rating:', error);
         });
  };

  return (
    <div
      className={`seat ${averageSeatScore > 3 ? 'green' : 'red'}`}
      pk={seatId}
      onClick={handleSeatClick}
    >
      <p>{seatName}</p>
      {isPopupOpen && (
        <div className="popup">
          <h2>Seat {seatName} Review</h2>
          <label htmlFor="rating">Rating: </label>
          <select id="rating" value={userRating} onChange={handleRatingChange}>
            <option value={0}>No Rating</option>
            <option value={1}>1 Star</option>
            <option value={2}>2 Stars</option>
            <option value={3}>3 Stars</option>
            <option value={4}>4 Stars</option>
            <option value={5}>5 Stars</option>
          </select>
          <br />
          <label htmlFor="comment">Comment: </label>
          <textarea
            id="comment"
            value={userComment}
            onChange={handleCommentChange}
          />
          <br />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
}

export default Seat;

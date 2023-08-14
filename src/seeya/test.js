import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../seeya_css/Test.css";
import "../seeya_css/PopUp.css";

function Test() {
  const [seats, setSeats] = useState([]);
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedSeatId, setSelectedSeatId] = useState(null);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  useEffect(() => {
    const fetchSeats = async () => {
      try {
        const response = await axios.get('/seat/list/101'); // theaterId에 실제 극장 ID 사용
        setSeats(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching seats:', error);
      }
    };
    fetchSeats();
  }, []);

  const handleSeatClick = (seatId) => {
    setSelectedSeatId(seatId);
    setPopupOpen(true);
  };

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmitReview = async () => {
    try {
      await axios.post('/api/seat/review', {
        seatId: selectedSeatId,
        rating,
        comment,
      });
      console.log('Review submitted:', selectedSeatId, 'Rating:', rating, 'Comment:', comment);
      setPopupOpen(false);
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <div>
      {/* 좌석 표시 */}
      {seats.map((seat) => (
        <div
          key={seat.seatId}
          className="seat"
          onClick={() => handleSeatClick(seat.seatId)}
        >
          {/* 좌석 내용 */}
          <div className="real-seat" pk={seat.seatId}>
            <p>{seat.seatName-7436}</p>
          </div>
        </div>
      ))}

      {/* 팝업 */}
      {popupOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={() => setPopupOpen(false)}>
              &times;
            </span>
            <h2>좌석 리뷰 작성</h2>
            <p>별점을 매겨주세요:</p>
            <select onChange={handleRatingChange} value={rating}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
            <p>댓글을 작성해주세요:</p>
            <textarea onChange={handleCommentChange} value={comment} />
            <button onClick={handleSubmitReview}>리뷰 제출</button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Test;

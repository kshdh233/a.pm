// import React, { useState, useEffect } from 'react';
// import Test from '../seeya/test';

// import axios from 'axios';

// function SeatMap() {
//   const [seats, setSeats] = useState([]);

//   // API를 통해 좌석 데이터 가져오기 (예시로 임시 데이터 사용)
//   useEffect(() => {
//     axios.get('seat/list/101')
//          .then((response) => {
//            setSeats(response.data);
//          })
//          .catch((error) => {
//            console.error('Error fetching seats:', error);
//          });

//     // 임시 데이터 사용 예시
//     const mockSeatData = [
//       { seatId: 1, seatName: 'A1', averageSeatScore: 4, theaterId: 1 },
//       { seatId: 2, seatName: 'A2', averageSeatScore: 3, theaterId: 1 },
//       // ...더 많은 좌석 데이터...
//     ];
//     setSeats(mockSeatData);
//   }, []);

//   return (
//     <div>
//       <h1>Theater Seat Map</h1>
//       <div className="seat-map">
//         {seats.map((seat) => (
//           <Seat
//             key={seat.seatId}
//             seatId={seat.seatId}
//             seatName={seat.seatName}
//             averageSeatScore={seat.averageSeatScore}
//             theaterId={seat.theaterId}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SeatMap;

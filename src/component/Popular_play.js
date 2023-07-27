import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import '../styles/Popular_play.css';

export default function PerformanceList() {
  const [performances, setPerformances] = useState([]);  // 공연 그림 db 배열로 저장 
  const [currentPage, setCurrentPage] = useState(1); // 현재 page =1 
  const [totalPages, setTotalPages] = useState(0);  // 전체 page , 현재는 0 --> test data 넣고 동적 변경 [useEffect]
  const performancesPerPage = 3; // 화면에 보이는 page 수 3개 


  useEffect(() => {
    // 테스트용 그림 데이터 ( 배열로 정의)
    const testPerformances = [
      {
        id:1,
        image:'../img/Loopi.jpg',
        title: 'Loopi',
        description : '설명',
      },
      {
        id:2,
        image:'/img/spongebab.png',
        title: 'spongebab',
        description : '설명',
      },{
        id:3,
        image:'/img/ToungE.png',
        title: 'ToungE',
        description : '설명',
      },{
        id:4,
        image:'/img/ToungE.png',
        title: 'ToungE',
        description : '설명',
      },{
        id:5,
        image:'/img/ToungE.png',
        title: 'ToungE',
        description : '설명',
      },{
        id:6,
        image:'/img/ToungE.png',
        title: 'ToungE',
        description : '설명',
      }
    ]
    setPerformances(testPerformances);
    // 테스트용 그림 데이터를 state에 저장
    const totalPages = Math.ceil(testPerformances.length /performancesPerPage);
    setTotalPages(totalPages);
  }, [] );


  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const indexOfLastPerformance = currentPage * performancesPerPage; // ex, 현재 page=2 , 화면 표시 그림슈 3 => 6

  const indexOfFirstPerformance = indexOfLastPerformance - performancesPerPage;  // ex, 6 - 3 => 3

  const currentPerformances = performances.slice(indexOfFirstPerformance, indexOfLastPerformance);

  return (
    <div className="performance-container">
      {currentPerformances.map(performance => (
        <div key={performance.id} className="performance-box">
          <img src={performance.image} alt={performance.title} />
          <h3>{performance.title}</h3>
          <p>{performance.description}</p>
        </div>
      ))}

      <Pagination 
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        size="large"
      />
    </div>
  );
}



  // const totalPages = Math.ceil(performances.length / performancesPerPage);
  // ex, 총 공연 그림 db가 7개면  7/3 => 2.xx -> 3으로 전체 page수  결정 


// useEffect(() => {
//   // Ajax 요청 -> 데이터 가져오기
//   axios.get('http://api.example.com/popular-performances')
//     .then(response => {
//       setPerformances(response.data); // 가져온 데이터 상태에 저장
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }, []);
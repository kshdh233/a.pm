import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import '../styles/Popular_play.css';

export default function PerformanceList() {
  const [performances, setPerformances] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const performancesPerPage = 3;
  const totalPages = Math.ceil(performances.length / performancesPerPage);
/*
  useEffect(() => {
    // Ajax 요청 -> 데이터 가져오기
    axios.get('http://api.example.com/popular-performances')
      .then(response => {
        setPerformances(response.data); // 가져온 데이터 상태에 저장
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
*/
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const indexOfLastPerformance = currentPage * performancesPerPage;
  const indexOfFirstPerformance = indexOfLastPerformance - performancesPerPage;
  const currentPerformances = performances.slice(indexOfFirstPerformance, indexOfLastPerformance);

  return (
    <div>
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
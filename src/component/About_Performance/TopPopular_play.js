import React, { useEffect, useState } from "react";
// import axios from 'axios';
import Pagination from "@mui/material/Pagination";
import "../../styles/Popular_play.css";
import axios from "axios";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Loopi from "../../img/Loopi.jpg";
import sponge from "../../img/spongebab.png";
import ToungE from "../../img/ToungE.webp";
import { Block } from "@mui/icons-material";

const theme = createTheme({
  components: {
    MuiPagination: {
      styleOverrides: {
        ul: {
          justifyContent: "center", // 페이지 번호를 중앙에 정렬
          padding: 0,
        },
        root: {
          marginTop: "20px", // Pagination 컴포넌트와 위 컴포넌트 간의 간격 설정
        },
      },
    },
  },
});

export default function Top_PerformanceList() {

  const [performances, setPerformances] = useState([]); // 공연 그림 db 배열로 저장
  const [currentPage, setCurrentPage] = useState(1); // 현재 page =1
  const [totalPages, setTotalPages] = useState(0); // 전체 page , 현재는 0 --> test data 넣고 동적 변경 [useEffect]
  const performancesPerPage = 3; // 화면에 보이는 page 수 3개

  useEffect(() => {
    // 서버에서 데이터 가져오기
    axios.get("https://apm-backend-a20e349efc23.herokuapp.com/pmshow/topTen")
      .then(response => {
        const pmShowData = response.data; // API 응답 데이터
        setPerformances(pmShowData); // 데이터를 state에 저장

        // 전체 페이지 수 계산
        const totalPages = Math.ceil(pmShowData.length / performancesPerPage);
        setTotalPages(totalPages);
      })
      .catch(error => {
        console.error("Error fetching performance data: ", error);
      });
  }, []);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const indexOfLastPerformance = currentPage * performancesPerPage; // ex, 현재 page=2 , 화면 표시 그림슈 3 => 6

  const indexOfFirstPerformance = indexOfLastPerformance - performancesPerPage; // ex, 6 - 3 => 3

  const currentPerformances = performances.slice(
    indexOfFirstPerformance,
    indexOfLastPerformance
  );

  return (
    <div>
      <div className="performance-container">
        {currentPerformances.map((performance) => (
          <div key={performance.id} className="performance-box">
            <img src={performance.poster} alt={performance.title} />
          
            <p>{performance.description}</p>
          </div>
        ))}
      </div>
      <div>
        <ThemeProvider theme={theme}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          size="large"
          variant="outlined"
        />
        </ThemeProvider>
      </div>
    </div>
  );
}



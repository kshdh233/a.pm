import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../component/About_Logo/Header";
import TopNav from "../../component/About_Nav/TopNav";
import { Outlet } from "react-router-dom";
import axios from "axios";
import ConcertHall_SearchBar from "../../component/About_Search/ConcertHall_SearchBar";

const TheaterPage = () => {
  const { theaterId } = useParams();
  const [theaterInfo, setTheaterInfo] = useState(null);
  const [performances, setPerformances] = useState([]);

  useEffect(() => {
    const fetchTheaterInfo = async () => {
      try {
        const response = await axios.get(`/theater/${theaterId}`);
        const theaterData = response.data;
        setTheaterInfo(theaterData);
      } catch (error) {
        console.error("Error fetching theater info: ", error);
      }
    };

    const fetchPerformances = async () => {
      try {
        const response = await axios.get("/pmshow/list");
        const pmShowData = response.data;
        setPerformances(pmShowData);
      } catch (error) {
        console.error("Error fetching performance data: ", error);
      }
    };

    fetchTheaterInfo();
    fetchPerformances();
  }, [theaterId]);

  // 특정 theaterId에 해당하는 pm_show 데이터 필터링
  const filteredPerformances = performances.filter(
    (performance) => performance.theater.theaterId === Number(theaterId)
  );

  return (
    <div>
      <Header />
      <ConcertHall_SearchBar />
      <TopNav theaterId={theaterId} />
      <div>
        {theaterInfo ? (
          <div>
            <h1>{theaterInfo.theaterName}</h1>
            <p>극장 위치: {theaterInfo.theaterLocation}</p>
          </div>
        ) : (
          <p>극장 정보를 불러오는 중...</p>
        )}
      </div>
      {/* 연결된 공연 정보 표시 */}
      <div>
        {filteredPerformances.map((performance) => (
          <div key={performance.pmShowId}>
            <h2>{performance.title}</h2>
            <img src={performance.poster} alt={performance.title} />
            {/* 추가적인 공연 정보 표시 */}
            <h3>{performance.synopsis}</h3>
          </div>
        ))}
      </div>
      <Outlet theaterId={theaterId} />
    </div>
  );
};

export default TheaterPage;

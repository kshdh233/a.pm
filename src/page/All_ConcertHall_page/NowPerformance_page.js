import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../../styles/Center.css";

function NowPerformance() {
  const { theaterId } = useParams();
  const [theaterInfo, setTheaterInfo] = useState(null);
  const [filteredPerformances, setFilteredPerformances] = useState([]);

  useEffect(() => {
    const fetchTheaterInfo = async () => {
      try {
        const response = await axios.get(`/theater/${theaterId}`);
        const theaterData = response.data;
        setTheaterInfo(theaterData);
        console.log(theaterData);
      } catch (error) {
        console.error("Error fetching theater info: ", error);
      }
    };

    const fetchPerformances = async () => {
      try {
        const response = await axios.get("/pmshow/list");
        const pmShowData = response.data;
       
        const filtered = pmShowData.filter(
          (performance) => performance.theater.theaterId === Number(theaterId)
        );
        
        setFilteredPerformances(filtered);
      } catch (error) {
        console.error("Error fetching performance data: ", error);
      }
    };

    fetchTheaterInfo();
    fetchPerformances();
  }, [theaterId]);

  return (
    <>
      <h1 className="center">현재 진행중인 공연</h1>
      <h2>{filteredPerformances.map((performance) => (
          <div>{performance.title}
          </div>
        ))}</h2>
      {/* 연결된 공연 정보 표시 */}
      <div>
        {filteredPerformances.map((performance) => (
          <div key={performance.pmShowId}>
            <img src={performance.poster} alt={performance.title} />
            {/* 추가적인 공연 정보 표시 */}
            <h3>{performance.synopsis}</h3>
          </div>
        ))}
      </div>
    </>
  );
}

export default NowPerformance;

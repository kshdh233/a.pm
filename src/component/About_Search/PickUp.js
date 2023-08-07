import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PickUp.css";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const [theaterList, setTheaterList] = useState([]);
  const [selectedInitial, setSelectedInitial] = useState("");
  const initialList = ["A", "ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];

  useEffect(() => {
    const fetchDataFromServer = async () => {
      try {
        // 백엔드의 API 엔드포인트로 요청을 보내서 모든 극장 정보를 가져옵니다.
        const response = await axios.get("/theater/list");
        const theaterData = response.data;
        setTheaterList(theaterData);
        console.log(theaterData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromServer();
  }, []);

  const handleInitialClick = (initial) => {
    setSelectedInitial(initial);
  };

  // 자음 구분자별로 극장 이름을 필터링하는 함수
  const filterTheatersByInitial = (initial) => {
    return theaterList.filter((theater) => theater.theaterName.trim().charAt(0) === initial);
  };

  return (
    <div>
      <div className="Sortation_container">
        <div className="Sortation_item_container">
          {initialList.map((initial) => (
            <div
              className={`Sortation_item ${selectedInitial === initial ? "active" : ""}`}
              key={initial}
              onClick={() => handleInitialClick(initial)}
            >
              {initial}
            </div>
          ))}
        </div>

        <div className="Result_item_container">
          {selectedInitial
            ? filterTheatersByInitial(selectedInitial).map((theater) => (
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/theater/${encodeURIComponent(theater.theaterName)}`}
                  key={theater.theaterId}
                >
                  <div className="Result_item">{theater.theaterName}</div>
                </Link>
              ))
            : theaterList.map((theater) => (
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/theater/${encodeURIComponent(theater.theaterName)}`}
                  key={theater.theaterId}
                >
                  <div className="Result_item">{theater.theaterName}</div>
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;

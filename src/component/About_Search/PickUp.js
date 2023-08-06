
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
        // 백엔드의 API 엔드포인트로 요청을 보내서 극장 정보를 가져옵니다.
        const response = await axios.get("/theater/list?page=0");
        const theaterData = response.data;
        setTheaterList(theaterData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromServer();
  }, []);

  const handleInitialClick = (initial) => {
    setSelectedInitial(initial);
  };

  const filteredTheaters = theaterList.filter((theater) =>
    selectedInitial ? theater.initial === selectedInitial : true
  );

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
          {filteredTheaters.map((theater) => (
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/theater/${encodeURIComponent(theater.name)}`} // 클릭 시 극장 정보 페이지로 이동
              key={theater.name}
            >
              <div className="Result_item">{theater.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;

/*
import React, { useState, useEffect } from "react";
import './PickUp.css';
import {Link} from "react-router-dom"

const SearchPage = () => {
  const [Theater, setTheater] = useState([]);
  const [selectedInitial, setSelectedInitial] = useState("");
  const initialList = ["A" ,"ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];

  useEffect(() => {
    // 서버에서 극장 정보를 가져와서 Theater 상태를 업데이트하는 함수 (예를 들면 API 호출 등)
    // 이 예시에서는 더미 데이터를 사용합니다.
    // fetchDataFromServer() 함수가 실제로는 서버에서 데이터를 가져오는 비동기 함수라고 가정합니다.
    const fetchDataFromServer = async () => {
      // 예시를 위해 더미 데이터를 사용합니다. 실제로는 서버에서 데이터를 가져와야 합니다.
      const dummyData = [
        { name: "강남 극장", initial: "ㄱ" },
        { name: "건대 극장", initial: "ㄱ" },
        { name: "노원 극장", initial: "ㄴ" },
        { name: "동대문 극장", initial: "ㄷ" },
        { name: "상암 극장", initial: "ㅅ" },
        { name: "로마 극장", initial: "ㄹ" },
        { name: "청 극장", initial: "청" },
        // ... 추가 극장 데이터 ...
      ];

      // 가져온 데이터를 Theater 상태로 업데이트합니다.
      setTheater(dummyData);
    };

    fetchDataFromServer();
  }, []);

  const handleInitialClick = (initial) => {
    setSelectedInitial(initial);
  };
  
  const filteredTheaters = Theater.filter((theater) => selectedInitial ? theater.initial === selectedInitial : true);

  return (
    <div>
      <div className="Sortation_container">
        <div className="Sortation_item_container">
          {initialList.map((initial) => (
            <div 
            className={`Sortation_item ${selectedInitial === initial ? 'active' : ''}`}
            key={initial} 
            onClick={() => handleInitialClick(initial)}>
              {initial}
            </div>
          ))}
        </div>
        
        <div className="Result_item_container">
          {filteredTheaters.map((theater) => (
                <Link
                style={{textDecoration:"none",color:"black"}}
                    to={'/theater/${theater.name}'} // 클릭 시 극장 정보 페이지로 이동
                    key={theater.name}>
                <div className="Result_item" key={theater.name}>{theater.name}</div>
                </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
*/
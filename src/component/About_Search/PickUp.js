import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PickUp.css";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const [displayedTheaters, setDisplayedTheaters] = useState([]);
  const [theaterList, setTheaterList] = useState([]);
  const [selectedInitial, setSelectedInitial] = useState("");
  const initialList = [ "ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];

  useEffect(() => {
    const fetchDataFromServer = async () => {
      try {
        const response = await axios.get("/theater/list");
        const theaterData = response.data;
        const sortedTheaterData = theaterData.sort((a, b) => a.theaterName.localeCompare(b.theaterName));
        setTheaterList(sortedTheaterData);
        setDisplayedTheaters(sortedTheaterData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromServer();
  }, []);

  const handleInitialClick = (initial) => {
    if (initial === selectedInitial) {
      setSelectedInitial(""); // 이미 선택된 자음 구분자를 다시 클릭한 경우, 모든 극장을 보여줍니다.
      setDisplayedTheaters(theaterList);
    } else {
      setSelectedInitial(initial); // 선택된 자음 구분자에 해당하는 극장들만 필터링해서 보여줍니다.
      const filteredTheaters = filterTheatersByInitial(initial);
      setDisplayedTheaters(filteredTheaters);
    }
  };

  // 자음 구분자별로 극장 이름을 필터링하는 함수
  const filterTheatersByInitial = (initial) => {
    return theaterList.filter((theater) => {
      const firstChar = theater.theaterName.trim().charAt(0);
      const consonant = getFirstConsonant(firstChar);
      return consonant === initial;
    });
  };

  const getFirstConsonant = (char) => {
    const consonants = ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
    const charCode = char.charCodeAt(0);
    if (charCode >= 44032 && charCode <= 55203) {
      // 한글 범위에 해당하는 글자일 때만 처리합니다.
      const index = Math.floor((charCode - 44032) / 588);
      return consonants[index];
    }
    return null; // 한글 자음이 아닌 경우 null을 반환합니다.
  };

  return (
    <div className="All_container">
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

import React, { useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import axios from "axios";

const ConcertHall_SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [theaterList, setTheaterList] = useState([]);
  const [filteredTheaterList, setFilteredTheaterList] = useState([]);
  
  useEffect(() => {
    const fetchDataFromServer = async () => {
      try {
        const response = await axios.get("/theater/list/seoul");
        const theaterData = response.data.content;
        setTheaterList(theaterData);
        console.log(theaterData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchDataFromServer();
  }, []);

  const handleInputChange = (event, newValue) => {
    setSearchValue(newValue);

    // 검색어에 따라 옵션 목록을 필터링
    const filteredTheaterList = theaterList.filter((theater) =>
      theater.theaterName.toLowerCase().includes(newValue.toLowerCase())
    );

    // 필터링된 목록을 설정
    setFilteredTheaterList(filteredTheaterList);
  };

  return (
    <div>
      <div>
        <Autocomplete
          options={filteredTheaterList.map((theater) => theater.theaterName)}
          placeholder="공연장 검색하기"
          onChange={(event, newValue) => handleInputChange(event, newValue)}
          value={searchValue}
          renderInput={(params) => (
            <TextField {...params} label="공연장 검색하기" />
          )}
        />
      </div>
    </div>
  );
};

export default ConcertHall_SearchBar;

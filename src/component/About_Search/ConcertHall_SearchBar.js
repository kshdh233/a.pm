// ConcertHall_SearchBar.js
import React, { useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";

const ConcertHall_SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [theaterList, setTheaterList] = useState([]);

  useEffect(() => {
    const fetchDataFromServer = async () => {
      try {
        const response = await axios.get("/theater/list/seoul");
        const theaterData = response.data;
        setTheaterList(theaterData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchDataFromServer();
  }, []);

  const handleInputChange = (event, newValue) => {
    setSearchValue(newValue);
  };

  return (
    <div>
      <div>
        <Autocomplete
          options={theaterList.map((theater) => theater.theaterName)}
          getOptionLabel={(option) => option}
          placeholder="공연장 검색하기"
          onChange={(event, newValue) => handleInputChange(event, newValue)}
          value={searchValue}
          renderInput={(params) => (
            <TextField {...params} label="공연장 검색하기" />
          )}
        />
      </div>
      <div>
        {searchValue && (
          <Link
            to={`/theater/${encodeURIComponent(
              theaterList.find((theater) => theater.theaterName === searchValue)
                ?.theaterId
            )}`}
          >
            이 극장에 대한 페이지로 이동
          </Link>
        )}
      </div>
    </div>
  );
};

export default ConcertHall_SearchBar;

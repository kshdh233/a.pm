import React, { useEffect, useState } from "react";
import { Search } from "@mui/icons-material"; // Google Material Icons의 돋보기 아이콘 임포트
import "../../styles/SearchBar.css";
import { Autocomplete, TextField } from "@mui/material";
import axios from "axios";



const ConcertHall_SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [theaterList, setTheaterList] = useState([]);

  useEffect(()=>{
    const fetchDataFromServer = async() =>{
      try{
        const response = await axios.get("/theater/list/seoul?page=1");
        const theaterData = response.data.content;
        setTheaterList(theaterData);
        console.log(theaterData);
      }catch(error){
        console.error("Error fetching data : ",error);
      }
    };

    fetchDataFromServer();
  })

  const handleInputChange = (event, newValue) => {
    setSearchValue(newValue);
    // value로 공연장 전체 데이터 filtering 해서 자동완성에 보여주기
  };

  return (
    <div>
      <div>
        <Autocomplete
          options={theaterList.map((theater)=>theater.theaterName)}
          placeholder="공연장 검색하기"
          onChange={(event, newValue) => handleInputChange(event,newValue)}
          value={searchValue}
          renderInput={(params) => (
            <TextField {...params} label="공연장 검색하기"/>
          )}
        />
      </div>
    </div>
  );
};

export default ConcertHall_SearchBar;

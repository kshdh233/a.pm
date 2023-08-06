import React, { useState } from "react";
import { Search } from "@mui/icons-material"; // Google Material Icons의 돋보기 아이콘 임포트
import "../../styles/SearchBar.css";
import { Autocomplete, TextField } from "@mui/material";

const arr = ['1', '2', '3', '4', '5'];

const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
    // value로 공연장 전체 데이터 filtering 해서 자동완성에 보여주기
  };

  return (
    <div>
      <div>
        <Autocomplete
          options={arr}
          placeholder="공연, 공연장 검색하기"
          onChange={(e, newValue) => setSearchValue(newValue)}
          value={searchValue}
          renderInput={(params) => (
            <TextField {...params} label="공연, 공연장 검색하기"/>
          )}
        />
      </div>
    </div>
  );
};

export default SearchBar;

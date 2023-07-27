import React, { useState } from "react";
import { Search } from "@mui/icons-material"; // Google Material Icons의 돋보기 아이콘 임포트
import "../styles/SearchBar.css";

const SearchBar = (props) => {
  const products = props.searchItems;
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleInputClear = () => {
    setSearchValue("");
  };

  const filteredProducts =
    products && products.filter((product) => product.includes(searchValue));

  const DisplayButton = searchValue.length >0; 
  return (
    <div className="searchBar">
      <div className="searchIconContainer">
        <Search className="searchIcon" />
      </div>
      <input
        className="textcss"
        type="text"
        value={searchValue}
        placeholder="공연, 공연장 검색하기"
        onChange={handleInputChange}
      />
      {DisplayButton && (
      <button className="clearButton" onClick={handleInputClear}>
        확인
      </button>)}
      <ul>
        {filteredProducts &&
          filteredProducts.map((product) => {
            return <li key={product}>{product}</li>;
          })}
      </ul>
    </div>
  );
};

export default SearchBar;

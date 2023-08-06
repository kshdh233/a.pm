import * as React from 'react';
import Header from '../../component/About_Logo/Header';
import SearchBar from "../../component/About_Search/SearchBar";
import Carousell from "../../component/Body/Carousel";

function Play_infor_home_page() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <Header />
      <SearchBar/>

      {/* Main Content */}
      <Carousell />

    </div>
  );
}

export default Play_infor_home_page;

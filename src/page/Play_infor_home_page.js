import * as React from 'react';
import Header from '../component/Header';
import SearchBar from "../component/SearchBar";
import Carousell from "../component/Carousel";
import { Link } from 'react-router-dom';

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

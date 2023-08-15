import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../component/About_Logo/Header';
import SearchBar from "../../component/About_Search/SearchBar";
import Carousell from "../../component/Body/Carousel";
import '../../styles/Schedule.css';

function Play_infor_home_page() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <Header />
      <SearchBar/>

      {/* Main Content */}
      <Carousell />

      <div className='box-areaa'>
        <Link to='/PmShowList_page'>공연 목록 {'>'}</Link>
      </div>
    </div>
  );
}

export default Play_infor_home_page;

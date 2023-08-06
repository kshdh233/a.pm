import * as React from 'react';
<<<<<<< HEAD:src/page/Play_infor_home_page.js
import Header from '../component/Header';
import SearchBar from "../component/About_Search/SearchBar";
import Carousell from "../component/Carousel";
import { Link } from 'react-router-dom';
=======
import Header from '../../component/Header/Header';
import SearchBar from "../../component/Body/SearchBar";
import Carousell from "../../component/Body/Carousel";
>>>>>>> 3ee112b12f75e072c93a248ebf0f628850b39a61:src/page/Performance/Play_infor_home_page.js

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

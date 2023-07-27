import * as React from 'react';
import Header from '../component/Header';
import FixedBottomNavigation from '../component/BottomNav';
import SearchBar from "../component/SearchBar";
import { Link } from 'react-router-dom';
import '../styles/Play_info_home_page.css'

function Play_infor_home_page() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <Header />
      <SearchBar/>

      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <div>인기 공연 TOP5</div>
        <Link to="/Play_information_page">
          <button className='Pop-Play'>베르베르</button>
        </Link>
        <Link to="/Play_information_page">
          <button className='Pop-Play'>베르베르</button>
        </Link>
        <Link to="/Play_information_page">
          <button className='Pop-Play'>베르베르</button>
        </Link>
        <Link to="/Play_information_page">
          <button className='Pop-Play'>베르베르</button>
        </Link>
        <Link to="/Play_information_page">
          <button className='Pop-Play'>베르베르</button>
        </Link>
      </div>

      {/* Footer */}
      <FixedBottomNavigation />
    </div>
  );
}

export default Play_infor_home_page;

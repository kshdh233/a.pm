import * as React from 'react';
import Header from '../../component/Header';
import Btn from "../../component/Body/Btn";
import '../../styles/Btn.css';

function Play_information_page() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <Header />
      
      <Btn />

      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <div>예고 영상</div> 
        <div>포스터</div>
        <div>공연 정보</div>
        <div>공연 기간</div>
      </div>

    </div>
  );
}

export default Play_information_page;

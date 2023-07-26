import React from 'react';
import FixedBottomNavigation from "../component/BottomNav";
import Header from "../component/Header";
import Calender from "../component/Calender";
import '../styles/Header.css';

function Schedule_page() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />

      {/* Center the Calendar component */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom : '300px'}}>
        <Calender />
      </div>

      <FixedBottomNavigation />
    </div>
  );
}

export default Schedule_page;

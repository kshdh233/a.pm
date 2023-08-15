import React from 'react';
import Header from "../component/About_Logo/Header";
import Calender from "../component/Body/Calender";
import '../styles/Header.css';

function Schedule_page() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />

      {/* Center the Calendar component */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom : '300px'}}>
        <Calender />
      </div>

    </div>
  );
}

export default Schedule_page;

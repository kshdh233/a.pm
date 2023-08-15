import * as React from 'react';
import Header from '../../../component/About_Logo/Header';
import Btn from "../../../component/About_Nav/Btn";
import '../../../styles/Btn.css';
import { useNavigate } from "react-router-dom";

function Play_information_page() {
  const navigate = useNavigate();

  const navigateToPlay = () => {
    navigate("/Extinction_Play_information_page");
  };
  const navigateToSchedule = () => {
    navigate("/Extinction_Actor_schedule_page");
  };
  const navigateToEvent = () => {
    navigate("/Extinction_Event_page");
  };
  const navigateToVenue = () => {
    navigate("/Extinction_Venue_information_page");
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <Header />
      
      <Btn
        navigateToPlay={navigateToPlay}
        navigateToSchedule={navigateToSchedule}
        navigateToEvent={navigateToEvent}
        navigateToVenue={navigateToVenue}
      />

      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <img src='https://ticketimage.interpark.com/Play/image/etc/23/23006725-17.jpg'
        style={{ width: '100%', height: 'auto'}} />
        </div>
    </div>
  );
}

export default Play_information_page;

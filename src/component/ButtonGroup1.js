import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import styles from "../styles/ButtonGroup1.module.css"; // Assuming you have a CSS module file
import { useNavigate } from 'react-router-dom';


function ButtonGroupComponent() {
  const navigate = useNavigate();
  
  const navigateToPlay = ()=> {
    navigate("/Play_information_page")
  }
  const navigateToSchedule = ()=> {
    navigate("/Actor_schedule_page")
  }
  const navigateToEvent = ()=> {
    navigate("/Event_page")
  }
  const navigateToVenue = ()=> {
    navigate("/Venue_information_page")
  }
  
  return (
    <ButtonGroup variant="outlined" aria-label="outlined button group">
      <Button onClick={navigateToPlay}>공연 정보</Button>
      <Button onClick={navigateToSchedule}>스케줄</Button>
      <Button onClick={navigateToEvent}>이벤트 및 재관람 혜택</Button>
      <Button onClick={navigateToVenue}>공연장 정보</Button>
    </ButtonGroup>
  );
}

export default ButtonGroupComponent;

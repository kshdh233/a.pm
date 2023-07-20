import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import "../styles/ButtonGroup1.css"

function ButtonGroupComponent() {
  return (
    <ButtonGroup variant="outlined" aria-label="outlined button group">
      <Button>공연 정보</Button>
      <Button>스케줄</Button>
      <Button>이벤트 및 재관람 혜택</Button>
      <Button>공연장 정보</Button>
    </ButtonGroup>
  );
}

export default ButtonGroupComponent;

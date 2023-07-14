import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import "../styles/ButtonGroup1.css"

function ButtonGroupComponent() {
  return (
    <ButtonGroup variant="outlined" aria-label="outlined button group">
      <Button>Performance information</Button>
      <Button>Schedule</Button>
      <Button>Event</Button>
      <Button>Avenue information</Button>
      <Button>Review benefit</Button>
    </ButtonGroup>
  );
}

export default ButtonGroupComponent;

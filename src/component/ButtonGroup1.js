import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import styles from "../styles/ButtonGroup1.module.css"; // Assuming you have a CSS module file

function ButtonGroupComponent() {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group" className={styles.buttonGroup}>
      <Button className={styles.button}>공연 정보</Button>
      <Button className={styles.button}>스케줄</Button>
      <Button className={styles.button}>이벤트, 재관람 혜택</Button>
      <Button className={styles.button}>공연장 정보</Button>
    </ButtonGroup>
  );
}

export default ButtonGroupComponent;

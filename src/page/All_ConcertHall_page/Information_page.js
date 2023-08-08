import "../../styles/Logo.css";
import "../../styles/Center.css";
import axios from 'axios';
import { useEffect } from "react";

function Information() {


  return (
    <>
      <h1 className="center">공연장 정보</h1>
      <div style={{ flex: 1 }}>
        <img src='https://ticketimage.interpark.com/Play/ITM/Data/Modify/2023/7/2023072814060304.jpg'
        style={{ width: '100%', height: 'auto'}} />
      </div>
    </>
  );
}

export default Information;

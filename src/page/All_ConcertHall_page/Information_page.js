import "../../styles/Logo.css";
import "../../styles/Center.css";
import axios from 'axios';
import { useEffect } from "react";

function Information() {

 const fetchData = fetch('/theater/list');
 console.log(fetchData);


  return (
    <>
      <h1 className="center">공연장 정보</h1>
    </>
  );
}

export default Information;

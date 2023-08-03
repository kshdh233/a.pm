import React, { useEffect, useState } from "react"
import axios from 'axios';

const App = () => {
  fetch('http://localhost:8081/')
  .then((response) => {
    if(response.ok) {
      return response.json();
    }  
    throw new Error('Network response was not ok.');
  }).then((data) => {
    console.log(JSON.stringify(data));
  }).catch((error) => {
    console.log(`error: ${error}`)
});
}

export default App;


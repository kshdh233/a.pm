import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import reportWebVitals from './reportWebVitals';


import { Route, Routes, BrowserRouter} from "react-router-dom";

// page 폴더
import Main_page from "./page/Main_page.js";

// component 폴더
import All_play from "./component/All_play.js";
import Nav from "./component/Nav.js";
import Popular_play from "./component/Popular_play.js";
import SearchBar from "./component/SearchBar.js";
import PaginationSize from './component/PaginationSize';
import Popular_playList from './component/Popular_play.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <BrowserRouter>
    <Routes>
      <Route path={process.env.PUBLIC_URL +"/"} element={<App />}/>
      <Route path={process.env.PUBLIC_URL +"/New"} element={<New />}/>
      <Route path={process.env.PUBLIC_URL +"/Main_page"} element={<Main_page />}/>
      <Route path={process.env.PUBLIC_URL +"/SearchBar"} element={<SearchBar />}/>
      <Route path={process.env.PUBLIC_URL +"/Pagination"} element={<PaginationSize/>}/>
      <Route path={process.env.PUBLIC_URL +"/Popular_play"} element={<Popular_playList/>}/>
      
    </Routes>
  </BrowserRouter>
  
);




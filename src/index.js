import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import reportWebVitals from './reportWebVitals';


import { Route, Routes, BrowserRouter} from "react-router-dom";

// page 폴더
import Main_page from "./page/Main_page.js";
import My_page from "./page/My_page.js";
import Schedule_page from "./page/Schedule_page.js";
import ConcertHall_page from './page/ConcertHall_page';

// component 폴더
import All_play from "./component/All_play.js";
import FixedBottomNavigation from "./component/BottomNav";
import PerformanceList from "./component/Popular_play.js";
import SearchBar from "./component/SearchBar.js";
import PaginationSize from './component/PaginationSize';
import Popular_playList from './component/Popular_play.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <BrowserRouter>
    <Routes>
      <Route path={process.env.PUBLIC_URL +"/"} element={<App />}/>
      
      <Route path={process.env.PUBLIC_URL +"/SearchBar"} element={<SearchBar />}/>
      <Route path={process.env.PUBLIC_URL +"/Pagination"} element={<PaginationSize/>}/>
      <Route path={process.env.PUBLIC_URL +"/Popular_play"} element={<PerformanceList/>}/>
      <Route path={process.env.PUBLIC_URL +"/BottomNav"} element={<FixedBottomNavigation/>}/>

      {/* 페이지 경로 */}
      <Route path={process.env.PUBLIC_URL +"/Main_page"} element={<Main_page />}/>
      <Route path={process.env.PUBLIC_URL +"/ConcertHall_page"} element={<ConcertHall_page/>}/>
      <Route path={process.env.PUBLIC_URL +"/My_page"} element={<My_page/>}/>
      <Route path={process.env.PUBLIC_URL +"/Schedule_page"} element={<Schedule_page/>}/>
      
    </Routes>
  </BrowserRouter>
  
);




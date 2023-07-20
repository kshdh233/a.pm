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
import SignIn_page from "./page/SignIn_page.js";
import SignUp_page from "./page/SignUp_page.js";
import Semi_login_page from "./page/Semi_login_page.js";
import Play_information_page from "./page/Play_information_page.js";
import Actor_schedule_page from "./page/Actor_schedule_page.js";
import Event_page from "./page/Event_page.js";
import Venue_information_page from "./page/Venue_information_page.js";

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
      <Route path={process.env.PUBLIC_URL +"/Main_page"} element={<Main_page />}/>
      <Route path={process.env.PUBLIC_URL +"/SearchBar"} element={<SearchBar />}/>
      <Route path={process.env.PUBLIC_URL +"/Pagination"} element={<PaginationSize/>}/>
      <Route path={process.env.PUBLIC_URL +"/Popular_play"} element={<Popular_playList/>}/>
      <Route path={process.env.PUBLIC_URL +"/My_page"} element={<My_page/>}/>
      <Route path={process.env.PUBLIC_URL +"/Schedule_page"} element={<Schedule_page/>}/>
      <Route path={process.env.PUBLIC_URL +"/SignIn_page"} element={<SignIn_page/>}/>
      <Route path={process.env.PUBLIC_URL +"/SignUp_page"} element={<SignUp_page/>}/>
      <Route path={process.env.PUBLIC_URL +"/Semi_login_page"} element={<Semi_login_page/>}/>
      <Route path={process.env.PUBLIC_URL +"/Play_information_page"} element={<Play_information_page/>}/>
      <Route path={process.env.PUBLIC_URL +"/Actor_schedule_page"} element={<Actor_schedule_page/>}/>
      <Route path={process.env.PUBLIC_URL +"/Event_page"} element={<Event_page/>}/>
      <Route path={process.env.PUBLIC_URL +"/Venue_information_page"} element={<Venue_information_page/>}/>
    </Routes>
  </BrowserRouter>
  
);




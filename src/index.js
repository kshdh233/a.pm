import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import reportWebVitals from './reportWebVitals';


import { Route, Routes, BrowserRouter } from "react-router-dom";

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
import ConcertHall_page from './page/ConcertHall_page';
import Seeya from './page/Seeya_page';
import NowPerformance from './page/NowPerformance_page';
import Location from './page/Location_page';
import Play_infor_home_page from './page/Play_infor_home_page';
import WishList_page from './page/WishList_page';

// component 폴더
import All_play from "./component/All_play.js";
import Popular_play from "./component/Popular_play.js";
import SearchBar from "./component/SearchBar.js";
import PaginationSize from './component/PaginationSize';
import Popular_playList from './component/Popular_play.js';
import FixedBottomNavigation from './component/BottomNav.js';
import Cjazit from './seeya/Cjazit';
import JTN_1 from './seeya/JTN_1';
import Ktg from './seeya/Ktg';
import LGArt from './seeya/LGArt';
import LG_sig from './seeya/LG_signature_hall';
import Tom_1 from './seeya/Tom_1';
import Tom_2 from './seeya/Tom_2';
import KyemyungArt from './seeya/KyemyungArt';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Routes>
      <Route element={<FixedBottomNavigation />}>
        <Route path={"/"} element={<Main_page />} />
        <Route path={"/Main_page"} element={<Main_page />} />
        {/* <Route path={"/SearchBar"} element={<SearchBar />} /> */}
        {/* <Route path={"/Pagination"} element={<PaginationSize />} /> */}
        <Route path={"/Popular_play"} element={<Popular_playList />} />
        <Route path={"/My_page"} element={<My_page />} />
        <Route path={"/ConcertHall_page"} element={<ConcertHall_page />} />
        <Route path={"/Play_infor_home_page"} element={<Play_infor_home_page />} />
        <Route path={"/WishList_page"} element={<WishList_page />} />

        <Route path={"/Schedule_page"} element={<Schedule_page />} />
        <Route path={"/Play_information_page"} element={<Play_information_page />} />
        <Route path={"/Actor_schedule_page"} element={<Actor_schedule_page />} />
        <Route path={"/Event_page"} element={<Event_page />} />
        <Route path={"/Venue_information_page"} element={<Venue_information_page />} />
      </Route>
        <Route path={"/SignIn_page"} element={<SignIn_page />} />
        <Route path={"/SignUp_page"} element={<SignUp_page />} />
        <Route path={"/Semi_login_page"} element={<Semi_login_page />} />
        <Route path={"/ConcertHall_page"} element={<ConcertHall_page />} />
        
        <Route path={"/Location_page"} element={<Location/>}/>
        <Route path={"/Seeya_page"} element={<Seeya/>}/>
        <Route path={"/NowPerformance_page"} element={<NowPerformance/>}/>
        
        <Route path={"/Cjazit"} element={<Cjazit/>}/>
        <Route path={"/JTN_1"} element={<JTN_1/>}/>
        <Route path={"/Ktg"} element={<Ktg/>}/>
        <Route path={"/LGArt"} element={<LGArt/>}/>
        <Route path={"/LG_sig"} element={<LG_sig/>}/>
        <Route path={"/Tom_1"} element={<Tom_1/>}/>
        <Route path={"/Tom_2"} element={<Tom_2/>}/>
        <Route path={"/KyemyungArt"} element={<KyemyungArt/>}/>
        <Route path={"/App"} element={<App/>}/>


    </Routes>
  </BrowserRouter>

);
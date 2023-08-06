<<<<<<< HEAD:src/page/All_Main_page/Main_page.js
import SearchBar from "../../component/About_Search/SearchBar";
import { Search } from "@mui/icons-material";
import TopNav from "../../component/About_Nav/TopNav";
import PerformanceList from "../../component/About_Performance/Popular_play";
import Header from "../../component/Header";

import './Main_page.css';
import '../../styles/Logo.css';

=======
import './Main_page.css';
import '../styles/Logo.css';
import SearchBar from "../component/Body/SearchBar";
import PerformanceList from "../component/Body/Popular_play";
import '../page_style/main_page.css';
import Header from "../component/Header/Header";
>>>>>>> 3ee112b12f75e072c93a248ebf0f628850b39a61:src/page/Main_page.js
function Main_page() {
  return (
    <>
    <Header></Header>
    
    <div className="main_container">

      <SearchBar/>

      <br/>
      <div className="Performance_container">
        <div className="Popular-Performance-title">
          인기 공연</div>
        <br/>
        <PerformanceList/>


        <div className="Total-performance-title">
          전체 공연</div>
        <br/>
          <PerformanceList/>
        </div>
      </div>
    </>

  );
}

export default Main_page;

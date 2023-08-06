import SearchBar from "../../component/About_Search/SearchBar";
import { Search } from "@mui/icons-material";
import TopNav from "../../component/About_Nav/TopNav";
import PerformanceList from "../../component/About_Performance/Popular_play";
import Header from "../../component/Header";

import './Main_page.css';
import '../../styles/Logo.css';

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

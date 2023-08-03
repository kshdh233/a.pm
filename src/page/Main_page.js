import FixedBottomNavigation from "../component/BottomNav";
import './Main_page.css';
import '../styles/Logo.css';
import SearchBar from "../component/SearchBar";
import { Search } from "@mui/icons-material";
import TopNav from "../component/TopNav";
import PerformanceList from "../component/Popular_play";
import '../page_style/main_page.css';
function Main_page() {
  return (
    <>
    <h1 className="Logo">LOGO</h1>
    
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
    <FixedBottomNavigation/>
    </>

  );
}

export default Main_page;

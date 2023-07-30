import FixedBottomNavigation from "../component/BottomNav";
import './Main_page.css';
import '../styles/Logo.css';
import SearchBar from "../component/SearchBar";
import { Search } from "@mui/icons-material";
import TopNav from "../component/TopNav";
import PerformanceList from "../component/Popular_play";

function Main_page() {
  return (
    <>
    <h1 className="Logo">LOGO</h1>
    <SearchBar/>

    <br/>

    <div className="Popular-Performance-title">
      인기 공연</div>
    <br/>
     <PerformanceList/>


    <div className="Total-performance-title">
      전체 공연</div>
    <br/>
      <PerformanceList/>


    <FixedBottomNavigation/>
    </>

  );
}

export default Main_page;

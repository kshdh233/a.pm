
import '../../styles/Logo.css';
import SearchBar from "../../component/About_Search/SearchBar";
import PerformanceList from "../../component/About_Performance/Popular_play";
import './Main_page.css';
import Header from "../../component/About_Logo/Header";
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

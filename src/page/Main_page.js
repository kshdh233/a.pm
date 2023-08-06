import './Main_page.css';
import '../styles/Logo.css';
import SearchBar from "../component/SearchBar";
import PerformanceList from "../component/Popular_play";
import '../page_style/main_page.css';
import Header from "../component/Header";
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

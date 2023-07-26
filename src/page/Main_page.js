import FixedBottomNavigation from "../component/BottomNav";
import './Main_page.css';
import SearchBar from "../component/SearchBar";
import { Search } from "@mui/icons-material";

function Main_page() {
  return (
    <>
    <h1>메인 페이지</h1>
    <SearchBar/>
    <div>인기 공연</div> 
    <div>전체 공연</div>
    
    </>
  );
}

export default Main_page;

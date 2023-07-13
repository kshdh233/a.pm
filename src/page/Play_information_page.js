import SearchBar from "../component/SearchBar";
import { Search } from "@mui/icons-material";
import ButtonGroupComponent from "../component/ButtonGroup1";
import FixedBottomNavigation from "../component/Nav";


function Play_information_page() {
  return (
    <div>
    <SearchBar/>
    <ButtonGroupComponent />
    <div>예고 영상</div> 
    <div>포스터</div>
    <div>공연 정보</div>
    <div>공연 기간</div>
    <FixedBottomNavigation/>
    </div>
  );
}

export default Play_information_page;

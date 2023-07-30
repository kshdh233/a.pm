import FixedBottomNavigation from "../component/BottomNav";
import SearchBar from "../component/SearchBar";
import TopNav from "../component/TopNav";
import { Search } from "@mui/icons-material";
import '../styles/Logo.css'

function Location(){
    return<>
    <h1 className="Logo">Logo</h1>
    <SearchBar/>
    <TopNav/>
    <h1>주소, 화장실 정보</h1>

    <FixedBottomNavigation/>
    </>
    
}

export default Location;






import FixedBottomNavigation from "../component/BottomNav";
import SearchBar from "../component/SearchBar";
import TopNav from "../component/TopNav";
import { Search } from "@mui/icons-material";
import '../styles/Logo.css'
import '../styles/Center.css';


function Information(){
    return<>
    <h1 className="Logo">Logo</h1>
    <SearchBar/>
    <TopNav/>
    <h1 className="center">공연장 정보</h1>

    
    <FixedBottomNavigation/>
    </>
    
}

export default Information;






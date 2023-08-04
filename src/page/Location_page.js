import SearchBar from "../component/SearchBar";
import TopNav from "../component/TopNav";
import { Search } from "@mui/icons-material";
import '../styles/Logo.css'
import Map from "../component/Map";
import '../styles/Center.css';
function Location(){
    return<>
    <h1 className="center">주소, 화장실 정보</h1>
    <Map/>
    
    </>
    
}

export default Location;






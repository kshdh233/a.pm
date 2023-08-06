import SearchBar from "../../component/About_Search/SearchBar";
import TopNav from "../../component/About_Nav/TopNav";
import { Search } from "@mui/icons-material";
import '../../styles/Logo.css'
import Map from "../../component/Body/Map";
import '../../styles/Center.css';
function Location(){
    return<>
    <h1 className="center">주소, 화장실 정보</h1>
    <Map/>
    
    </>
    
}

export default Location;






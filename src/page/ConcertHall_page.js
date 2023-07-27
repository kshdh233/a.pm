import SearchBar from "../component/SearchBar";
import FixedBottomNavigation from "../component/BottomNav";
import TopNav from "../component/TopNav";
import { Search } from "@mui/icons-material";

function ConcertHall_page(){
    return (
        <>
        <h1 className="Logo">Logo</h1>
        <SearchBar/>
        <TopNav/>


        <FixedBottomNavigation/>
        </>

    )
}
export default ConcertHall_page;



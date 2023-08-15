import ConcertHall_SearchBar from "../../component/About_Search/ConcertHall_SearchBar";
import TopNav from "../../component/About_Nav/TopNav";
import { Search } from "@mui/icons-material";
import PerformanceList from "../../component/About_Performance/Popular_play";
import Header from "../../component/About_Logo/Header";

import SearchPage from "../../component/About_Search/PickUp";

function ConcertHall_page() {
  return (
    <>
      <Header />
      <ConcertHall_SearchBar/>

      <SearchPage/>

 
    </>
  );
}
export default ConcertHall_page;

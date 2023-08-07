import SearchBar from "../../component/About_Search/SearchBar";
import TopNav from "../../component/About_Nav/TopNav";
import { Search } from "@mui/icons-material";
import PerformanceList from "../../component/About_Performance/Popular_play";
import Header from "../../component/About_Logo/Header";
import { Outlet } from "react-router-dom";
import SearchPage from "../../component/About_Search/PickUp";

function ConcertHall_page() {
  return (
    <>
      <Header />
      <SearchBar />
      <TopNav/>
      <SearchPage/>

      <Outlet />
    </>
  );
}
export default ConcertHall_page;

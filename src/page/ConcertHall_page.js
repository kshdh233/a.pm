import SearchBar from "../component/SearchBar";
import TopNav from "../component/TopNav";
import { Search } from "@mui/icons-material";
import PerformanceList from "../component/Popular_play";
import Header from "../component/Header";
import { Outlet } from "react-router-dom";

function ConcertHall_page() {
  return (
    <>
      <Header />
      <SearchBar />
      <TopNav />
      <Outlet />
    </>
  );
}
export default ConcertHall_page;

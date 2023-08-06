import SearchBar from "../component/SearchBar";
import TopNav from "../component/SearchBar";
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

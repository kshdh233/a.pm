import SearchBar from "../../component/Body/SearchBar";
import TopNav from "../../component/Body/SearchBar";
import Header from "../../component/Header/Header";
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

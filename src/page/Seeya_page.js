import "../styles/Logo.css";
import SearchBar from "../component/SearchBar";
import TopNav from "../component/TopNav";
import Cjazit from "../seeya/Cjazit";
import "../styles/Center.css";

function Seeya() {
  return (
    <>
      <h1 className="center">시야 정보 좌석</h1>
      <Cjazit />
    </>
  );
}

export default Seeya;

import SearchBar from "../component/SearchBar";
import ButtonGroupComponent from "../component/ButtonGroup1";
import FixedBottomNavigation from "../component/Nav";
import styles from "../styles/PlayInformationPage.module.css";

function Play_information_page() {
  return (
    <div>
    <SearchBar/>
    <hr className={styles.separator} />
    <ButtonGroupComponent />
    <div>예고 영상</div> 
    <div>포스터</div>
    <div>공연 정보</div>
    <div>공연 기간</div>
    <FixedBottomNavigation/>
    </div>
  );
}

export default Play_information_page;

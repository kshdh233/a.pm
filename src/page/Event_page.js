import SearchBar from "../component/SearchBar";
import ButtonGroupComponent from "../component/ButtonGroup1";
import FixedBottomNavigation from "../component/Nav";
import styles from "../styles/PlayInformationPage.module.css";

function Event_page() {
  return (
    <div>
    <SearchBar/>
    <hr className={styles.separator} />
    <ButtonGroupComponent />
    <div>공연 관련 이벤트</div>
    <div>재관람 혜택</div>
    <FixedBottomNavigation/>
    </div>
  );
}

export default Event_page;

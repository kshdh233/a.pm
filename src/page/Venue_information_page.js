import SearchBar from "../component/SearchBar";
import ButtonGroupComponent from "../component/ButtonGroup1";
import FixedBottomNavigation from "../component/Nav";
import styles from "../styles/PlayInformationPage.module.css";

function Venue_information_page() {
  return (
    <div>
    <SearchBar/>
    <hr className={styles.separator} />
    <ButtonGroupComponent />
    <div>주요 공연장</div>
    
    </div>
  );
}

export default Venue_information_page;

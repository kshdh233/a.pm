import SearchBar from "../component/SearchBar";
import ButtonGroupComponent from "../component/ButtonGroup1";
import FixedBottomNavigation from "../component/Nav";
import styles from "../styles/PlayInformationPage.module.css";

function Actor_schedule_page() {
  return (
    <div>
    <SearchBar/>
    <hr className={styles.separator} />
    <ButtonGroupComponent />
    <FixedBottomNavigation/>
    </div>
  );
}

export default Actor_schedule_page;

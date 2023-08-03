import '../styles/Logo.css';
import FixedBottomNavigation from '../component/BottomNav';
import SearchBar from '../component/SearchBar';
import TopNav from '../component/TopNav';
import Cjazit from '../seeya/Cjazit';
import '../styles/Center.css';

function Seeya(){
    return<>
    <h1 className='Logo'>Logo</h1>
    <SearchBar/>
    <TopNav/>
    <h1 className='center'>시야 정보 좌석</h1>
    <Cjazit/>
    <FixedBottomNavigation/>

    
    </>
}

export default Seeya;
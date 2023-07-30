import '../styles/Logo.css';
import FixedBottomNavigation from '../component/BottomNav';
import SearchBar from '../component/SearchBar';
import TopNav from '../component/TopNav';

function Seeya(){
    return<>
    <h1 className='Logo'>Logo</h1>
    <SearchBar/>
    <TopNav/>
    <h1>시야 정보 좌석</h1>

    <FixedBottomNavigation/>

    
    </>
}

export default Seeya;
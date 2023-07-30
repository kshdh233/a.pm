import '../styles/Logo.css';
import FixedBottomNavigation from '../component/BottomNav';
import SearchBar from '../component/SearchBar';
import TopNav from '../component/TopNav';

 function NowPerformance(){
    return<>
    <h1 className='Logo'>Logo</h1>
    <SearchBar/>
    <TopNav/>

    <h1>현재 진행중인 공연</h1>
    <FixedBottomNavigation/>
    
    </>
}

export default NowPerformance;




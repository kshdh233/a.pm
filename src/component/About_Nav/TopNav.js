import '../../styles/TopNav.css'
import React from 'react' ;
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function TopNav(){
  const navigate = useNavigate();

 
  const navigateToNP = ()=>{
    navigate("/ConcertHall_page/NowPerformance_page");
  }
  const navigateToInfo = ()=>{
    navigate("/ConcertHall_page/Infomation_page");
  }
  const navigateToLoca = ()=>{
    navigate("/ConcertHall_page/Location_page");
  }
  const navigateToSeeya = ()=>{
    navigate("/ConcertHall_page/Seeya_page");
  }
  
    return(
     
        <div className="Top-menu-container">

          <button onClick={navigateToNP}className="Top-menu-item">진행중인 공연</button>
          <button onClick={navigateToInfo}
          className='Top-menu-item'>공연장 정보</button>
          <button onClick={navigateToLoca}className="Top-menu-item" >주소,화장실</button>
           
          <button onClick={navigateToSeeya}className="Top-menu-item">시야</button>

            
        </div>

     
    )
}
export default TopNav;






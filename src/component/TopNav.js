import '../styles/TopNav.css'


function TopNav(){
    return(
        
        <div className="Top-menu-container">
            <button className="Top-menu-item" href="Address_page">주소</button>
            <div className="Top-menu-item">화장실</div>
            <div className="Top-menu-item">시야</div>
            <div className="Top-menu-item">진행중인 공연</div>
        </div>
    )
}
export default TopNav;


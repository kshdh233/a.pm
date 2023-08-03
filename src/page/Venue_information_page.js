import Header from "../component/Header";
import FixedBottomNavigation from "../component/BottomNav";
import Btn from "../component/Btn";
import '../styles/Btn.css';

function Venue_information_page() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    {/* Header */}
    <Header />
  
    <Btn />

    {/* Main Content */}
    <div style={{ flex: 1 }}>
      <div>공연장 정보</div> 
    </div>

    {/* Footer */}
    <FixedBottomNavigation />
  </div>
  );
}

export default Venue_information_page;

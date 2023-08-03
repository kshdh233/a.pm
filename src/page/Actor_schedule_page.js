import Header from "../component/Header";
import FixedBottomNavigation from "../component/BottomNav";
import Btn from "../component/Btn";
import '../styles/Btn.css';

function Actor_schedule_page() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <Header />
      
      <Btn />

      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <div>배우 스케줄</div> 
      </div>

      {/* Footer */}
      <FixedBottomNavigation />
    </div>
  );
}

export default Actor_schedule_page;

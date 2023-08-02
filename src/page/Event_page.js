import Header from "../component/Header";
import ButtonGroupComponent from "../component/ButtonGroup1";
import FixedBottomNavigation from "../component/BottomNav";
import Api from "../component/Api";


function Event_page() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <Header />
      <div style={{ padding: '8px', background: '#ffffff' }}>
        {/* Reduced size of the ButtonGroupComponent and added spacing between buttons */}
        <ButtonGroupComponent fontSize="12px"></ButtonGroupComponent>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <div>공연 관련 이벤트</div> 
        <div>재관람 혜택</div>
      </div>

      <Api />

      {/* Footer */}
      <FixedBottomNavigation />
    </div>
  );
}

export default Event_page;

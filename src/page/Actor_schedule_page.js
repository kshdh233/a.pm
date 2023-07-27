import Header from "../component/Header";
import ButtonGroupComponent from "../component/ButtonGroup1";
import FixedBottomNavigation from "../component/BottomNav";

function Actor_schedule_page() {
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
        <div>배우 스케줄</div> 
      </div>

      {/* Footer */}
      <FixedBottomNavigation />
    </div>
  );
}

export default Actor_schedule_page;

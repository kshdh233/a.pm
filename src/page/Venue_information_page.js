import SearchBar from "../component/SearchBar";
import ButtonGroupComponent from "../component/ButtonGroup1";
import FixedBottomNavigation from "../component/Nav";

function Venue_information_page() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    {/* Header */}
    <SearchBar />
    <div style={{ padding: '8px', background: '#ffffff' }}>
      {/* Reduced size of the ButtonGroupComponent and added spacing between buttons */}
      <ButtonGroupComponent fontSize="12px"></ButtonGroupComponent>
    </div>

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

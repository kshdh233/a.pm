import Header from "../component/Header";
import Btn from "../component/Btn";
import '../styles/Btn.css';

function Event_page() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <Header />
      
      <Btn />

      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <div>공연 관련 이벤트</div> 
        <div>재관람 혜택</div>
      </div>

      {/* Footer */}
    </div>
  );
}

export default Event_page;

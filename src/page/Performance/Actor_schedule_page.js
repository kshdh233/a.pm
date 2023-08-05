import Header from "../../component/Header/Header";
import Btn from "../../component/Body/Btn";
import '../../styles/Btn.css';

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
    </div>
  );
}

export default Actor_schedule_page;

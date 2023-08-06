<<<<<<< HEAD:src/page/Actor_schedule_page.js
import Header from "../component/Header";
import Btn from "../component/About_Nav/Btn";
import '../styles/Btn.css';
=======
import Header from "../../component/Header/Header";
import Btn from "../../component/Body/Btn";
import '../../styles/Btn.css';
>>>>>>> 3ee112b12f75e072c93a248ebf0f628850b39a61:src/page/Performance/Actor_schedule_page.js

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

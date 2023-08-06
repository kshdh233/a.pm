<<<<<<< HEAD:src/page/Venue_information_page.js
import Header from "../component/Header";
import Btn from "../component/About_Nav/Btn";
import '../styles/Btn.css';
=======
import Header from "../../component/Header/Header";
import Btn from "../../component/Body/Btn";
import '../../styles/Btn.css';
>>>>>>> 3ee112b12f75e072c93a248ebf0f628850b39a61:src/page/Performance/Venue_information_page.js

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

  </div>
  );
}

export default Venue_information_page;

import Header from "../../component/About_Logo/Header";
import Btn from "../../component/About_Nav/Btn";
import '../../styles/Btn.css';

function Actor_schedule_page() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <Header />
      
      <Btn />

      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <img src='https://ticketimage.interpark.com/Play/image/etc/23/22007582-26.jpg'
        style={{ width: '100%', height: 'auto'}} />
        <br />
        <img src='https://ticketimage.interpark.com/Play/image/etc/23/22007582-28.jpg'
        style={{ width: '100%', height: 'auto'}} />
      </div>

      {/* Footer */}
    </div>
  );
}

export default Actor_schedule_page;

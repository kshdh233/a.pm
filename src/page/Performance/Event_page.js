import Header from "../../component/About_Logo/Header";
import Btn from "../../component/About_Nav/Btn";
import '../../styles/Btn.css';

function Event_page() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <Header />
      
      <Btn />

      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <img src='https://ticketimage.interpark.com/220075822022/07/11/b130a7e1.jpg'
        style={{ width: '100%', height: 'auto'}} />
      </div>

      {/* Footer */}
    </div>
  );
}

export default Event_page;

import Header from "../../../component/About_Logo/Header";
import Btn from "../../../component/About_Nav/Btn";
import '../../../styles/Btn.css';
import { useNavigate } from "react-router-dom";

function Event_page() {
  const navigate = useNavigate();

  const navigateToPlay = () => {
    navigate("/The_tale_Play_information_page");
  };
  const navigateToSchedule = () => {
    navigate("/The_tale_Actor_schedule_page");
  };
  const navigateToEvent = () => {
    navigate("/The_tale_Event_page");
  };
  const navigateToVenue = () => {
    navigate("/The_tale_Venue_information_page");
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <Header />
      
      <Btn
        navigateToPlay={navigateToPlay}
        navigateToSchedule={navigateToSchedule}
        navigateToEvent={navigateToEvent}
        navigateToVenue={navigateToVenue}
      />

      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <img src='https://ticketimage.interpark.com/230053562023/07/11/a9795563.jpg'
        style={{ width: '100%', height: 'auto'}} />
        <br />
        <img src='https://ticketimage.interpark.com/Play/ITM/Data/Modify/2023/7/2023072610514350.jpg'
        style={{ width: '100%', height: 'auto'}} />
        <br />
        <img src='https://ticketimage.interpark.com/Play/ITM/Data/Modify/2023/7/2023072716002256.jpg'
        style={{ width: '100%', height: 'auto'}} />
      </div>

      {/* Footer */}
    </div>
  );
}

export default Event_page;

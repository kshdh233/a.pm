import Header from "../../../component/About_Logo/Header";
import Btn from "../../../component/About_Nav/Btn";
import '../../../styles/Btn.css';
import { useNavigate } from "react-router-dom";

function Event_page() {
  const navigate = useNavigate();

  const navigateToPlay = () => {
    navigate("/Extinction_Play_information_page");
  };
  const navigateToSchedule = () => {
    navigate("/Extinction_Actor_schedule_page");
  };
  const navigateToEvent = () => {
    navigate("/Extinction_Event_page");
  };
  const navigateToVenue = () => {
    navigate("/Extinction_Venue_information_page");
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
        <img src='https://ticketimage.interpark.com/230067252023/05/30/8b13fb79.jpg'
        style={{ width: '100%', height: 'auto'}} />
        <br />
        <img src='https://ticketimage.interpark.com/230067252023/08/01/34e28187.jpg'
        style={{ width: '100%', height: 'auto'}} />
        <br />
        <img src='https://ticketimage.interpark.com/230067252023/07/25/bad62e55.jpg'
        style={{ width: '100%', height: 'auto'}} />
        <br />
        <img src='https://ticketimage.interpark.com/Play/ITM/Data/Modify/2023/7/2023072517202907.jpg'
        style={{ width: '100%', height: 'auto'}} />
      </div>

      {/* Footer */}
    </div>
  );
}

export default Event_page;

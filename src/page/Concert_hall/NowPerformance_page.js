import "../../styles/Logo.css";
import PerformanceList from "../../component/Body/Popular_play";
import "../../styles/Center.css";

function NowPerformance() {
  return (
    <>
      <h1 className="center">현재 진행중인 공연</h1>

      <h2 className="center">진행중인 공연</h2>
      <PerformanceList />
      <br />
      <h2 className="center">공연 이력</h2>
      <PerformanceList />

    </>
  );
}

export default NowPerformance;

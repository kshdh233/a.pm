import "../../styles/Logo.css";
import SearchBar from "../../component/About_Search/SearchBar";
import TopNav from "../../component/About_Nav/TopNav";
import PerformanceList from "../../component/About_Performance/Popular_play";

import "../../styles/Center.css";

function NowPerformance({theaterId,performances}) {
  return (
    <>
      <h1 className="center">현재 진행중인 공연</h1>
      <h2 className="center">진행중인 공연</h2>
      {/* performances 배열을 PerformanceList 컴포넌트로 전달 */}
      <PerformanceList performances={performances} />
  
    </>
  );
}

export default NowPerformance;

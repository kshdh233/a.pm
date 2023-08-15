import "../seeya_css/Cjazit.css";
import "../seeya_css/Common.css";
import "../seeya_css/Center.css";
import Like from "../img/LikeLevel.png"; 
import { Container } from "@mui/system";
import React, {useState,Component} from 'react';
import {Link} from 'react-router-dom';
 function Cjazit() {

  
   // 팝업 관리를 위한 상태
   const [showPopup, setShowPopup] = useState(false);
   const [likeCount, setLikeCount] = useState(0);
   
 
   // 좋아요 클릭 시 처리하는 함수
   const handleLikeClick = () => {
     // 좋아요 카운트 증가
     setLikeCount(likeCount + 1);
     // 여기에 서버로 좋아요 정보 전송하는 로직 추가
   };
 
   // 팝업 열기/닫기 처리하는 함수
   const togglePopup = () => {
     setShowPopup(!showPopup);
   };
 
   const handelReviewLinkClick = (seatPk) =>{
    //리뷰 작성 페이지 url을 동적으로 생성
    const reviewPageUrl = '/seat-review/${seatPk}';
    //해당 url로 페이지 이동
    window.location.href = reviewPageUrl;
   };
  return (
    <>
      {/* df */}
      <h1 class="center">Cj아지트</h1>
      <div class="rating-info">
        <img src={Like} alt="nope"/>
        </div>
      <Container>
        <div style={{ overflow: "scroll" }}>
          <div id="1층">
            <div class="floor">
              {/* 좌석표에 층을 표시   */}
               <div class="seating_table_container">
                <div class="seattable_floor">1층</div>
              </div>
               {/* 각 층의 좌석 표시  */}
              <div class="floor_container">
                {/* 구역  */}
                 <div id="cjazit" class="A11">
                  {/* 진짜 좌석표에 표시되는 구역 이름  */}
                  {/* 열  */}
                  <div class="row">
                    {/* 좌석  */}
                    {/*seeyatheater */}
                     <div id="row_zone">
                      <p class="seat_num">A</p>
                    </div>
                   </div>
                   <div class="row">
                    {/* 좌석  */}
                     {/*seeyatheater */}
                       <div id="row_zone">
                      <p class="seat_num">B</p>
                    </div>
                   </div>
                   <div class="row">
                    {/* 좌석  */}
                     {/*seeyatheater */}
                       <div id="row_zone">
                      <p class="seat_num">C</p>
                    </div>
                   </div>
                   <div class="row">
                    {/* 좌석  */}
                     {/*seeyatheater */}
                       <div id="row_zone">
                      <p class="seat_num">D</p>
                    </div>
                    {/* 열 표시 끝  */}
                   </div>
                   <div class="row">
                    {/* 좌석  */}
                     {/*seeyatheater */}
                       <div id="row_zone">
                      <p class="seat_num">E</p>
                    </div>
                   </div>
                   <div class="row">
                    {/* 좌석  */}
                     {/*seeyatheater */}
                       <div id="row_zone">
                      <p class="seat_num">F</p>
                    </div>
                   </div>
                   <div class="row">
                    {/* 좌석  */}
                     {/*seeyatheater */}
                       <div id="row_zone">
                      <p class="seat_num">G</p>
                    </div>
                   </div>
                   {/* 열 끝  */}
                </div>
                 <div id="cjazit" class="AA1">
                  {/* 진짜 좌석표에 표시되는 구역 이름  */}
                   {/* 열  */}
                   <div class="row">
                    {/* 좌석  */}
                     {/*seeyatheater */}
                       <div class="seats">
                      {/* 일반 좌석  */}
                      <div 
                      id="seat" 
                      class={`real ${showPopup ? 'selected' : 'no_review'}`} 
                      pk="33013"
                      onClick={togglePopup}>
                        <p>1</p>
                      </div>
                   {/* 팝업 (모달) */}
            {showPopup && (
              <div id="popup" className="modal">
                <div className="modal-content">
                  <span className="close" onClick={togglePopup}>
                    &times;
                  </span>
                  <h2>좌석 리뷰</h2>
                  <p>이 좌석은 어떠셨나요?</p>
                  <div className="rating">
                    {/* 좋아요 버튼 */}
                    <button className="like-btn" onClick={handleLikeClick}>
                      좋아요
                    </button>
                  </div>
                  {/* 좋아요 카운트 표시 */}
                  <p>좋아요: {likeCount}</p>
                </div>
              </div>
            )}
                    </div>
                     <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33014">
                        <p>2</p>
                      </div>
                    </div>
                       <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33015">
                        <p>3</p>
                      </div>
                    </div>
                      <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33016">
                        <p>4</p>
                      </div>
                    </div>
                      <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat" class="real green" pk="33017">
                        <p>5</p>
                      </div>
                    </div>
                      <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33018">
                        <p>6</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33019">
                        <p>7</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33020">
                        <p>8</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33021">
                        <p>9</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33022">
                        <p>10</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33023">
                        <p>11</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33024">
                        <p>12</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33025">
                        <p>13</p>
                      </div>
                    </div>
                        <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33026">
                        <p>14</p>
                      </div>
                    </div>
                     <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33027">
                        <p>15</p>
                      </div>
                    </div>
                       <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33028">
                        <p>16</p>
                      </div>
                    </div>
                       <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat" class="real orange" pk="33029">
                        <p>17</p>
                      </div>
                    </div>
                    </div>
                   <div class="row">
                    {/* 좌석  */}
                     {/*seeyatheater */}
                       <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat" class="real green" pk="33030">
                        <p>1</p>
                      </div>
                    </div>
                       <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33031">
                        <p>2</p>
                      </div>
                    </div>
                       <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33032">
                        <p>3</p>
                      </div>
                    </div>
                       <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33033">
                        <p>4</p>
                      </div>
                    </div>
                       <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33034">
                        <p>5</p>
                      </div>
                    </div>
                       <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33035">
                        <p>6</p>
                      </div>
                    </div>
                       <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat" class="real green" pk="33036">
                        <p>7</p>
                      </div>
                    </div>
                       <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat" class="real green" pk="33037">
                        <p>8</p>
                      </div>
                    </div>
                      <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33038">
                        <p>9</p>
                      </div>
                    </div>
                      <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33039">
                        <p>10</p>
                      </div>
                    </div>
                      <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat" class="real green" pk="33040">
                        <p>11</p>
                      </div>
                    </div>
                     <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33041">
                        <p>12</p>
                      </div>
                    </div>
                       <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat" class="real green" pk="33042">
                        <p>13</p>
                      </div>
                    </div>
                       <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33043">
                        <p>14</p>
                      </div>
                    </div>
                       <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33044">
                        <p>15</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33045">
                        <p>16</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33046">
                        <p>17</p>
                      </div>
                    </div>
                           {/* 좌석 끝  */}
                  </div>
                   <div class="row">
                    {/* 좌석  */}
                     {/*seeyatheater */}
                       <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33047">
                        <p>1</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33048">
                        <p>2</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33049">
                        <p>3</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33050">
                        <p>4</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat" class="real green" pk="33051">
                        <p>5</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33052">
                        <p>6</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat" class="real green" pk="33053">
                        <p>7</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33054">
                        <p>8</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33055">
                        <p>9</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33056">
                        <p>10</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33057">
                        <p>11</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33058">
                        <p>12</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33059">
                        <p>13</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33060">
                        <p>14</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33061">
                        <p>15</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33062">
                        <p>16</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33063">
                        <p>17</p>
                      </div>
                    </div>
                           {/* 좌석 끝  */}
                  </div>
                   <div class="row">
                    {/* 좌석  */}
                     {/*seeyatheater */}
                       <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33064">
                        <p>1</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33065">
                        <p>2</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33066">
                        <p>3</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33067">
                        <p>4</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33068">
                        <p>5</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33069">
                        <p>6</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33070">
                        <p>7</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat" class="real green" pk="33071">
                        <p>8</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33072">
                        <p>9</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33073">
                        <p>10</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat" class="real green" pk="33074">
                        <p>11</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33075">
                        <p>12</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33076">
                        <p>13</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33077">
                        <p>14</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33078">
                        <p>15</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33079">
                        <p>16</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33080">
                        <p>17</p>
                      </div>
                    </div>
                           {/* 좌석 끝  */}
                  </div>
                   <div class="row">
                    {/* 좌석  */}
                     {/*seeyatheater */}
                       <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33081">
                        <p>1</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33082">
                        <p>2</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33083">
                        <p>3</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33084">
                        <p>4</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33085">
                        <p>5</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33086">
                        <p>6</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33087">
                        <p>7</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33088">
                        <p>8</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33089">
                        <p>9</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat" class="real green" pk="33090">
                        <p>10</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33091">
                        <p>11</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33092">
                        <p>12</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat" class="real yellow" pk="33093">
                        <p>13</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat" class="real green" pk="33094">
                        <p>14</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33095">
                        <p>15</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33096">
                        <p>16</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33097">
                        <p>17</p>
                      </div>
                    </div>
                           {/* 좌석 끝  */}
                  </div>
                   <div class="row">
                    {/* 좌석  */}
                     {/*seeyatheater */}
                       <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33098">
                        <p>1</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat" class="real lightgreen" pk="33099">
                        <p>2</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33100">
                        <p>3</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat" class="real lightgreen" pk="33101">
                        <p>4</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33102">
                        <p>5</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33103">
                        <p>6</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33104">
                        <p>7</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat" class="real lightgreen" pk="33105">
                        <p>8</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33106">
                        <p>9</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33107">
                        <p>10</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33108">
                        <p>11</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33109">
                        <p>12</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33110">
                        <p>13</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat" class="real green" pk="33111">
                        <p>14</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat" class="real lightgreen" pk="33112">
                        <p>15</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33113">
                        <p>16</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33114">
                        <p>17</p>
                      </div>
                    </div>
                           {/* 좌석 끝  */}
                  </div>
                   <div class="row">
                    {/* 좌석  */}
                     {/*seeyatheater */}
                       <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33115">
                        <p>1</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33116">
                        <p>2</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33117">
                        <p>3</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33118">
                        <p>4</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33119">
                        <p>5</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33120">
                        <p>6</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33121">
                        <p>7</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33122">
                        <p>8</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33123">
                        <p>9</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33124">
                        <p>10</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33125">
                        <p>11</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33126">
                        <p>12</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33127">
                        <p>13</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33128">
                        <p>14</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat" class="real green" pk="33129">
                        <p>15</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33130">
                        <p>16</p>
                      </div>
                    </div>
                             <div class="seats">
                      {/* 일반 좌석  */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33131">
                        <p>17</p>
                      </div>
                    </div>
                           {/* 좌석 끝  */}
                  </div>
                   {/* 열 끝  */}
                </div>
                 <div id="cjazit" class="B11">
                  {/* 진짜 좌석표에 표시되는 구역 이름  */}
                   {/* 열  */}
                   <div class="row">
                    {/* 좌석  */}
                     {/*seeyatheater */}
                       <div id="row_zone">
                      <p class="seat_num">A</p>
                    </div>
                    {/* 열 표시 끝  */}
                     {/* 실제 좌석 */}
                           {/* 좌석 끝  */}
                  </div>
                   <div class="row">
                    {/* 좌석  */}
                     {/*seeyatheater */}
                       <div id="row_zone">
                      <p class="seat_num">B</p>
                    </div>
                    {/* 열 표시 끝  */}
                     {/* 실제 좌석 */}
                           {/* 좌석 끝  */}
                  </div>
                   <div class="row">
                    {/* 좌석  */}
                     {/*seeyatheater */}
                       <div id="row_zone">
                      <p class="seat_num">C</p>
                    </div>
                    {/* 열 표시 끝  */}
                     {/* 실제 좌석 */}
                           {/* 좌석 끝  */}
                  </div>
                   <div class="row">
                    {/* 좌석  */}
                     {/*seeyatheater */}
                       <div id="row_zone">
                      <p class="seat_num">D</p>
                    </div>
                    {/* 열 표시 끝  */}
                     {/* 실제 좌석 */}
                           {/* 좌석 끝  */}
                  </div>
                   <div class="row">
                    {/* 좌석  */}
                     {/*seeyatheater */}
                       <div id="row_zone">
                      <p class="seat_num">E</p>
                    </div>
                    {/* 열 표시 끝  */}
                     {/* 실제 좌석 */}
                           {/* 좌석 끝  */}
                  </div>
                   <div class="row">
                    {/* 좌석  */}
                     {/*seeyatheater */}
                       <div id="row_zone">
                      <p class="seat_num">F</p>
                    </div>
                    {/* 열 표시 끝  */}
                     {/* 실제 좌석 */}
                           {/* 좌석 끝  */}
                  </div>
                   <div class="row">
                    {/* 좌석  */}
                     {/*seeyatheater */}
                       <div id="row_zone">
                      <p class="seat_num">G</p>
                    </div>
                    {/* 열 표시 끝  */}
                     {/* 실제 좌석 */}
                           {/* 좌석 끝  */}
                  </div>
                   {/* 열 끝  */}
                </div>
                 {/* 구역 끝  */}
              </div>
            </div>
          </div>
          
          <div id="2층">
            <div class="floor">
              {/* 좌석표에 층을 표시  */}
               <div class="seating_table_container">
                <div class="seattable_floor">2층</div>
              </div>
               {/* 각 층의 좌석 표시 */}
              <div class="floor_container">
                {/* 구역 */}
                 <div id="cjazit" class="A12">
                  {/* 진짜 좌석표에 표시되는 구역 이름 */}
                   {/* 열 */}
                   <div class="row">
                    {/* 좌석 */}
                     {/*seeyatheater*/}
                     {/* 좌석표에 열 표시해주는 코드 */}
                     <div id="row_zone">
                      <p class="seat_num">J</p>
                    </div>
                             </div>
                   <div class="row">
                    {/* 좌석 */}
                     {/*seeyatheater*/}
                     {/* 좌석표에 열 표시해주는 코드 */}
                     <div id="row_zone">
                      <p class="seat_num">K</p>
                    </div>
                             </div>
                   <div class="row">
                    {/* 좌석 */}
                     {/*seeyatheater*/}
                     {/* 좌석표에 열 표시해주는 코드 */}
                     <div id="row_zone">
                      <p class="seat_num">L</p>
                    </div>
                             </div>
                   {/* 열 끝 */}
                </div>
                 <div id="cjazit" class="AA2">
                  {/* 진짜 좌석표에 표시되는 구역 이름 */}
                   {/* 열 */}
                   <div class="row">
                    {/* 좌석 */}
                     {/*seeyatheater*/}
                     {/* 좌석표에 열 표시해주는 코드 */}
                     <div class="seats">
                      {/* 일반 좌석 */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33142">
                        <p>1</p>
                      </div>
                    </div>
                           {/* 좌석표에 열 표시해주는 코드 */}
                     <div class="seats">
                      {/* 일반 좌석 */}
                      <div id="seat" class="real green" pk="33143">
                        <p>2</p>
                      </div>
                    </div>
                           {/* 좌석표에 열 표시해주는 코드 */}
                     <div class="seats">
                      {/* 일반 좌석 */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33144">
                        <p>3</p>
                      </div>
                    </div>
                           {/* 좌석표에 열 표시해주는 코드 */}
                     <div class="seats">
                      {/* 일반 좌석 */}
                      <div id="seat" class="real yellow" pk="33145">
                        <p>4</p>
                      </div>
                    </div>
                           {/* 좌석표에 열 표시해주는 코드 */}
                     <div class="seats">
                      {/* 일반 좌석 */}
                      <div id="seat" class="real lightgreen" pk="33146">
                        <p>5</p>
                      </div>
                    </div>
                           {/* 좌석표에 열 표시해주는 코드 */}
                     <div class="seats">
                      {/* 일반 좌석 */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33147">
                        <p>6</p>
                      </div>
                    </div>
                           {/* 좌석표에 열 표시해주는 코드 */}
                     <div class="seats">
                      {/* 일반 좌석 */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33148">
                        <p>7</p>
                      </div>
                    </div>
                           {/* 좌석표에 열 표시해주는 코드 */}
                     <div class="seats">
                      {/* 일반 좌석 */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33149">
                        <p>8</p>
                      </div>
                    </div>
                           {/* 좌석표에 열 표시해주는 코드 */}
                     <div class="seats">
                      {/* 일반 좌석 */}
                      <div id="seat" class="real red" pk="33150">
                        <p>9</p>
                      </div>
                    </div>
                           <div id="seat"></div>
                       {/* 좌석표에 열 표시해주는 코드 */}
                     <div class="seats">
                      {/* 일반 좌석 */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33152">
                        <p>10</p>
                      </div>
                    </div>
                           {/* 좌석표에 열 표시해주는 코드 */}
                     <div class="seats">
                      {/* 일반 좌석 */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33153">
                        <p>11</p>
                      </div>
                    </div>
                           {/* 좌석표에 열 표시해주는 코드 */}
                     <div class="seats">
                      {/* 일반 좌석 */}
                      <div id="seat" class="real green" pk="33154">
                        <p>12</p>
                      </div>
                    </div>
                           {/* 좌석표에 열 표시해주는 코드 */}
                     <div class="seats">
                      {/* 일반 좌석 */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33155">
                        <p>13</p>
                      </div>
                    </div>
                           {/* 좌석표에 열 표시해주는 코드 */}
                     <div class="seats">
                      {/* 일반 좌석 */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33156">
                        <p>14</p>
                      </div>
                    </div>
                           {/* 좌석표에 열 표시해주는 코드 */}
                     <div class="seats">
                      {/* 일반 좌석 */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33157">
                        <p>15</p>
                      </div>
                    </div>
                           {/* 좌석표에 열 표시해주는 코드 */}
                     <div class="seats">
                      {/* 일반 좌석 */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33158">
                        <p>16</p>
                      </div>
                    </div>
                           {/* 좌석표에 열 표시해주는 코드 */}
                     <div class="seats">
                      {/* 일반 좌석 */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33159">
                        <p>17</p>
                      </div>
                    </div>
                          </div>
                   <div class="row">
                    {/* 좌석 */}
                     {/*seeyatheater*/}
                     {/* 좌석표에 열 표시해주는 코드 */}
                     <div class="seats">
                      {/* 휠체어석 */}
                      <div id="seat" class="real disabled no_review" pk="33160"></div>
                    </div>
                           {/* 좌석표에 열 표시해주는 코드 */}
                     <div class="seats">
                      {/* 일반 좌석 */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33161">
                        <p>1</p>
                      </div>
                    </div>
                           {/* 좌석표에 열 표시해주는 코드 */}
                     <div class="seats">
                      {/* 일반 좌석 */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33162">
                        <p>2</p>
                      </div>
                    </div>
                           {/* 좌석표에 열 표시해주는 코드 */}
                     <div class="seats">
                      {/* 일반 좌석 */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33163">
                        <p>3</p>
                      </div>
                    </div>
                           {/* 좌석표에 열 표시해주는 코드 */}
                     <div class="seats">
                      {/* 일반 좌석 */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33164">
                        <p>4</p>
                      </div>
                    </div>
                           {/* 좌석표에 열 표시해주는 코드 */}
                     <div class="seats">
                      {/* 일반 좌석 */}
                      <div id="seat" class="real lightgreen" pk="33165">
                        <p>5</p>
                      </div>
                    </div>
                           {/* 좌석표에 열 표시해주는 코드 */}
                     <div class="seats">
                      {/* 일반 좌석 */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33166">
                        <p>6</p>
                      </div>
                    </div>
                           {/* 좌석표에 열 표시해주는 코드 */}
                     <div class="seats">
                      {/* 일반 좌석 */}
                      <div id="seat" class="real yellow" pk="33167">
                        <p>7</p>
                      </div>
                    </div>
                           {/* 좌석표에 열 표시해주는 코드 */}
                     <div class="seats">
                      {/* 일반 좌석 */}
                      <div id="seat" class="real green" pk="33168">
                        <p>8</p>
                      </div>
                    </div>
                           {/* 좌석표에 열 표시해주는 코드 */}
                     <div class="seats">
                      {/* 일반 좌석 */}
                      <div id="seat" class="real lightgreen" pk="33169">
                        <p>9</p>
                      </div>
                    </div>
                           {/* 좌석표에 열 표시해주는 코드 */}
                     <div class="seats">
                      {/* 일반 좌석 */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33170">
                        <p>10</p>
                      </div>
                    </div>
                           {/* 좌석표에 열 표시해주는 코드 */}
                     <div class="seats">
                      {/* 일반 좌석 */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33171">
                        <p>11</p>
                      </div>
                    </div>
                           {/* 좌석표에 열 표시해주는 코드 */}
                     <div class="seats">
                      {/* 일반 좌석 */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33172">
                        <p>12</p>
                      </div>
                    </div>
                           {/* 좌석표에 열 표시해주는 코드 */}
                     <div class="seats">
                      {/* 일반 좌석 */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33173">
                        <p>13</p>
                      </div>
                    </div>
                           {/* 좌석표에 열 표시해주는 코드 */}
                     <div class="seats">
                      {/* 휠체어석 */}
                      <div id="seat" class="real disabled no_review" pk="33174"></div>
                    </div>
                           <div id="seat"></div>
                      </div>
                   <div class="row">
                    {/* 좌석 */}
                     {/*seeyatheater*/}
                     {/* 좌석표에 열 표시해주는 코드 */}
                     <div class="seats">
                      {/* 일반 좌석 */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33176">
                        <p>1</p>
                      </div>
                    </div>
                           {/* 좌석표에 열 표시해주는 코드 */}
                     <div class="seats">
                      {/* 일반 좌석 */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33177">
                        <p>2</p>
                      </div>
                    </div>
                           {/* 좌석표에 열 표시해주는 코드 */}
                     <div class="seats">
                      {/* 일반 좌석 */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33178">
                        <p>3</p>
                      </div>
                    </div>
                           {/* 좌석표에 열 표시해주는 코드 */}
                     <div class="seats">
                      {/* 일반 좌석 */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33179">
                        <p>4</p>
                      </div>
                    </div>
                           {/* 좌석표에 열 표시해주는 코드 */}
                     <div class="seats">
                      {/* 일반 좌석 */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33180">
                        <p>5</p>
                      </div>
                    </div>
                           {/* 좌석표에 열 표시해주는 코드 */}
                     <div class="seats">
                      {/* 일반 좌석 */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33181">
                        <p>6</p>
                      </div>
                    </div>
                           {/* 좌석표에 열 표시해주는 코드 */}
                     <div class="seats">
                      {/* 일반 좌석 */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33182">
                        <p>7</p>
                      </div>
                    </div>
                           {/* 좌석표에 열 표시해주는 코드 */}
                     <div class="seats">
                      {/* 일반 좌석 */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33183">
                        <p>8</p>
                      </div>
                    </div>
                           {/* 좌석표에 열 표시해주는 코드 */}
                     <div class="seats">
                      {/* 일반 좌석 */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33184">
                        <p>9</p>
                      </div>
                    </div>
                           {/* 좌석표에 열 표시해주는 코드 */}
                     <div class="seats">
                      {/* 일반 좌석 */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33185">
                        <p>10</p>
                      </div>
                    </div>
                           {/* 좌석표에 열 표시해주는 코드 */}
                     <div class="seats">
                      {/* 일반 좌석 */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33186">
                        <p>11</p>
                      </div>
                    </div>
                           {/* 좌석표에 열 표시해주는 코드 */}
                     <div class="seats">
                      {/* 일반 좌석 */}
                      <div id="seat"  class={`real ${showPopup ? 'selected' : 'no_review'}`} onClick={togglePopup}pk="33187">
                        <p>12</p>
                      </div>
                    </div>
                           <div id="seat"></div>
                       <div id="seat"></div>
                      </div>
                   {/* 열 끝 */}
                </div>
                 <div id="cjazit" class="B12">
                  {/* 진짜 좌석표에 표시되는 구역 이름 */}
                   {/* 열 */}
                   <div class="row">
                    {/* 좌석 */}
                     {/*seeyatheater*/}
                     {/* 좌석표에 열 표시해주는 코드 */}
                     <div id="row_zone">
                      <p class="seat_num">J</p>
                    </div>
                             </div>
                   <div class="row">
                    {/* 좌석 */}
                     {/*seeyatheater*/}
                     {/* 좌석표에 열 표시해주는 코드 */}
                     <div id="row_zone">
                      <p class="seat_num">K</p>
                    </div>
                             </div>
                   <div class="row">
                    {/* 좌석 */}
                     {/*seeyatheater*/}
                     {/* 좌석표에 열 표시해주는 코드 */}
                     <div id="row_zone">
                      <p class="seat_num">L</p>
                    </div>
                             </div>
                   {/* 열 끝 */}
                </div>
                 {/* 구역 끝 */}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
 export default Cjazit;

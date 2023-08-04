import React, { useState } from "react";
import { useEffect, useRef } from "react";

function Map() {
  // 지도를 담아줄 변수 선언
  const mapContainer = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  /*
    useEffect(() => {
        // Spring Boot에서 공연장 위치 정보 API 엔드포인트에 요청 보내기
        axios.get("/api/venues")
          .then(response => {
            setSearchResult(response.data);
          })
          .catch(error => {
            console.error("Failed to fetch venue data:", error);
          });
      }, []);
*/
  useEffect(() => {
    console.log({searchResult})
    const { naver } = window;
    // 지도의 위치를 위도와 경도로 표현하여 변수에 저장
    const location = new naver.maps.LatLng(
      37.47447316540176,
      127.03321442669377
    );

    // 지도의 특징을 담는 변수
    const options = {
      center: location,
      zoom: 17,
    };
    const map = new naver.maps.Map(mapContainer.current, options);

    /*   
  // searchResult 배열에서 공연장 위치 정보 가져와서 지도에 마커 표시하기
     searchResult.forEach(venue => {
        const venueLocation = new naver.maps.LatLng(venue.latitude, venue.longitude);
        new naver.maps.Marker({
          position: venueLocation,
          map,
 */
    new naver.maps.Marker({
      position: location,
      map,
    });
  }, [searchResult]);

  return (
    <>
      <div
        ref={mapContainer}
        style={{ width: "800px", height: "700px", margin: "0 auto" }}
      ></div>
    </>
  );
}

export default Map;

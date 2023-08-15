import React, { useState, useEffect } from "react";
import Map from "../../component/Body/Map";
import axios from "axios";

function Location({ theaterId }) {
  const [theaterLocation, setTheaterLocation] = useState(null);

  useEffect(() => {
    const fetchTheaterLocation = async (theaterId) => {
      try {

        const response = await axios.get(`/theater/${theaterId}`);
        const theaterData = response.data;
        // 주소 정보와 검색 중심 좌표를 변수로 준비
        const address = theaterData.theaterLocation;
   
        const searchCenterCoordinate = `${theaterData.latitude},${theaterData.longitude}`;

        // Geocoding API를 사용하여 주소를 위도와 경도로 변환
        const geocodingResponse = await axios.get(
          "https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode",
          {
            params: {
              query: address,
              coordinate: searchCenterCoordinate,
            },
            headers: {
              "X-NCP-APIGW-API-KEY-ID": "ID",
              "X-NCP-APIGW-API-KEY": "ID",
            },
          }
        );
        const locationData = geocodingResponse.data;
        if (
          locationData &&
          locationData.addresses &&
          locationData.addresses.length > 0
        ) {
          const { x: longitude, y: latitude } = locationData.addresses[0];
          setTheaterLocation({ latitude, longitude });
        }

      } catch (error) {
        console.error("Error fetching theater location: ", error);
      }
    };

    if (theaterId) {
      fetchTheaterLocation(theaterId);
    }
  }, [theaterId]);

  return (
    <>
      <h1 className="center">주소, 화장실 정보</h1>
      {theaterLocation ? <Map location={theaterLocation} /> : <p>Loading...</p>}
    </>
  );
}

export default Location;

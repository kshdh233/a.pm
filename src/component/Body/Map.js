import React, { useEffect, useRef } from "react";
import axios from "axios";


function Map({ location }) {
  const mapContainer = useRef(null);

  useEffect(() => {
    const { naver } = window;
    if (!naver || !location) return;

    const { latitude, longitude } = location;
    const venueLocation = new naver.maps.LatLng(latitude, longitude);

    const options = {
      center: venueLocation,
      zoom: 17,
    };

    const map = new naver.maps.Map(mapContainer.current, options);

    new naver.maps.Marker({
      position: venueLocation,
      map: map,
    });
  }, [location]);

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

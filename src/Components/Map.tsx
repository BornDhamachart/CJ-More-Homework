import React, { useState } from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import { ShopDetail } from "../interface";

interface Props {
  shopDetail: ShopDetail;
}

const Map: React.FC<Props> = ({ shopDetail }) => {
  console.log("shopDetail", shopDetail);

  const containerStyle = {
    width: "50%",
    height: "50vh",
  };

  //   const mapOptions = {
  //     zoomControl: true,
  //     scaleControl: true,
  //     fullscreenControl: true,
  //     streetViewControl: true,
  //     mapTypeControl: true,
  //   };

  const markPosition = {
    lat: 12.979881,
    lng: 101.194,
    // lat : shopDetail.lat,
    // lng: shopDetail.lng
  };

  return (
    <>
      <div className="rounded-xl overflow-auto">
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLEMAP_API_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            zoom={10}
            center={markPosition}
            // options={mapOptions}
          >
            <MarkerF
              // key={shopDetail.code}
              position={markPosition}
            />
          </GoogleMap>
        </LoadScript>
      </div>
    </>
  );
};

export default Map;

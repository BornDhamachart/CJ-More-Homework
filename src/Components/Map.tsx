import React from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import { ShopDetail } from "../interface";

interface Props {
  shopDetail: ShopDetail;
}

const Map: React.FC<Props> = ({ shopDetail }) => {
  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const markPosition = {
    lat : shopDetail.lat,
    lng: shopDetail.lng
  };

  return (
    <>
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLEMAP_API_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            zoom={16}
            center={markPosition}
          >
            <MarkerF
              key={shopDetail.code}
              position={markPosition}
            />
          </GoogleMap>
        </LoadScript>
    </>
  );
};

export default Map;

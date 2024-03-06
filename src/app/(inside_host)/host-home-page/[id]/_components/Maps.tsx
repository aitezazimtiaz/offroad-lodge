"use client";
import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import LocationIcon from "@/components/icons/LocationIcon";

const containerStyle = {
  width: "100%",
  height: "500px",
  marginTop: "10px",
  borderRadius: "30px",
  border: "none",
};

const center = {
  lat: 36.7783,
  lng: -119.4179,
};

const mapOptions = {
  zoomControl: false, // This disables only the zoom control
  mapTypeControl: false, // This disables only the map/satellite view toggle
  streetViewControl: false, // This disables only the Street View control
  fullscreenControl: false, // This disables only the full-screen control
  rotateControl: false, // This disables only the rotate control
  scaleControl: false, // This disables only the scale control
  disableDefaultUI: true, // This disables the entire default UI, including all of the above
};

function GoogleMaps() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_REACT_APP_MAP_KEY ?? "",
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      options={mapOptions}
    >
      <Marker
        position={{ lat: 36.7783, lng: -119.4179 }}
        title="Current Location"
      />
    </GoogleMap>
  ) : null;
}

export default React.memo(GoogleMaps);

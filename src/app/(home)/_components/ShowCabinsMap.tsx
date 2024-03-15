"use client";

import React, { useState } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";
import { multiMarkers } from "@/data/fakebackend";

interface MarkerData {
  position: {
    lat: number;
    lng: number;
  };
  title: string;
  address: string;
  price: string;
}

const containerStyle: React.CSSProperties = {
  width: "100%",
  height: "500px",
  marginTop: "10px",
  borderRadius: "30px",
  border: "none",
};

const center: google.maps.LatLngLiteral = {
  lat: 36.7783,
  lng: -119.4179,
};

const mapOptions: google.maps.MapOptions = {
  zoomControl: false,
  mapTypeControl: false,
  streetViewControl: false,
  fullscreenControl: false,
  rotateControl: false,
  scaleControl: false,
  disableDefaultUI: true,
};

function GoogleMaps() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_REACT_APP_MAP_KEY ?? "",
  });

  const [selectedMarker, setSelectedMarker] = useState<MarkerData | null>(null);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      options={mapOptions}
    >
      {multiMarkers.map((marker, index) => (
        <Marker
          key={index}
          position={marker.position}
          onMouseOver={() => setSelectedMarker(marker)}
          onClick={() => setSelectedMarker(marker)}
        />
      ))}
      {selectedMarker && (
        <InfoWindow position={selectedMarker.position}>
          <div className="flex flex-col gap-1 justify-center items-center rounded-xl">
            <span className="text-lg text-primary font-bold">
              {selectedMarker.title}
            </span>
            <span className=" text-subheading">{selectedMarker.address}</span>
            <span className=" text-subheading">
              Price:
              <span className="text-red-500">{selectedMarker.price}</span>/
              night
            </span>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  ) : null;
}

export default React.memo(GoogleMaps);

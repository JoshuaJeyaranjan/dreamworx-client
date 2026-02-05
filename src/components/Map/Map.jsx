import { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import "./Map.scss";

const containerStyle = {
  width: "100%",
  height: "450px",
};

const center = {
  lat: 43.80581609754455,
  lng: -79.19514672043643,
};

const darkModeStyle = [
  { elementType: "geometry", stylers: [{ color: "#1e2a38" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#e0e0e0" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#1e2a38" }] },

  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#2c3e50" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#16202b" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#ffffff" }],
  },

  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#ff8f00" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#ffffff" }],
  },

  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#0f1d33" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#a0c4ff" }],
  },

  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#1c2b21" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#7cb342" }],
  },

  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2c3e50" }],
  },

  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [{ color: "#33475b" }],
  },
  {
    featureType: "administrative",
    elementType: "labels.text.fill",
    stylers: [{ color: "#cfd8dc" }],
  },
];

export default function Map() {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [markerAnimation, setMarkerAnimation] = useState(null);

  const handleMarkerLoad = (marker) => {
    if (window.google) {
      setMarkerAnimation(window.google.maps.Animation.BOUNCE);

      setTimeout(() => setMarkerAnimation(null), 2000);
    }
  };

  return (
    <div className="map">
      <LoadScript googleMapsApiKey="AIzaSyD2XrEoDl_ZaWK8n0DG91YxN_Pnqlm66-s">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={16}
          options={{
            styles: darkModeStyle,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
        >
          <Marker
            position={center}
            onLoad={handleMarkerLoad}
            animation={markerAnimation}
            onClick={() => setIsInfoOpen(true)}
          />
          {isInfoOpen && (
            <InfoWindow
              position={center}
              onCloseClick={() => setIsInfoOpen(false)}
            >
              <div className="map__info-window">
                <h3>DreamWorx Auto Body</h3>
                <p>87 Thornmount Dr #5, Toronto, ON</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

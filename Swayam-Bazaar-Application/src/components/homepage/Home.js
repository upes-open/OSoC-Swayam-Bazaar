import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Home = () => {

  const MAPBOX_API_KEY = process.env.REACT_APP_MAPBOX_TOKEN;
  mapboxgl.accessToken = MAPBOX_API_KEY;
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
      enableHighAccuracy: true
    });
  }, []);

  function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude]);
  }

  function errorLocation() {
    setupMap([-2.24, 53.48]);
  }

  function setupMap(center) {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: center,
      zoom: 15
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    return () => map.remove();
  }

  return <div id="map" style={{ width: "100%", height: "100vh" }} />;
};

export default Home;

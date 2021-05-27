import * as React from 'react';
import { useState, useCallback, useEffect } from 'react';
import {render} from 'react-dom';
import ReactMapGL, {Marker, NavigationControl} from 'react-map-gl';
import './Mapbox.css'
import ControlPanel from './control-panel';
import Pin from './pin';
import useGeolocation from './Geolocation';
import Cancel from '../cards/Svg/Cancel';



const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};

function Mapbox() {

  const location = useGeolocation()
  const [showMap , handleMap ] = useState(false)

 const handleMapDisplay = () => {
   handleMap(!showMap)
 }
 const handleMapDisplaydone = () => {
   handleMap(!showMap)
   localStorage.setItem('longitude',viewport.longitude)
   localStorage.setItem('latitude',viewport.latitude)
 }

  const [viewport, setViewport] = useState({
    latitude:  19.477733720546357 ,
    longitude:   82.97313918863661 ,
    zoom: 3.5,
    bearing: 0,
    pitch: 0,
    height:'100vh',
    width:'100vw'
  });

  const [marker, setMarker] = useState({
    latitude:19.477733720546357 ,
    longitude:82.97313918863661 ,


  });



  const [events, logEvents] = useState({});

  const onMarkerDragStart = useCallback(event => {
    logEvents(_events => ({..._events, onDragStart: event.lngLat}));
  }, []);

  const onMarkerDrag = useCallback(event => {
    logEvents(_events => ({..._events, onDrag: event.lngLat}));
  }, []);

  const onMarkerDragEnd = useCallback(event => {
    logEvents(_events => ({..._events, onDragEnd: event.lngLat}));
    setMarker({
      longitude: event.lngLat[0],
      latitude: event.lngLat[1]
    });
  }, []);
  return (
    <React.Fragment>

<div style={{padding: '1vh 6vw', display: 'flex', justifyContent: 'space-evenly'}}>
                            <input className="SBOptions" name="stateName" placeholder="Latitude" value= {viewport.latitude}>
                            
                            </input>
                            <input  className="SBOptions"   value={viewport.longitude} style={{borderRadius: '5px', width: '22vw'}} placeholder="Longitude" name="district" >
                          
                            </input>
                            <button className="submitBtn_d" type="button" name="button" onClick={handleMapDisplay}> Map </button>
                          </div>
      {showMap ?
      <div className={showMap ?"mapbox-map":"map-btns"}>
      <ReactMapGL 
      {...viewport} 
      onViewportChange={(newview) => setViewport(newview)}
      mapboxApiAccessToken={"pk.eyJ1IjoiY2UxOWIwMzAiLCJhIjoiY2twNDA0a28wMDlqaTMybHJzcjJsODV5NCJ9.TqYUNaeCPJgguJgZUBM5_g"}
      mapStyle="mapbox://styles/ce19b030/ckp42nasm0gxl18ojtkjnlsoz"
    
      >

<Marker
          longitude={marker.longitude}
          latitude={marker.latitude}
          offsetTop={-20}
          offsetLeft={-10}
          draggable
          onDragStart={onMarkerDragStart}
          onDrag={onMarkerDrag}
          onDragEnd={onMarkerDragEnd}
        >
          <Pin size={20} />
        </Marker>
{/* 
        <div className="nav" style={navStyle}>
          <NavigationControl />
        </div> */}
        </ReactMapGL>
        <div className="btm-whole"><div className="btn-done" onClick={handleMapDisplaydone}>Done</div></div> 
        <div className="btn-cancel" onClick={handleMapDisplay}><Cancel></Cancel></div> 
        </div>:null}

    </React.Fragment>
  );
}

export default Mapbox;

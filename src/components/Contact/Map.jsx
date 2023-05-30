import React from 'react'
import { GoogleMap } from '@react-google-maps/api'
import './map.css'

const containerStyle = {
  width: '100%',
  height: '540px'
}

const Map = ({center}) => {
   
    const mapRef = React.useRef(undefined)
    const onLoad = React.useCallback(function callback(map){
     mapRef.current = map;
    },[])

    const onUnmount = React.useCallback(function callback(map){
        mapRef.current = undefined;
       },[])

    return (
                           <div className="container__map">
                             <div className="map__row">
                             <GoogleMap
                              mapContainerStyle={containerStyle}
                              center={center}
                              zoom={10}
                              onLoad={onLoad}
                              onUnmount={onUnmount}
                              >
                                <> </>
                            </GoogleMap>
                             </div>
                           </div>
            );
        }
        export default Map;
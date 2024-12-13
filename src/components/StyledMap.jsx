import {React, useCallback, useState} from 'react'
import {APIProvider, Map, AdvancedMarker, InfoWindow, useAdvancedMarkerRef} from '@vis.gl/react-google-maps';

const StyledMap = (props) => {

    // Using the `useMarkerRef` hook instead.
    const[markerRef, marker]= useAdvancedMarkerRef();

    const[InfoWindowShown, setInfoWindowShown] = useState(false);


    // clicking the marker will toggle the infowindow
    const handleMarkerClick = useCallback(
        () => setInfoWindowShown(isShown => !isShown),
        []
    );
    const handleClose = useCallback(() => setInfoWindowShown(false),[]); 

  return (
    <>
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <Map
            style={props.size}
            defaultCenter={props.position}
            defaultZoom={12}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
            mapId={import.meta.env.VITE_GOOGLE_MAPS_API_ID}
            />

            <AdvancedMarker 
            ref={markerRef}
            position={props.position} 
            title={"Mantik Enterprise"}
            onClick={handleMarkerClick}
            />

            {InfoWindowShown && (
                <InfoWindow 
                    anchor={marker} 
                    position={props.position}
                    onClose={handleClose}
                >
                    <h1 className="text-black text-lg md:text-xl font-bold ">MANTIK ENTERPRISES</h1>
                    <p className="text-gray-900 mb-4">
                        Unit No: 1, Ghaswala Estate, <br />
                        Swami Vivekananda Rd,<br />
                        Opp. 24 Karat, Jogeshwari West, <br />
                        Mumbai - 400102
                    </p>
                    <a 
                        className="inline-flex items-center px-4 py-2 text-sm font-normal text-white bg-gray-600 rounded-md hover:bg-gray-800"
                        href="https://www.google.com/maps?ll=19.140937,72.843017&z=21.7895&t=m&hl=en-GB&gl=US&mapclient=apiv3&cid=17598214390912717076"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="w-5 h-5 mr-2" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        >
                            <path d="M5 12l5 5L20 7" />
                        </svg>
                        View Location on Map
                    </a>
                </InfoWindow>
            
            )}

        </APIProvider>
    </>
  )
}

export default StyledMap

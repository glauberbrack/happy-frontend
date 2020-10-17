import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup }  from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import '../styles/pages/orphanages-map.css'

import mapMarkerImg from '../assets/map-marker.svg'

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy Location"/>
                    <h2>Choose an orphanage</h2>
                    <p>A lot of kids are waiting for you (:</p>
                </header>

                <footer>
                    <strong>Bebedouro</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>

            <Map
                center={[-22.872064,-43.3717248]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAP_TOKEN}`} 
                />
                </Map>
                
            <Link to="#" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link>
        </div>
    )
}

export default OrphanagesMap;
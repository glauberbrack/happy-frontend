import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi'

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

            <div>mapinha</div>
            <Link to="#" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link>
        </div>
    )
}

export default OrphanagesMap;
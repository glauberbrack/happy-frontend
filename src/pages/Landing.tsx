import React from 'react';
import { FiArrowRight } from 'react-icons/fi'

import '../styles/pages/landing.css';

import logo from '../assets/logo.svg';

function Landing () {
    return(
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={logo} alt="Happy"/>

                <main>
                <h1>Bring happiness to the world!</h1>
                <p>Visit orphanages and change children's day</p>
                </main>

                <div className="location">
                <strong>Bebedouro</strong>
                <span>São Paulo</span>
                </div>

                <a href="#" className='enter-app'> <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"/> </a>
            </div>
        </div>
    )
}

export default Landing
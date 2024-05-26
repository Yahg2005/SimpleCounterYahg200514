// Importar React en el bundle
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css'; // Mover el import de Bootstrap aquí
import '../styles/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faClock);

function SimpleCounter(props) {
   
    return (
        <div className="container">
        <div className="bigCounter">
            <div className="calendary">
            <FontAwesomeIcon icon={faClock} className="icon-style"/>
            </div>
            <div className="six">{props.digitSix% 10}</div>
            <div className="five">{props.digitFive% 10}</div>
            <div className="four">{props.digitFour% 10}</div>
            <div className="three">{props.digitThree% 10}</div>
            <div className="two">{props.digitTwo% 10}</div>
            <div className="one">{props.digitOne % 10}</div>
        </div>
        </div>
    );
}

    

SimpleCounter.propTypes = {
    // alertTime: PropTypes.number,
    digitSix: PropTypes.number,
    digitFive: PropTypes.number,
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number,
};

let counter = 0;
setInterval(function() {
    const six = Math.floor(counter / 100000);
    const five = Math.floor(counter / 10000);
    const four = Math.floor(counter / 1000);
    const three = Math.floor(counter / 100);
    const two = Math.floor(counter / 10);
    const one = Math.floor(counter / 1);
    counter++;

    // Renderizar tu aplicación de React
    ReactDOM.render(
        <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six}/>,
        document.querySelector("#app")
    );
},  1000);

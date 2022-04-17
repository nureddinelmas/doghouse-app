import React from "react";
import { Link } from 'react-router-dom';
import './styles.css';
import background from './img/dogwelcome.jpeg';

const Welcome = () => {

    return (
        <div className="welcomecard" >
            <Link to="/List">
            <img src="https://img.vivense.com/480x320/images/dee4f110fdaa451b9fdc5feba11fe93b.jpg" alt="" />
           </Link>
           <h1 className="dogcare">WELCOME DOG CARE</h1>
        </div>
    )
}

export default Welcome;

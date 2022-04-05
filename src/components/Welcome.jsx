import React from "react";
import { Link } from 'react-router-dom';
import './styles.css';

const Welcome = ({items}) => {

    return (
        <section>
            <h2>Welcome our Dogshem</h2>
            <Link to="/List">
           <button>Go to Hund Listan</button>
           </Link>
        </section>
    )
}

export default Welcome;

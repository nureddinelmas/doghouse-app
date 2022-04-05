import React from "react";
import { Link } from 'react-router-dom';
import './styles.css';

const List = ({ items }) => {
    return (
        <main>
            <div>
                <h1 className="h1"> List of dogs </h1>

                <div className="card">

                    {
                        items.map((data, index) => (
                            <div className="container" key={index}>
                                <img src={data.img} alt="" />
                                <h3 className="title">{data.name}</h3>
                                <Link to={`/items/${data.chipNumber}`}> <button>More</button></Link>
                            </div>

                        ))
                    }

                </div>
            </div>
        </main>
    )
}

export default List;
import React from "react";
import { Link } from 'react-router-dom';
import './styles.css';

const List = ({ items }) => {
    return (
        <main>
            <div className="listOf">
            <h1 className="dogcare"> List of Dogs </h1>

                <div className="card">

                    {

                        items.map((data, index) => (

                            <div key={index} className="dog">
                                <div style={{ background: `url(${data.img}) no-repeat center/cover`, }} className="dogBg"><img src={data.img} alt="" /></div>

                                <div className="dogInfo"><p>{data.name}</p>
                                    <Link to={`/items/${data.chipNumber}`}>View more</Link>
                                </div>
                            </div>



                        ))
                    }

                </div>
            </div>
        </main>
    )
}

export default List;
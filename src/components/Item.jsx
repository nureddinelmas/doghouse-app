import React from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import './styles.css'

const Item = ({ items }) => {

    const { chipNumber } = useParams();


    const filter = items.filter(item => {
        return item.chipNumber === chipNumber
    })

    return (

        <>
            {filter.map(item =>
                <div className="container">
                    <img className="img" src={item.img} alt="" />
                    <h1> Name : {item.name}</h1>
                    <h3>Sex : {item.sex}</h3>
                    <h3>Breed : {item.breed}</h3>
                    <h3>Age : {item.age}</h3>
                    <h5>Owner : {item.owner.name} {item.owner.lastName} - {item.owner.phoneNumber}</h5>
                    <Link to="/List">
                        <img src="https://services.garmin.com/appsLibraryBusinessServices_v0/rest/apps/d7bd430c-f443-4aaa-b7d3-993a22b1b1f4/icon/c11c5660-48d4-408a-bcf0-20f433f05ee4" alt="" className="backImg" />
                    </Link>
                </div>


            )}
        </>
    )
}

export default Item;
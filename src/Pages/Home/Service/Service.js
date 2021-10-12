import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div className="single-service">
            <div>
                <img style={{ width: '100%' }} src={img} alt="" />
            </div>
            
            <h2>{name}</h2>
            <p>{description}</p>
            <h4> price: {price}</h4>
        </div>
    );
};

export default Service;
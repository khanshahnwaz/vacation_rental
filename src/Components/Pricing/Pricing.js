import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Pricing.css";

const Pricing = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/houses')
      .then(response => {
        setHouses(response.data);
      })
      .catch(error => {
        console.error('Error fetching the house data:', error);
      });
  }, []);

  return (
    <div className="pricing-section">
      <h1>Houses on Rent</h1>
      <div className="house-list">
        {houses.map((house, index) => (
          <div key={index} className="house-item">
            <img src={house.image} alt={house.address} />
            <h2>{house.address}</h2>
            <p>{house.city}</p>
            <p>Price: ${house.price}</p>
            <p>Type: {house.type}</p>
            <p>Floorspace: {house.floorspace} sq ft</p>
            <p>Beds: {house.beds}</p>
            <p>Baths: {house.baths}</p>
            <p>Parking: {house.parking}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
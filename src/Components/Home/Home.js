import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; 
import haridwar from "../Assets/download (4).jpg";
import shimla from "../Assets/images.jpg";
import goa from "../Assets/download.jpg";
import dehradun from "../Assets/download (1).jpg";
import assam from "../Assets/assam.jpg";
import mizoram from '../Assets/images2.jpg';
import kerala from "../Assets/images (1).jpg";
import tripura from "../Assets/vacation-home.jpg";

const Home = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  const handleRentingClick = () => {
    navigate('/login');
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="home-container">
      {console.log("I am in home")}
      <div className="home-header">
      <h1>Welcome to Vacation Homes & Rentals</h1>
        <div className="date-inputs">
          <div className="where-input">
            <label htmlFor="location">Where</label>
            <input
              type="text"
              id="location"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="check-in">Check-in</label>
            <input
              type="date"
              id="check-in"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="check-out">Check-out</label>
            <input
              type="date"
              id="check-out"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
            />
          </div>
        </div>
        <div className="image-gallery">
          <div className="image-container">
            <img src={haridwar} alt="Haridwar" />
            <p>Haridwar</p>
          </div>
          <div className="image-container">
            <img src={goa} alt="Goa" />
            <p>Goa</p>
          </div>
          <div className="image-container">
            <img src={shimla} alt="Shimla" />
            <p>Shimla</p>
          </div>
          <div className="image-container">
            <img src={dehradun} alt="Dehradun" />
            <p>Dehradun</p>
          </div>
          <div className="image-container">
            <img src={assam} alt="" />
            <p>Assam</p>
          </div>
          <div className="image-container">
            <img src={mizoram} alt="" />
            <p>Mizoram</p>
          </div>
          <div className="image-container">
            <img src={kerala} alt="" />
            <p>Kerala</p>
          </div>
          <div className="image-container">
            <img src={tripura} alt="" />
            <p>Tripura</p>
          </div>
        </div>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item" onClick={() => handleNavigation('/')}>Home</li>
            <li className="nav-item" onClick={() => handleNavigation('/pricing')}>Pricing</li>
            <li className="nav-item" onClick={() => handleNavigation('/reviews')}>Reviews</li>
            <button onClick={handleRentingClick} className="renting-btn">
          Start Renting
        </button>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";

import ContactUs from "./ContactUs";
export default function AllServices({setProgress}) {
  const handleScroll=()=>{
    window.scroll({top:0,behavior:'smooth'})
    
    

}
  setProgress(40)
  return (
    <div id="all-services">
      <h1>Know More About Our Garage Door Services!</h1>
      <div id="cards">
        <div className="card" id="res">
          <div id="res-img" className='card-img-height'></div>
          <h3>Looking for Garage Door Spring Repair?</h3>
          <p>
          Contact the Pros at CHS Garage Repair for your Spring Repair Service
          </p>
          <p className='link'>
            <Link onClick={handleScroll} to="/residential-service">Read More</Link>
          </p>
        </div>
        <div className="card" id="com">
          <div id="com-img" className='card-img-height'></div>
          <h3>Need a Garage Door Cable Replacement?</h3>
          <p>
          Contact the Pros at CHS Garage Repair for cable repair service
          </p>
          <p className='link'>
            <Link onClick={handleScroll} to="/commercial-service">Read More</Link>
          </p>
        </div>
        <div className="card" id="aut">
          <div id="aut-img" className='card-img-height'></div>
          <h3>Need a New Garage Door Installed?</h3>
          <p>
          Contact the Pros at CHS Garage Repair for your New Garage Door Installation
          </p>
          <p className='link'>
            <Link onClick={handleScroll} to="/automotive-service">Read More</Link>
          </p>
        </div>
        <div className="card" id="eme">
          <div id="eme-img" className='card-img-height'></div>
          <h3>Are you in an emergency?</h3>
          <p>
          Contact the Pros at CHS Garage Repair Garage Door Emergency Needs
          </p>
          <p className='link'>
            <Link onClick={handleScroll} to="/emergency-service">Read More</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

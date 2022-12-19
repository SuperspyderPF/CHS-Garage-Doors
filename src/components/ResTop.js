import React from "react";
import { Link } from "react-router-dom";

export default function ResTop() {
  return (
    <div id="res-top-card">
      <h1>NEED TO GET YOUR GARAGE DOOR FIXED IN SEATTLE?</h1>
      <br></br>
      
      <button className="btn trans2s"><Link className="remove_link_style" to="/contact">
             GET A FREE ONLINE QUOTE
            </Link></button>
      <div className="center">
        <div id="res-top-img"></div>
      </div>
    </div>
  );
}

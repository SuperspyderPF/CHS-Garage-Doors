import React from "react";
import ResTop from "./ResTop";
import ContactUs from "./ContactUs";
import { Link } from "react-router-dom";



export default function Top({ setProgress }) {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  
  setProgress(20);
  let windowWidth = window.innerWidth;
  if (windowWidth>900) {
  return (
      <div id="top">
        <div id="top-card">
          <h1>NEED TO GET YOUR GARAGE DOOR FIXED IN SEATTLE?</h1>
          <p>
          
          </p>
          <button onClick={ContactUs} className="btn trans2s"><Link className="remove_link_style" to="/contact">
             GET A FREE ONLINE QUOTE
            </Link></button>
        </div>
        {() => setProgress(60)}
      </div>
  );
} else {
    return (
    <ResTop />
    )
}
}


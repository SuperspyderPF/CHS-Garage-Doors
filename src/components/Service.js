import React from "react";
import ContactUs from "./ContactUs";
import { Link } from "react-router-dom";
export default function Service({ h1, h2, p1, p2, service, imgSrc }) {
  
  return (
    <div id="service">
      <div id="commercial-locksmith-service">
        <div id="service-desc">
          <h1>{h1}</h1>
          <p>{p1} </p>
          <p className="link">
            <Link className="remove_link_style" to="/contact">
             Get A Quote Today
            </Link>
          </p>
        </div>
        <div id="service-cta">
          <img src={imgSrc} alt={`${service} service`} />
          <div id="copyright">
            <h1>{h2}</h1>
            <p>{p2}</p>
            <button onClick={ContactUs} className="btn trans2s"><Link className="remove_link_style" to="/contact">
             Contact Us
            </Link></button>
          </div>
        </div>
      </div>
    </div>
  );
}

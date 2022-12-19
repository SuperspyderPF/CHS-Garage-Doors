import React from "react";
import { Link } from "react-router-dom";
import ContactUs from "./ContactUs";

export default function Commercial({ setProgress }) {
  setProgress(50);
  let windowWidth = window.innerWidth;

  if (windowWidth > 900) {
    return (
      <>
        <div id="service-page">
          <div id="sp-top">
            <div id="sp-top-card">
              <h1>GARAGE DOOR CABLE REPLACEMENT SERVICES SEATTLE</h1>
              <p>
              Contact the Pros at CHS Garage Repair for cable repair service
              </p>
              <h2>(206) 245-5495         </h2>
              <p style={{ marginTop: "15px" }}>
                We are available 24/7 x 7 to serve the people of Seattle
              </p>
              <button onClick={ContactUs} className="btn trans2s"><Link className="remove_link_style" to="/contact">
             Contact Us
            </Link></button>
            </div>
          </div>
          <div id="sp-main">
            <article>
              <h1>
              ONLY THE BEST REPLACEMENT CABLES
              </h1>
              <p>
              Many garage door repair companies in their efforts to either increase profits or provide cheaper rates may often use low-quality aftermarket cables. The cables are cheap, and so they have a very short service life. Which means that they last maybe a year or so after which they need to be replaced again. So, it ends up costing home and business owners more in the long-term compared to using a high-quality cable like the ones we use.

We pride ourselves on using only the best, high-quality cables that money can buy. We always travel with the cables required and for your particular make and model of the garage door. So, we can perform immediate cables replacement where and when needed. Even if we deem the cables to be failing, we will replace them just so that you don’t have to call us again a few days or months later.
              </p>

              <h3>SHOULD YOU DO CABLES REPLACEMENT YOURSELF?</h3>
              <p>
              Many experts and we strongly advise people against doing their own cable repairs or replacement. However, we go one step further and ask that home or business owners don’t even go near their door if they suspect that the cables may have snapped. We know from experience that garage doors can collapse when the cables snap. Garage Doors weigh several hundred pounds. The average garage door can cause serious physical harm if it falls on someone. Also, trying to replace or inspect the cables can cause the door to become unstable and which causes it to fall.

Replacing garage door cables should only be undertaken by professionals such as ourselves. Even then we work as a team to minimize if not eliminate the risk of an error causing property or personal injury. We have over the years replaced hundreds if not thousands of garage door chains and cables. Plus, all professionals are duly certified which means that they can handle anything.
              </p>

             

              <h3>PROFESSIONAL CABLE AND GARAGE DOOR REPAIR ONE CALL AWAY</h3>
              <p>
              The best way to ensure that your garage door continues to provide you with years of service life is to only trust professionals for all jobs. Our cables replacement is just one call away!
              </p>
              <h3>Read about our other services:</h3>
              <ul id="article-links" className="remove_list_style">
                <li className="link article-link">
                  <Link className="remove_link_style" to="/automotive-service">
                  Garage Door Installation
                  </Link>
                </li>
                <li className="link article-link">
                  <Link className="remove_link_style" to="/residential-service">
                  Garage Door Spring Repair
                  </Link>
                </li>
                <li className="link article-link">
                  <Link className="remove_link_style" to="/commercial-service">
                  Cable Replacement
                  </Link>
                </li>
                <li className="link article-link">
                  <Link className="remove_link_style" to="/emergency-service">
                  Emergency Garage Repair
                  </Link>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div id="service-page">
          <div id="res-top-service-card">
            <h1>GARAGE DOOR CABLE REPLACEMENT SERVICES </h1>
            <p>
            Contact the Pros at CHS Garage Repair for cable repair service
            </p>
            <h2>(206) 245-5495</h2>
            <p style={{ marginTop: "15px" }}>
            We are available 24/7 x 7 to serve the people of Seattle
            </p>
            <button onClick={ContactUs} className="btn trans2s"><Link className="remove_link_style" to="/contact">
             Contact Us
            </Link></button>
            <div className="center">
              <div id="res-top-service-img"></div>
            </div>
          </div>
          <div id="sp-main">
            <article>
              <h1>
              <br></br>
                <br></br>
              ONLY THE BEST REPLACEMENT CABLES
              </h1>
              <p>
              Many garage door repair companies in their efforts to either increase profits or provide cheaper rates may often use low-quality aftermarket cables. The cables are cheap, and so they have a very short service life. Which means that they last maybe a year or so after which they need to be replaced again. So, it ends up costing home and business owners more in the long-term compared to using a high-quality cable like the ones we use. We pride ourselves on using only the best, high-quality cables that money can buy. We always travel with the cables required and for your particular make and model of the garage door. So, we can perform immediate cables replacement where and when needed. Even if we deem the cables to be failing, we will replace them just so that you don’t have to call us again a few days or months later.
              </p>

              <h3>SHOULD YOU DO CABLES REPLACEMENT YOURSELF?</h3>
              <p>
              Many experts and we strongly advise people against doing their own cable repairs or replacement. However, we go one step further and ask that home or business owners don’t even go near their door if they suspect that the cables may have snapped. We know from experience that garage doors can collapse when the cables snap. Garage Doors weigh several hundred pounds. The average garage door can cause serious physical harm if it falls on someone. Also, trying to replace or inspect the cables can cause the door to become unstable and which causes it to fall. Replacing garage door cables should only be undertaken by professionals such as ourselves. Even then we work as a team to minimize if not eliminate the risk of an error causing property or personal injury. We have over the years replaced hundreds if not thousands of garage door chains and cables. Plus, all professionals are duly certified which means that they can handle anything.
              </p>

             
              <h3>PROFESSIONAL CABLE AND GARAGE DOOR REPAIR ONE CALL AWAY</h3>
              <p>
              The best way to ensure that your garage door continues to provide you with years of service life is to only trust professionals for all jobs. Our cables replacement is just one call away!
              </p>
              <h3>Read about our other services:</h3>
              <ul id="article-links" className="remove_list_style">
                <li className="link article-link">
                  <Link className="remove_link_style" to="/automotive-service">
                  Garage Door Installation
                  </Link>
                </li>
                <li className="link article-link">
                  <Link className="remove_link_style" to="/residential-service">
                  Garage Door Spring Repair
                  </Link>
                </li>
                <li className="link article-link">
                  <Link className="remove_link_style" to="/commercial-service">
                  Cable Replacement
                  </Link>
                </li>
                <li className="link article-link">
                  <Link className="remove_link_style" to="/emergency-service">
                  Emergency Garage Repair
                  </Link>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </>
    );
  }
}

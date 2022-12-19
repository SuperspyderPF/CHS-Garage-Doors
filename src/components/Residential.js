import React from "react";
import { Link } from "react-router-dom";
import ContactUs from "./ContactUs";
export default function Residential({ setProgress }) {
  setProgress(50);
  let windowWidth = window.innerWidth;

  if (windowWidth > 900) {
    return (
      <>
        <div id="service-page">
          <div style={windowWidth > 700 ? {} : { display: "none" }} id="sp-top">
            <div id="sp-top-card">
              <h1>GARAGE DOOR SPRINGS</h1>
              <p>
              Contact the Pros at CHS Garage Repair for your Spring Repair Service
              </p>
              <h2>(206) 245-5495</h2>
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
              Professional Garage Door Spring Repair Service
              </h1>
              <p>
              Garage door springs are often considered to be their Achilles heel. That’s why experts like us recommend that home and business owners oil and grease the springs on a regular basis. If anything, it should be part of your scheduled garage door maintenance. That said when the spring fails, and at times it will fail despite maintenance, then its time to call us! At CHS Garage Repair, we specialize in fixing garage door springs regardless of make and model.

Our team of specialists are just one call away!
              </p>

              <h3>WE SPECIALIZE IN GARAGE DOOR SPRINGS REPAIR</h3>
              <p>
              Many garage door repair companies downright refuse to replace often difficult garage door springs. Most of them are unable to replace the springs either because they don’t have the expertise or getting to the springs is difficult. However, because it is such a common issue we tend to repair all types of broken and rusty springs.

Our Garage Door Springs Repair Lynwood & Everett, Seattle, Washington ensures that no spring can’t be replaced. That said our spring replacement and repair services extend to other cities of Washington including Kirkland, Woodinville, Issaquah, Edmonds, Mill Creek, and Bellevue. Our professionals will be at your location and ready to fix any problem ASAP. In most cases, your garage door should be up and running, as good as new in no time.
              </p>

              <h3>QUALITY SPRING REPLACEMENT</h3>
              <p>
              We have heard from many people that their springs fail just a few months after they had it replaced. The fact is that there is such a thing as low quality, cheap springs used by many garage door repair companies to save money in a bid to offer more affordable services. However, in doing so, they end up costing homeowners twice the amount

Our Garage Door Springs Repair service ensures that all torsion springs used are of the best quality. The brands of springs we use have proven to be durable and of high quality over the years. That’s why we have rarely if ever been called by a client complaining that the spring failed.
              </p>

              <h3>DON’T DO IT YOURSELF</h3>
              <p>
              Sure! It can be tempting to try and replace the garage door springs on your own. Various videos and text tutorials online make the process look easy so as long as you have the right tools. In reality, though it is dangerous. It is so dangerous that none of our professional’s attempt garage door spring replacement on their own. They work as a team to ensure that all bases are covered when replacing the springs.

Garage door springs are under a tremendous amount of pressure. In some models, they are bearing several hundred pounds of weight. So, the slightest mistake can spell disaster.
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
          <h1>GARAGE DOOR SPRINGS</h1>
          <p>
          Contact the Pros at CHS Garage Repair for your Spring Repair Service
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
            Professional Garage Door Spring Repair Service
            </h1>
            <p>
            Garage door springs are often considered to be their Achilles heel. That’s why experts like us recommend that home and business owners oil and grease the springs on a regular basis. If anything, it should be part of your scheduled garage door maintenance. That said when the spring fails, and at times it will fail despite maintenance, then its time to call us! At CHS Garage Repair, we specialize in fixing garage door springs regardless of make and model. Our team of specialists are just one call away!
            </p>

            <h3>WE SPECIALIZE IN GARAGE DOOR SPRINGS REPAIR</h3>
            <p>
            Many garage door repair companies downright refuse to replace often difficult garage door springs. Most of them are unable to replace the springs either because they don’t have the expertise or getting to the springs is difficult. However, because it is such a common issue we tend to repair all types of broken and rusty springs. Our Garage Door Springs Repair Lynwood & Everett, Seattle, Washington ensures that no spring can’t be replaced. That said our spring replacement and repair services extend to other cities of Washington including Kirkland, Woodinville, Issaquah, Edmonds, Mill Creek, and Bellevue. Our professionals will be at your location and ready to fix any problem ASAP. In most cases, your garage door should be up and running, as good as new in no time.
            </p>

            <h3>QUALITY SPRING REPLACEMENT</h3>
            <p>
            We have heard from many people that their springs fail just a few months after they had it replaced. The fact is that there is such a thing as low quality, cheap springs used by many garage door repair companies to save money in a bid to offer more affordable services. However, in doing so, they end up costing homeowners twice the amount Our Garage Door Springs Repair service ensures that all torsion springs used are of the best quality. The brands of springs we use have proven to be durable and of high quality over the years. That’s why we have rarely if ever been called by a client complaining that the spring failed.
            </p>

            <h3>DON’T DO IT YOURSELF</h3>
            <p>
            Sure! It can be tempting to try and replace the garage door springs on your own. Various videos and text tutorials online make the process look easy so as long as you have the right tools. In reality, though it is dangerous. It is so dangerous that none of our professional’s attempt garage door spring replacement on their own. They work as a team to ensure that all bases are covered when replacing the springs. Garage door springs are under a tremendous amount of pressure. In some models, they are bearing several hundred pounds of weight. So, the slightest mistake can spell disaster.
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
    )
  }
}

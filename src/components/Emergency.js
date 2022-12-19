import React from "react";
import { Link } from "react-router-dom";
import ContactUs from "./ContactUs";
export default function Emergency({ setProgress }) {
  setProgress(50);
  let windowWidth = window.innerWidth;

  if (windowWidth > 900) {
    return (
      <>
        <div id="service-page">
          <div id="sp-top">
            <div id="sp-top-card">
              <h1>GARAGE DOOR EMERGENCY REPAIR SERVICE</h1>
              <p>
              Contact the Pros at CHS Garage Repair Garage Door Emergency Needs
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
              Quick Emergency Service

              </h1>
              <p>
              As professionals who have been providing top quality emergency services, we know that things can happen when you least expect it to. In the garage door repair industry, we have responded to calls from clients who were stuck with their garage door in the open position in the middle of the night. At times fixing the problem may be easier but other times it can be difficult. Either way, it is essential to call professionals like us who come fully prepared to fix any and all issues right away.
              </p>

              <h3>EMERGENCY GARAGE DOOR REPAIR A PHONE CALL AWAY</h3>
              <p>
              We are aware of the fact that there are many competing businesses offering similar emergency repair services. However, what sets our service apart from all the competitors is that we never waste your time. Our team is on standby 24/7 to answer your call. We can arrive in most cities within just an hour, and our team comes fully prepared to fix all issues. Not only that but we make sure that the issue is fixed permanently that way you don’t have to call us or another company the following morning or day to fix the same problem.

Our garage door repair shop services many cities including Kirkland, Woodinville, Issaquah, Lynwood, Edmonds, Mill Creek, Everett, and Bellevue. If you reside in any one of these cities, we will respond to your call for an emergency service right away.
              </p>

              <h3>PROFESSIONALS AT A REASONABLE PRICE</h3>
              <p>
              We are aware of the fact that most professionals in the garage door repair industry may overcharge people for emergency services. However, we charge our clients at a reasonable rate. The rates we charge are mainly for responding to their call ASAP, in addition to the fact that parts and other items may need to be replaced. We provide clients with a complete invoice with a breakdown of all the charges, so there is no ambiguity whatsoever.
              </p>

              <h3>WE DON’T WASTE YOUR TIME</h3>
              <p>
              One of the reasons why many people opt to call us over other services is because we will never waste your time. Our team comes fully prepared to tackle any issue. There is no problem big or small that our team can’t fix even if they are working in the middle of the night. Additionally, unlike another service, our company sends a team to your doorstep. Having multiple people working as a team speeds up the process of finding and fixing faults with the garage door which may prevent it from functioning normally.
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
          <h1>GARAGE DOOR EMERGENCY REPAIR SERVICE</h1>
          <p>
          Contact the Pros at CHS Garage Repair Garage Door Emergency Needs
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
            Quick Emergency Service
            </h1>
            <p>
            As professionals who have been providing top quality emergency services, we know that things can happen when you least expect it to. In the garage door repair industry, we have responded to calls from clients who were stuck with their garage door in the open position in the middle of the night. At times fixing the problem may be easier but other times it can be difficult. Either way, it is essential to call professionals like us who come fully prepared to fix any and all issues right away.
            </p>

            <h3>EMERGENCY GARAGE DOOR REPAIR A PHONE CALL AWAY</h3>
            <p>
            We are aware of the fact that there are many competing businesses offering similar emergency repair services. However, what sets our service apart from all the competitors is that we never waste your time. Our team is on standby 24/7 to answer your call. We can arrive in most cities within just an hour, and our team comes fully prepared to fix all issues. Not only that but we make sure that the issue is fixed permanently that way you don’t have to call us or another company the following morning or day to fix the same problem. Our garage door repair shop services many cities including Kirkland, Woodinville, Issaquah, Lynwood, Edmonds, Mill Creek, Everett, and Bellevue. If you reside in any one of these cities, we will respond to your call for an emergency service right away.
            </p>

            <h3>PROFESSIONALS AT A REASONABLE PRICE</h3>
            <p>
            We are aware of the fact that most professionals in the garage door repair industry may overcharge people for emergency services. However, we charge our clients at a reasonable rate. The rates we charge are mainly for responding to their call ASAP, in addition to the fact that parts and other items may need to be replaced. We provide clients with a complete invoice with a breakdown of all the charges, so there is no ambiguity whatsoever.
            </p>

            <h3>WE DON’T WASTE YOUR TIME</h3>
            <p>
            One of the reasons why many people opt to call us over other services is because we will never waste your time. Our team comes fully prepared to tackle any issue. There is no problem big or small that our team can’t fix even if they are working in the middle of the night. Additionally, unlike another service, our company sends a team to your doorstep. Having multiple people working as a team speeds up the process of finding and fixing faults with the garage door which may prevent it from functioning normally.
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

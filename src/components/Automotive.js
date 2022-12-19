import React from "react";
import { Link } from "react-router-dom";
import ContactUs from "./ContactUs";
export default function Automotive({setProgress}) {
  let windowWidth = window.innerWidth;

  if (windowWidth>900) {
  return (
    <>
      <div id="service-page">
        <div id="sp-top">
          <div id="sp-top-card">
            <h1>GARAGE DOOR INSTALLATION</h1>
            <p>
            Contact the Pros at CHS Garage Repair for your New Garage Door Installation
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
        {()=>setProgress(50)}
        <div id="sp-main">
          <article>
            <h1>
            Garage Door Installation Service
            </h1>
            <p>
            The number of garage door installation services have skyrocketed over the years. However, many home and business owners continue to complain that they are not satisfied with most services. The reason is arguably unknown, but according to industry experts, it is because most services are new. Not having experience installing a garage door leads to incorrect installation which further leads to the door breaking down.

Whenever we come across instances of a relatively new garage door breaking down it is often always associated with incorrect installation. That’s why it is so important to only hire professional and seasoned businesses to install a new garage door. Our garage installation in Shoreline, Bothell, and Redmond ensure that the door is installed exactly the way it should and does not void its warranty.
            </p>

            <h3>WHY CHOOSE OUR GARAGE DOOR INSTALLATION SERVICE?</h3>
            <p>
            The no. 1 reason why we are the garage installation service of choice in Shoreline, Bothell, and Redmond is that all our clients are highly satisfied. We have for many years served over 100,000 clients and counting. Our professionals don’t just have years of experience but certifications. All professionals undergo refresher training to ensure that they can install the latest, high-tech garage doors. That’s why there is no garage door we can’t install or repair.

At CHS Garage Repair we provide free estimates and even same day service. We are committed to working closely with clients to come up with the best possible solution within their budget. That said we provide clients with all the information they require including the pros and cons of each decision so that they can make the right choice. Furthermore, our service is transparent with no hidden costs, charges or fees. It is for this reason that we are the most trusted service across Kirkland, Woodinville, Issaquah, Lynwood, Edmonds, Mill Creek, Everett, and Bellevue.
            </p>

            <h3>WORKMANSHIP WITH A WARRANTY</h3>
            <p>
            Unlike other garage door installation services, ours comes backed with a warranty. Not only do we back the parts used with a warranty but also guarantee that our work is flawless. We have never been called back to fix a problem with the installation. However, if we are, we will fix the issue for free. In addition, our 24-hour garage door service is always on standby if you need to call us right away.

 

Our warranty is made possible by the fact that we are confident in the quality provided by our professionals. That said we understand that everyone makes mistakes and so the warranty gives our clients the peace of mind that if mistakes were made, those would be fixed without further costs.
            </p>

            <h3>CALL US FOR INSTALLATION TODAY</h3>
            <p>
            Whether you are buying a new garage door or require us to install an old door which may be lying around the property we are the professionals for the job. Call us today for professional garage door installation or to find out more about how we ensure top quality installation of all kinds of garage doors.
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
  <div id="service-page">
        <div id="res-top-service-card">
          <h1>GARAGE DOOR INSTALLATION</h1>
          <p>
          Contact the Pros at CHS Garage Repair for your New Garage Door Installation
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
        {()=>setProgress(50)}
        <div id="sp-main">
          <article>
            <h1>
            Garage Door Installation Service
            </h1>
            <p>
            The number of garage door installation services have skyrocketed over the years. However, many home and business owners continue to complain that they are not satisfied with most services. The reason is arguably unknown, but according to industry experts, it is because most services are new. Not having experience installing a garage door leads to incorrect installation which further leads to the door breaking down. Whenever we come across instances of a relatively new garage door breaking down it is often always associated with incorrect installation. That’s why it is so important to only hire professional and seasoned businesses to install a new garage door. Our garage installation in Shoreline, Bothell, and Redmond ensure that the door is installed exactly the way it should and does not void its warranty.
            </p>

            <h3>WHY CHOOSE OUR GARAGE DOOR INSTALLATION SERVICE?</h3>
            <p>
            The no. 1 reason why we are the garage installation service of choice in Shoreline, Bothell, and Redmond is that all our clients are highly satisfied. We have for many years served over 100,000 clients and counting. Our professionals don’t just have years of experience but certifications. All professionals undergo refresher training to ensure that they can install the latest, high-tech garage doors. That’s why there is no garage door we can’t install or repair. At CHS Garage Repair we provide free estimates and even same day service. We are committed to working closely with clients to come up with the best possible solution within their budget. That said we provide clients with all the information they require including the pros and cons of each decision so that they can make the right choice. Furthermore, our service is transparent with no hidden costs, charges or fees. It is for this reason that we are the most trusted service across Kirkland, Woodinville, Issaquah, Lynwood, Edmonds, Mill Creek, Everett, and Bellevue.
            </p>

            <h3>WORKMANSHIP WITH A WARRANTY</h3>
            <p>
            Unlike other garage door installation services, ours comes backed with a warranty. Not only do we back the parts used with a warranty but also guarantee that our work is flawless. We have never been called back to fix a problem with the installation. However, if we are, we will fix the issue for free. In addition, our 24-hour garage door service is always on standby if you need to call us right away. Our warranty is made possible by the fact that we are confident in the quality provided by our professionals. That said we understand that everyone makes mistakes and so the warranty gives our clients the peace of mind that if mistakes were made, those would be fixed without further costs.
            </p>

            <h3>CALL US FOR INSTALLATION TODAY</h3>
            <p>
            Whether you are buying a new garage door or require us to install an old door which may be lying around the property we are the professionals for the job. Call us today for professional garage door installation or to find out more about how we ensure top quality installation of all kinds of garage doors.
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
  )
}
}

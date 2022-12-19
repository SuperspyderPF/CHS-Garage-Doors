import React from "react";
import { Link } from "react-router-dom";

import ContactUs from "./ContactUs";
export default function AboutUs({ setProgress }) {
  setProgress(50);
  return (
    <div className="center">
      <div id="about">
        <div id="about-top">
          <div id="top-main">
            <div id="top-content">
              <p id="stylish-p"></p>
              <h1>ABOUT US</h1>
              <p>
              Contact the Pros at CHS Garage Repair for your Garage Door Service
              </p>
            </div>
          </div>
        </div>
        <div id="about-main">
          <article id="about-article" style={{ width: "100%" }}>
            <h1>CHS Garage Repair is an entirely family owned and operated garage door repair company.</h1>
             We have been around for over five years, and have a reputation for offering an array of garage door repair services. We also pride ourselves on having a growing team of highly dedicated and professional garage door repair professionals who are like family.

Our mission is to deliver the highest quality, most professional and reasonably priced garage door repair service. We never compromise on the quality of the work we do or the parts we use for that matter. Which is why our company is often the one chosen by many home and business owners who want to hire a service which they can trust.

We have a reputation for not only providing a reliable garage door repair and installation service but also one that backs everything with a warranty. Our credibility and reputation are clearly evident from the vast number of positive reviews and comments we receive from clients in cities like Kirkland, Woodinville, Issaquah, Lynwood, Edmonds, Mill Creek, Everett, and Bellevue.
          </article>
          
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import Service from "./Service";

// IMG IMPORTS --------------------------------------
import commercial from "../images/commercial2.jpg";
import emergency from "../images/emergency.jpg";
import residential from "../images/residential.jpg";
import automotive from "../images/automotive.jpg";
import ResService from "./ResService";
// --------------------------------------------------

export default function Tabs({ tab, setTab }) {
  const [h1, setH1] = useState("Cable Replacement Services");
  const [p1, setP1] = useState(
    "Garage door cable replacement is one of the most important of repair jobs. The cables of even the best garage doors have a span of around a few years. That’s why we often categorize cable replacement as part of maintaining a garage door. It is also one of the first things we inspect when called for garage door maintenance. However, those who are not very punctual with their garage door maintenance may often need to call a professional when the cable breaks. In the event of a break, the only fix is to replace the cables."
  );
  const [h2, setH2] = useState("Get our Cable Replacement Services Now");
  const [p2, setP2] = useState(
    
  );
  const [service, setService] = useState("Commercial");
  const [imgSrc, setImgSrc] = useState(commercial);
  let windowWidth = window.innerWidth;

  function commercialClick() {
    setH1("Cable Replacement Services");
    setP1(
      "Garage door springs are often considered to be their Achilles heel. That’s why experts like us recommend that home and business owners oil and grease the springs on a regular basis. If anything, it should be part of your scheduled garage door maintenance. That said when the spring fails, and at times it will fail despite maintenance, then its time to call us! At CHS Garage Repair, we specialize in fixing garage door springs regardless of make and model. Our team of specialists are just one call away!"
    );
    setH2("Get our Cable Replacement Services Now");
    setP2(
      
    );
    setService("Commercial");
    setTab(1);
    setImgSrc(commercial);
  }
  function residentialClick() {
    setH1("Spring Repair Services");
    setP1(
      "Garage door springs are often considered to be their Achilles heel. That’s why experts like us recommend that home and business owners oil and grease the springs on a regular basis. If anything, it should be part of your scheduled garage door maintenance. That said when the spring fails, and at times it will fail despite maintenance, then its time to call us! At CHS Garage Repair, we specialize in fixing garage door springs regardless of make and model. Our team of specialists are just one call away!"
    );
    setH2("Get our Spring Repair Services Now");
    setP2(
      
    );
    setService("Residential");
    setTab(2);
    setImgSrc(residential);
  }
  function automotiveClick() {
    setH1("Door Installation Services");
    setP1(
      "The number of garage door installation services have skyrocketed over the years. However, many home and business owners continue to complain that they are not satisfied with most services. The reason is arguably unknown, but according to industry experts, it is because most services are new. Not having experience installing a garage door leads to incorrect installation which further leads to the door breaking down. Whenever we come across instances of a relatively new garage door breaking down it is often always associated with incorrect installation. That’s why it is so important to only hire professional and seasoned businesses to install a new garage door. Our garage installation in Shoreline, Bothell, and Redmond ensure that the door is installed exactly the way it should and does not void its warranty."
    );
    setH2("Get our Door Installation Services Now");
    setP2(
      ""
    );
    setService("Automotive");
    setTab(3);
    setImgSrc(automotive);
  }
  function emergencyClick() {
    setH1("Emergency Garage Repair Services");
    setP1(
      "As professionals who have been providing top quality emergency services, we know that things can happen when you least expect it to. In the garage door repair industry, we have responded to calls from clients who were stuck with their garage door in the open position in the middle of the night. At times fixing the problem may be easier but other times it can be difficult. Either way, it is essential to call professionals like us who come fully prepared to fix any and all issues right away."
    );
    setH2("Get our Emergency Garage Repair Services Now");
    setP2(
      
    );
    setService("Emergency");
    setTab(4);
    setImgSrc(emergency);
  }
  if (windowWidth > 900) {
    return (
      <div className="container">
        <div id="tabs">
          <ul className="remove_list_style">
            <li
              onClick={() => commercialClick()}
              className={tab === 1 ? "active-tab" : "non-active-tab"}
            >
              Cable Replacement
            </li>
            <li
              onClick={() => residentialClick()}
              className={tab === 2 ? "active-tab" : "non-active-tab"}
            >
               Spring Repair
            </li>
            <li
              onClick={() => automotiveClick()}
              className={tab === 3 ? "active-tab" : "non-active-tab"}
            >
              Door Installation
            </li>
            <li
              onClick={() => emergencyClick()}
              className={tab === 4 ? "active-tab" : "non-active-tab"}
            >
              Emergency Repair
            </li>
          </ul>
        </div>
        <Service
          h1={h1}
          h2={h2}
          p1={p1}
          p2={p2}
          tab={tab}
          service={service}
          imgSrc={imgSrc}
        />
      </div>
    );
  } else {
    return (
      <ResService
        
        tab={tab}
        service={service}
      />
    );
  }
}

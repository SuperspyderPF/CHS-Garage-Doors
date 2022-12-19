import React, { useState } from "react";
import ContactUs from "./ContactUs";
import { Link } from "react-router-dom";

// IMG IMPORTS -------------------------------
import comImg from '../images/commercial.jpg'
import resImg from '../images/residential.jpg'
import autImg from '../images/automotive.jpg'
import emeImg from '../images/emergency.jpg'
// -------------------------------------------

export default function ResService({ h2, p1, p2, service}) {
  let comCol = document.getElementById("com-col");
  let resCol = document.getElementById('res-col');
  let autCol = document.getElementById('aut-col');
  let emeCol = document.getElementById('eme-col');
  
  const [showComContent, setShowComContent] = useState(false);
  const [comContent, setComContent] = useState(<></>);

  const [showAutContent, setShowAutContent] = useState(false);
  const [autContent, setAutContent] = useState(<></>);

  const [showResContent, setShowResContent] = useState(false);
  const [resContent, setResContent] = useState(<></>);

  const [showEmeContent, setShowEmeContent] = useState(false);
  const [emeContent, setEmeContent] = useState(<></>);

  const commercialClick = () => {
    if (showComContent === false) {
      comCol.classList.replace("non-active-col", "active-col");
      setShowComContent(true);
      setComContent(
        <div className="trans2s li-content">
          <h2>Cable Replacement Services</h2>
          <p>{p1}</p>
          <p className="link">
          <Link className="remove_link_style" to="/commercial-service">
             Read About Our Cable Replacement Services
            </Link>
          </p>
          <img src={comImg} alt={`${service} service`} />
          <h2>{h2}</h2>
          <p>{p2}</p>
          <button onClick={ContactUs} className="btn trans2s"><Link className="remove_link_style" to="/contact">
             Contact Us
            </Link></button>
        </div>
      );
    } else {
      setShowComContent(false);
      comCol.classList.replace("active-col", "non-active-col");
      setComContent(<></>);
    }
  };

  const residentialClick = () => {
  if (showResContent === false) {
    resCol.classList.replace("non-active-col", "active-col");
    setShowResContent(true);
      setResContent(
        <div className="trans2s li-content">
          <h2>Garage Door Spring Services</h2>
          <p>{p1}</p>
          <p className="link">
          <Link className="remove_link_style" to="/commercial-service">
             Read About Our Garage Door Spring Services
            </Link>
          </p>
          <img src={resImg} alt={`${service} service`} />
          <h2>{h2}</h2>
          <p>{p2}</p>
          <button onClick={ContactUs} className="btn trans2s"><Link className="remove_link_style" to="/contact">
             Contact Us
            </Link></button>
        </div>
      );
    } else {
      setShowResContent(false);
      resCol.classList.replace("active-col", "non-active-col");
      setResContent(<></>);
    }
  };

  const automotiveClick = () => {
    if (showAutContent === false) {
      autCol.classList.replace("non-active-col", "active-col");
      setShowAutContent(true);
      setAutContent(
        <div className="trans2s li-content">
          <h2>Garage Door Installation Services</h2>
          <p>{p1}</p>
          <p className="link">
          <Link className="remove_link_style" to="/commercial-service">
             Read About Our Garage Door Installation Services
            </Link>
          </p>
          <img src={autImg} alt={`${service} service`} />
          <h2>{h2}</h2>
          <p>{p2}</p>
          <button onClick={ContactUs} className="btn trans2s"><Link className="remove_link_style" to="/contact">
             Contact Us
            </Link></button>
        </div>
      );
    } else {
      setShowAutContent(false);
      autCol.classList.replace("active-col", "non-active-col");
      setAutContent(<></>);
    }
  };

  const emergencyClick = () => {
    if (showEmeContent === false) {
      emeCol.classList.replace("non-active-col", "active-col");
      setShowEmeContent(true);
      setEmeContent(
        <div className="trans2s li-content">
          <h2>Emergency Garage Repair Services</h2>
          <p>{p1}</p>
          <p className="link">
          <Link className="remove_link_style" to="/commercial-service">Read About Our Emergency Garage Repair Services</Link>
             
            
          </p>
          <img src={emeImg} alt={`${service} service`} />
          <h2>{h2}</h2>
          <p>{p2}</p>
          <button onClick={ContactUs} className="btn trans2s"><Link className="remove_link_style" to="/contact">
             Contact Us
            </Link></button>
        </div>
      );
    } else {
      setShowEmeContent(false);
      emeCol.classList.replace("active-col", "non-active-col");
      setEmeContent(<></>);
    }
  };

  return (
    <div id="res-service-table">
      <ul className="remove_list_style">
        <li style={showComContent?{}:{borderTop: '1px solid var(--forth-color)'}} id="com-col" className="trans2s non-active-col">
          <div onClick={() => commercialClick()} className="li-default">
          Cable Replacement Services<i className={showComContent?"fas fa-chevron-up":"fas fa-chevron-down"}></i>
          </div>
          {comContent}
        </li>
        <li id="res-col" className="trans2s non-active-col">
          <div onClick={() => residentialClick()} className="li-default">
            Garage Door Spring Services<i className={showResContent?"fas fa-chevron-up":"fas fa-chevron-down"}></i>
          </div>
          {resContent}
        </li>
        <li id="aut-col" className="trans2s non-active-col">
          <div onClick={() => automotiveClick()} className="li-default">
            Garage Door Installation Services<i className={showAutContent?"fas fa-chevron-up":"fas fa-chevron-down"}></i>
          </div>
          {autContent}
        </li>
        <li id="eme-col" className="trans2s non-active-col">
          <div onClick={() => emergencyClick()} className="li-default">
            Emergency Garage Services<i className={showEmeContent?"fas fa-chevron-up":"fas fa-chevron-down"}></i>
          </div>
          {emeContent}
        </li>
      </ul>
    </div>
  );
}

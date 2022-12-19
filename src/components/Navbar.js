import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import {useRef} from "react"
export default function Navbar({ setProgress }) {
  const catMenu = useRef(null)
  const [openSlide, setopenSlide] = useState(""); 
  const [dropdown, setDropdown] = useState(false);
  const [serviceUl, setServiceUl] = useState(<></>);
  const [arrow, setArrow] = useState("fas fa-chevron-down");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const hide = () => menuClicked(false);
  const show = () => setIsOpen(true);
  setProgress(10);
  
  const closeOpenMenus = ()=>{
    
    setDropdown(false);
      setServiceUl(<></>);
      setArrow("fas fa-chevron-down");
}

  const handleScroll=()=>{
    window.scroll({top:0,behavior:'smooth'})
    
    

}
const [showNav, setShowNav] = useState(true)

  let button = document.getElementById("button");
  let navbarMenu = document.getElementById("navbar-menu");
  function menuClicked() {
    if (menuOpen === false) {
      button.classList.add("open");
      setMenuOpen(true);
      
      navbarMenu.style.transform = "translate(30%)";
    } else {
      button.classList.remove("open");
      setMenuOpen(false);
      navbarMenu.style.transform = "translate(100%)";
    }
  }

  function showDropdown() {
    
    if (dropdown === false) {
      setDropdown(true);
      setArrow("fas fa-chevron-up");
      setServiceUl(
        <ul id="service-ul" className="remove_list_style">
          <li style={{ marginTop: "50px" }}>
            
            <Link onClick={closeOpenMenus}   className="remove_link_style" to="/residential-service"  >
              Garage Door Spring Repair
            </Link>
          </li>
          <li>
            <Link  onClick={closeOpenMenus}
            className="remove_link_style trans2s"
            href="#"  to="/automotive-service">
            Garage Door Installation
            </Link>
          </li>
          <li>
            <Link onClick={closeOpenMenus} className="remove_link_style" to="/commercial-service">
            Cable Replacement Services
            </Link>
          </li>
          <li>
            <Link onClick={closeOpenMenus} className="remove_link_style" to="/emergency-service">
              Emergency Garage Repair
            </Link>
          </li>
        </ul>
      );
    } else {
      setDropdown(false);
      setServiceUl(<></>);
      setArrow("fas fa-chevron-down");
    }
  }
  return (
    <nav id="navbar">
      <Link className="remove_link_style" to="/">
        
        <img src={logo} width="300" 
     height="100"
     align="center"
     class="center"

     ></img>
      </Link>
      <ul id="nav-links" className="remove_list_style">
        <li className="padding-50">
          <Link className="remove_link_style trans2s" to="/">
            Home
          </Link>
        </li>
        <li className="padding-50">
          <a
            onClick={() => showDropdown()}
            className="remove_link_style trans2s"
            href="#"
          >
            Services<i style={{ marginTop: "auto" }} className={arrow}></i>
          </a>
          {serviceUl}
        </li>
        <li className="padding-50">
          <Link className="remove_link_style trans2s" to="/about">
            About Us
          </Link>
        </li>
        <li className="padding-50">
          <Link className="remove_link_style trans2s" to="/contact">
            Contact Us
          </Link>
        </li>
      </ul>
      <div style={window.innerWidth>900?{display: 'none'}:{display:'inline-block'}} id="responsive-navbar">
        <div onClick={() => menuClicked()} id="button">
          <div id="bars"></div>
        </div>
        <div id="navbar-menu">
          <ul className="remove_list_style">
            <li>
              <Link onClick={() => menuClicked()} className="remove_link_style" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={() => menuClicked()} className="remove_link_style" to="/contact">
                Contact Us
              </Link>
            </li>
            <li>
              <Link onClick={() => menuClicked()} className="remove_link_style" to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link onClick={() => menuClicked()} className="remove_link_style" to="/automotive-service">
                Door Installation
              </Link>
            </li>
            <li>
              <Link onClick={() => menuClicked()} className="remove_link_style" to="/residential-service">
              Spring Repair
              </Link>
            </li>
            <li>
              <Link onClick={() => menuClicked()} className="remove_link_style" to="/commercial-service">
                Cable Replacement
              </Link>
            </li>
            <li>
              <Link onClick={() => menuClicked()} className="remove_link_style" to="/emergency-service">
              Emergency Repair
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

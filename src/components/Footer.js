import React from 'react'
import End from './End'
import { Link } from "react-router-dom";
const handleScroll=()=>{
    window.scroll({top:0,behavior:'smooth'})
    
    

}
export default function Footer({setProgress}) {
    
    setProgress(100)
    return (
        <>
        <footer id="footer">
            <div id="footer-top">
              
              <div id="about-cards">
            <div className="about-card">
              <div className="card"><i class="fa-solid fa-garage-open"></i></div>
              <div className="about-card-content">
                <h2>Address</h2>
                <p>
                12544 15th Ave NE #309, Seattle, WA 98125
                </p>
                
              </div>
            </div>
            <div className="about-card">
              <div className="card"><i class="fa-sharp fa-solid fa-garage-open"></i></div>
              <div className="about-card-content">
                <h2>Hours</h2>
                <p>
                Sunday to Friday 8:00 AM – 8:00 PM
                </p>
                
              </div>
            </div>
           
            <div className="about-card">
              <div className="card"></div>
              <div className="about-card-content">
                <h2>Phone</h2>
                <p>
                (206) 245-5495
                </p>
                
              </div>
            </div>
          </div>
              


            </div>
            <div id="footer-bottom">
                <div id="socials">
                    <div style={{marginLeft: '5px'}}>CONNECT WITH US</div>
                    <div id="icons">
                        <a target='_blank' rel="noreferrer" className='remove_link_style' href="https://facebook.com"><div id='fb' className="icon"><i className="fab fa-facebook-f"></i></div></a>
                        <a target='_blank' rel="noreferrer" className='remove_link_style' href="https://youtube.com"><div id='yt' className="icon"><i className="fab fa-youtube"></i></div></a>
                        <a target='_blank' rel="noreferrer" className='remove_link_style' href="https://twitter.com"><div id='tw' className="icon"><i className="fab fa-twitter"></i></div></a>
                        <a target='_blank' rel="noreferrer" className='remove_link_style' href="https://linkedin.com"><div id='li' className="icon"><i className="fab fa-linkedin-in"></i></div></a>
                        <a target='_blank' rel="noreferrer" className='remove_link_style' href="https://instagram.com"><div id='in' className="icon"><i className="fab fa-instagram"></i></div></a>
                    </div>
                </div>
                <hr />
                <div id="links">
                    <ul className='remove_list_style'>
                        <li className='ul-heading'><strong>Go To</strong></li>
                        <li><Link className='remove_link_style' to="/">Home</Link></li>
                        <li><Link className='remove_link_style' to="/contact">Contact Us</Link></li>
                        <li><Link className='remove_link_style' to="/about">About Us</Link></li>
                        <li><Link className='remove_link_style' to="/automotive-service">Our Services</Link></li>
                    </ul>
                    <ul className='remove_list_style'>
                        <li className='ul-heading'><strong>Contact Us</strong></li>
                        <li><a target='_blank' rel="noreferrer" className='remove_link_style' href="ontact@chsgaragerepair.com">Email</a></li>
                        <li><a target='_blank' rel="noreferrer" className='remove_link_style' href="tel:(206) 245-5495">Call Us</a></li>
                        <li><a target='_blank' rel="noreferrer" className='remove_link_style' href="https://twitter.com/">Twitter</a></li>
                        <li><a target='_blank' rel="noreferrer" className='remove_link_style' href="https://facebook.com/">Facebook</a></li>
                    </ul>
                    <ul id='extra-ul' className='remove_list_style'>
                        <li className='ul-heading'><strong>What We Offer</strong></li>
                        <li><Link onClick={handleScroll} className='remove_link_style' to="/residential-service">Garage Door Spring Repair</Link></li>
                        <li><Link onClick={handleScroll} className='remove_link_style' to="/automotive-service">Garage Door Installation</Link></li>
                        <li><Link onClick={handleScroll} className='remove_link_style' to="/commercial-service">Cable Replacement</Link></li>
                        <li><Link onClick={handleScroll} className='remove_link_style' onClick={handleScroll} to="/emergency-service">Emergency Garage Repair</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
        <End />
        </>
    )
}

import React from 'react'
import { Link } from "react-router-dom";
import ContactUs from "./ContactUs";
export default function Cta({setProgress}) {
    setProgress(60)
    return (
        <div id="cta-section">
            <div id="cta-content">
                <h1>We Are Available 24/7 To Help You!</h1>
                <p>We are in this business from past 10 Years. Our team of proffesionals is always ready to help people in Seattle</p>
                <button onClick={ContactUs} className="btn trans2s"><Link className="remove_link_style" to="/contact">
             Contact Us
            </Link></button>
            </div>
        </div>
    )
}

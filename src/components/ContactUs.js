import React from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export default function ContactUs({setProgress}) {
    setProgress(50)
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ehfpf3x', 'template_19f0rf1', form.current, 'XvipyMDsOLmdt-WVM')
          .then((result) => {
              alert("Success")
          }, (error) => {
              alert("Error! Please Check Form")
          });
      };
    return (
        <div id="contactus">
            <div id="contact-main">
                <div id="contact-info">
                    <h2>Just One Step To Go!</h2>
                    <form ref={form} onSubmit={sendEmail}>
                        <div id="name-input">
                        <input
                type="name"
                name="name"
                class="form-control"
                id="name"
                placeholder="First Name"
              />
                            
                            <input
                type="last_name"
                name="last_name"
                class="form-control"
                id="lastname"
                placeholder="Last Name"
              />
                        </div>
                        <input
                type="email"
                name="email"
                class="form-control"
                id="email"
                placeholder="Email"
              />
                        
                        <input
                type="number"
                name="number"
                class="form-control"
                id="number"
                placeholder="Number"
              />
                        
                        <input
                type="Issue"
                name="Issue"
                class="form-control"
                id="Issue"
                placeholder="Issue"
              />
                        <div id='contact-btn'>
                            <button className="btn-red" type="submit" onClick={() => sendEmail()}>Submit</button>
                        </div>
                    </form>
                </div>
                <div id="contact-img">
                </div>
            </div>
        </div>
    )
}

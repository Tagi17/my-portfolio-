'use client'

import './globals.css'

import React, { forwardRef } from 'react';

interface ContactFormComponentProps {
    // Define any props here if needed
}

const ContactFormComponentFunc = forwardRef<HTMLDivElement, ContactFormComponentProps>((props, ref) => {
    return (
        <div ref={ref} className="contact-form-container">
            <h2>MESSAGE ME</h2>
            <form id="contact-form" action="https://formspree.io/f/xpzvaanz" method="POST">
                <div className="input-group">
                    <input type="text" id="name" name="name" placeholder="Name" required/>
                </div>
                <div className="input-group">
                    <input type="email" id="email" name="email" placeholder="E-mail" required/>
                </div>
                <div className="input-group1">
                    <textarea id="message" name="message" placeholder="Your Message" required></textarea>
                </div>
                <div className="captcha-container">
                </div>
                <button type="submit">SEND</button>
            </form>
        </div>
    );
});
ContactFormComponentFunc.displayName = 'ContactFormComponent';
export default ContactFormComponentFunc;
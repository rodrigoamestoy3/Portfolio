import React from "react";
import '../css/contact.css';

const ContactContainer = () => {
    return(
        <div className="contact-container">
          <h2 id="CONTACT">Contact</h2>
        <div className="email-form">
          <p>Please feel free to contact me for any doubt or any feedback</p>
          <form action="https://formsubmit.co/rodrigoamestoy2@gmali.com" method="POST">
            <div className="row">
              <label for="">E-mail</label>
              <input type="emali" placeholder="youremali@example.com" name="emali"/>
            </div>
            <div className="row">
              <label for="">Subject</label>
              <input type="text" placeholder="Subject" name="_subject"/>
              <input type="hidden" name="_captcha" value="true"/>
            </div>
            <div className="row">
              <label for="">Message</label>
              <input type="text" name="message" placeholder="Get in contact!" id=""/>
            </div>
            <div className="row">
              <button type="submit">SEND</button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default ContactContainer;
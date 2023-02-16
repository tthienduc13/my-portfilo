import React from "react";
import "../Contact/Contact.scss";
function Contact() {
  return (
    <>
      <div className="contact" id="contact">
        <div className="contact__container">
          <div className="contact__container-header">
            <p>Contact</p>
          </div>
          <div className="contact__container-content">
            <div className="first-row">
              <div class="box">
                <p className="box-header">Get In Touch</p>
                <form>
                  <div class="user-box">
                    <input required name="" type="text"></input>
                    <label>Email</label>
                  </div>
                  <div class="user-box">
                    <input required name="" type="text"></input>
                    <label>Name</label>
                  </div>
                  <textarea rows="8" placeholder="Enter message..."></textarea>
                  <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <input type="submit" value="Send"></input>
                  </a>
                </form>
              </div>
              <div className="first-row-img">
                <img src="https://res.cloudinary.com/de41uvd76/image/upload/v1676569620/k42jnl7fxdart5ojdisa.jpg"></img>
              </div>
            </div>
            <div className="second-row">
              <div className="contact-method">
                <div className="contact-method-header">
                  <i class="fa-sharp fa-solid fa-location-dot"></i>
                  <p>Location</p>
                </div>
                <div className="contact-method-detail">
                  <p>Son Tra District, Da Nang City, Viet Nam</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-method-header">
                  <i class="fa-sharp fa-solid fa-phone"></i>
                  <p>Phone Number</p>
                </div>
                <div className="contact-method-detail">
                  <a href="tel: +8442864880"> (+84) 42 864 880</a>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-method-header">
                  <i class="fa-sharp fa-solid fa-envelope"></i>
                  <p>Email</p>
                </div>
                <div className="contact-method-detail">
                  <a href="mailto:ducnltdev@gmail.com">ducnltdev@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

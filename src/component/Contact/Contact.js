import React from "react";
import { useState } from "react";
import "../Contact/Contact.scss";
import "@style/_global.scss";
import axios from "axios";
import { contactRequest, uploadData } from "../../apis";
function Contact() {
  const $form = document.querySelector("form");
  const [info, setInfo] = useState({ email: "", name: "", message: "" });
  const [value, set] = useState("");
  console.log(info);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await uploadData(info);
      $form.reset();
      alert("success");
    } catch (err) {
      alert("please try again");
    }
  };
  return (
    <>
      <div className="contact" id="contact">
        <div className="contact__container container">
          <div className="contact__container-header">
            <p>Contact</p>
          </div>
          <div className="contact__container-content">
            <div className="first-row">
              <div class="box">
                <p className="box-header">Get In Touch</p>
                <form className="form">
                  <div class="user-box">
                    <input
                      required
                      name=""
                      type="text"
                      onChange={(e) =>
                        setInfo({ ...info, email: e.target.value })
                      }
                    ></input>
                    <label>Email</label>
                  </div>
                  <div class="user-box">
                    <input
                      required
                      name=""
                      type="text"
                      onChange={(e) =>
                        setInfo({ ...info, name: e.target.value })
                      }
                    ></input>
                    <label>Name</label>
                  </div>
                  <textarea
                    rows="8"
                    placeholder="Enter message..."
                    onChange={(e) =>
                      setInfo({ ...info, message: e.target.value })
                    }
                  ></textarea>
                  <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <button onClick={handleSubmit}> Send </button>
                  </a>
                </form>
              </div>
              <div className="first-row-img">
                <img src={require("@img/contactProfile.jpg")}></img>
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
                  <a href="tel: +8442864880"> (+84) 942 864 880</a>
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

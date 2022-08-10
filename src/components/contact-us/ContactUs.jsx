import "./contact-us.css";
import React, { useState } from "react";
import attachment from "../../assets/images/attachment-logo.svg";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
    file: "",
    checkBox: false,
  });

  const onChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const documents = e.target.files[0];
    if (documents) {
      setFormData({
        ...formData,
        file: documents,
      });
    }
    console.log(documents, "ok oo<>");
  };

  return (
    <section className="section contact">
      <div className="section-title">
        <h2>Contact Us</h2>
      </div>
      <div className="section-center">
        <form>
          <div className="form-sub-heading">
            <p>Drop a message for our team to see how we can help</p>
          </div>

          <div className="form-control">
            <label htmlFor="fullName"> Full Name</label>
            <input
              type="text"
              id="fullName"
              value={formData.fullName}
              required
              onChange={onChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email"> Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              required
              onChange={onChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="phoneNumber"> Phone Number</label>
            <input
              type="text"
              max="11"
              id="phoneNumber"
              value={formData.phoneNumber}
              required
              onChange={onChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="message"> Message</label>
            <textarea
              id="message"
              cols="30"
              rows="15"
              value={formData.message}
              required
              onChange={onChange}
            ></textarea>
          </div>
          <div className="attach-control">
          <input type="file" value={formData.value} id="file" onChange={handleFileChange} />
            <label htmlFor="file">
              <img
                src={attachment}
                id="file"
                alt="attachment-logo"
                className="form-logo"
              />
            </label>
            <span>
              Attach file
            </span>

          </div>
          <div className="checkbox-control">
            <input type="checkBox" required />
            <label htmlFor="checkBox">
              I have read and accepted the <span>Terms & Condition </span>
              and <span> Privacy Policy </span>
            </label>
          </div>
          <br />
          <button type="submit" className="btn">
            {" "}
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;

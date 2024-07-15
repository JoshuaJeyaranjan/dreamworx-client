// ContactForm.js
import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.scss";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_8hfywxa", // Replace with your service ID
        "template_990ozcw", // Replace with your template ID
        formData,
        "PKnZJZ-ZPIAy6_auu" // Replace with your public API key
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "", phone: "" });
      })
      .catch((err) => {
        console.log("FAILED...", err);
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <div className="contact">
      <h3 className="contact__header">Contact Us</h3>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-container-column">
          <div className="input-container-row">
            <div className="input-container-column">
              <label className="input-container-column">Name:</label>
              <input
              className="contact-form__input"
                type="text"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-container-column">
              <label>Email:</label>
              <input
              className="contact-form__input email-input"
                type="email"
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-container-column">
              <label>Phone:</label>
              <input
              className="contact-form__input"
                type="phone"
                placeholder="Your Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <label className="input-container-column">Message:</label>
            <textarea
            className="contact-form__input message-input"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button className="contact-form__submit" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

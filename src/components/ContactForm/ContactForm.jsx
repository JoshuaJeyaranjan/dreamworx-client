import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.scss";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    success: false,
    error: false,
    validationError: false,
    message: "",
  });

  const formRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (formRef.current) {
        const formTop = formRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (formTop < windowHeight) {
          formRef.current.classList.add("slide-in");
          window.removeEventListener("scroll", handleScroll); // Remove listener after animation triggers
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setFormStatus({
        success: false,
        error: false,
        validationError: true,
        message: "Please enter a valid email address.",
      });
      return;
    }

    emailjs
      .send(
        "service_8hfywxa", // Replace with your service ID
        "template_990ozcw", // Replace with your template ID
        formData,
        "PKnZJZ-ZPIAy6_auu" // Replace with your public API key
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setFormStatus({
          success: true,
          error: false,
          validationError: false,
          message: "Message sent successfully!",
        });
        setFormData({ name: "", email: "", message: "", phone: "" });
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setFormStatus({
          success: false,
          error: true,
          validationError: false,
          message: "Failed to send message. Please try again later.",
        });
      });
  };

  return (
    <div className="contact">
      <h3 className="contact__header">Contact Us</h3>

      <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
        <div className="input-container-column">
          <div className="input-container-row">
            <div className="input-container-column name-input">
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
            <div className="input-container-column email-container">
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
      {formStatus.message && (
        <div
          className={`contact-form__status ${
            formStatus.success
              ? "contact-form__status--success"
              : "contact-form__status--error"
          }`}
        >
          {formStatus.message}
        </div>
      )}
    </div>
  );
}

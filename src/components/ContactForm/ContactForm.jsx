import { useState, useEffect, useRef } from "react";
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
          window.removeEventListener("scroll", handleScroll);
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
        "service_8hfywxa",
        "template_990ozcw",
        formData,
        "PKnZJZ-ZPIAy6_auu",
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
        <div className="contact-form__group-row">
          <div className="contact-form__group">
            <label className="contact-form__label">Name:</label>
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
          <div className="contact-form__group">
            <label className="contact-form__label">Email:</label>
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
          <div className="contact-form__group">
            <label className="contact-form__label">Phone:</label>
            <input
              className="contact-form__input"
              type="tel"
              placeholder="Your Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="contact-form__group message-group">
          <label className="contact-form__label ">Message:</label>
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

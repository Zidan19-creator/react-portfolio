{/* Defines the routes for each page of the portfolio */}
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  // Prevents the default form submission and redirects the user to Home
  function handleSubmit(event) {
    event.preventDefault();

    console.log("Contact Form Data:", formData);

    alert("Thank you! Your message has been received.");

    navigate("/");
  }

  return (
    <section className="contact">
      <div className="contact-container">
        <p className="section-label">Get In Touch</p>
        <h1>Contact Me</h1>

        <div className="contact-layout">

          <div className="contact-info">
            <h2>Contact Information</h2>

            <p>
              Feel free to contact me regarding projects, opportunities,
              or professional inquiries.
            </p>

            <div className="contact-detail">
              <strong>Email</strong>
              <span>Add your email address here</span>
            </div>

            <div className="contact-detail">
              <strong>Location</strong>
              <span>Toronto, Ontario, Canada</span>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>

                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>

                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contactNumber">Contact Number</label>

              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>

              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;
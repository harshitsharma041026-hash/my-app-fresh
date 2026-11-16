
import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value
    }));

    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="inner-page">
      <section className="page-hero">
        <span className="eyebrow">CONTACT OUR TEAM</span>
        <h1>Have an idea? <span>Let's talk.</span></h1>
        <p>
          Tell us a little about your project. We'll use these
          details to demonstrate a professional contact form.
        </p>
      </section>

      <section className="contact-layout">
        <div className="contact-details">
          <span className="eyebrow">START A CONVERSATION</span>
          <h2>Let's make your next idea happen.</h2>
          <p>
            Share your goals, challenges or project requirements.
            A clear starting point helps us understand what you need.
          </p>

          <div className="contact-detail-item">
            <span>✉</span>
            <div>
              <strong>Email</strong>
              <p>hello@nexora.example</p>
            </div>
          </div>

          <div className="contact-detail-item">
            <span>⌖</span>
            <div>
              <strong>Location</strong>
              <p>India · Working worldwide</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Tell us about your project</h2>

          <label htmlFor="name">Full name</label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Work email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@company.com"
            required
          />

          <label htmlFor="company">Company (optional)</label>
          <input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your company name"
          />

          <label htmlFor="message">Project details</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us what you want to build..."
            rows="5"
            required
          />

          <button type="submit" className="btn btn-primary">
            Submit Enquiry ↗
          </button>

          {submitted && (
            <p className="form-success" role="status">
              Thank you, {formData.name}! Your demo form was
              submitted successfully. No email has been sent.
            </p>
          )}
        </form>
      </section>
    </div>
  );
}

export default Contact;

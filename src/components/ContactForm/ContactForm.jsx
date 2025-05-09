import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <div className="contact-form-row">
        <div className="contact-form-row-copy-item">
          <p className="primary sm">Let’s create together</p>
        </div>
        <div className="contact-form-row-copy-item">
          <p className="primary sm">(Scene — 07)</p>
        </div>
        <div className="contact-form-row-copy-item">
          <p className="primary sm">&copy; 2025</p>
        </div>
      </div>

      <div className="contact-form-row">
        <div className="contact-form-col">
          <div className="contact-form-header">
            <h3>Start a Conversation</h3>

            <p>
              Have a story in mind? Let’s bring it to life. I’d love to hear
              what you’re working on and explore how we can collaborate.
            </p>
          </div>

          <div className="contact-form-availability">
            <p className="primary sm">Available for Freelance</p>
            <p className="primary sm">Clients worldwide</p>
          </div>
        </div>

        <div className="contact-form-col">
          <div className="form-item">
            <input type="text" placeholder="Name" />
          </div>

          <div className="form-item">
            <input type="text" placeholder="Email" />
          </div>

          <div className="form-item">
            <textarea type="text" rows={6} placeholder="Message" />
          </div>

          <div className="form-item">
            <button className="btn">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

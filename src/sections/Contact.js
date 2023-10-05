import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const service_key = process.env.REACT_APP_EMAIL_SERVICE_KEY;
  const template_key = process.env.REACT_APP_EMAIL_TEMPLATE_KEY;
  const public_key = process.env.REACT_APP_EMAIL_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(service_key, template_key, form.current, public_key).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    e.target.reset();
  };

  return (
    <div className="row text-center" id="contact">
      <div className="col-12 text-center">
        <h3 className="section-title">
          05.<span> Contact Me ----------------</span>
        </h3>
        <h6>
          Send me an email to connect or for any questions i'd love to hear from
          you.
        </h6>
      </div>
      <div className="row contact-form-row">
        <form ref={form} onSubmit={sendEmail}>
          <div className="contact-form-name">
            <label>Name</label>
            <input type="text" name="user_name" />
          </div>
          <div className="contact-form-email">
            <label>Email</label>
            <input type="email" name="user_email" />
          </div>
          <div className="contact-form-message">
            <label>Message</label>
            <textarea name="message" />
          </div>
          <div className="contact-form-submit">
            <input className="contact-form-submit-btn" type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;

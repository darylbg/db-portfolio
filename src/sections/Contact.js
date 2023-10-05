import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (showMessage) {
      const messageReset = setTimeout(() => {
        setMessage('');
        setShowMessage(false);
      }, 5000);

      return () => clearTimeout(messageReset);
    }
  }, [showMessage]);

  const form = useRef();

  const service_key = process.env.REACT_APP_EMAIL_SERVICE_KEY;
  const template_key = process.env.REACT_APP_EMAIL_TEMPLATE_KEY;
  const public_key = process.env.REACT_APP_EMAIL_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(service_key, template_key, form.current, public_key).then(
      (result) => {
        setMessage('Sent Successfully, thanks for the email! :)');
        setShowMessage(true);
      },
      (error) => {
        console.log(error)
        setMessage('Message did not send, Something went wrong. :(');
        setShowMessage(true);
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
      </div>
      <div className="row contact-form-row">
        <form ref={form} onSubmit={sendEmail}>
          <h6 className="contact-form-header">
            Send me an email to connect or for any questions I'd love to hear from
            you.
          </h6>
          <div className="contact-form-input">
            <label>Name</label>
            <input type="text" name="user_name" />
          </div>
          <div className="contact-form-input">
            <label>Email</label>
            <input type="email" name="user_email" />
          </div>
          <div className="contact-form-textarea">
            <label>Message</label>
            <textarea name="message" />
          </div>
          <div className="contact-form-submit">
            <input type="submit" value="Send" />
          </div>
          <div className="send-message">
            {showMessage && <p>{message}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;

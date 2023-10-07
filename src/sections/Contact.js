import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [sendMessage, setSendMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    text: "",
  });

  const [formInputError, setFormInputError] = useState({
    nameError: "",
    emailError: "",
  });

  console.log(formInputError);

  useEffect(() => {
    if (showMessage) {
      const messageReset = setTimeout(() => {
        setSendMessage("");
        setShowMessage(false);
      }, 6000);

      return () => clearTimeout(messageReset);
    }
  }, [showMessage]);

  const form = useRef();

  const service_key = process.env.REACT_APP_EMAIL_SERVICE_KEY;
  const template_key = process.env.REACT_APP_EMAIL_TEMPLATE_KEY;
  const public_key = process.env.REACT_APP_EMAIL_PUBLIC_KEY;

  let hasErrors = false;
  const validateForm = () => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  
    let nameError = "";
    let emailError = "";
  
    if (formInput.name === "") {
      nameError = "Please enter your name.";
      hasErrors = true;
    }
  
    if (formInput.email === "" || !emailRegex.test(formInput.email)) {
      emailError = "Please enter a valid email.";
      hasErrors = true;
    }
  
    setFormInputError({ nameError, emailError });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    validateForm();

    if (!hasErrors) {
      emailjs
        .sendForm(service_key, template_key, form.current, public_key)
        .then(
          (result) => {
            setSendMessage("Sent Successfully, thanks for the email! :)");
            setShowMessage(true);
          },
          (error) => {
            console.log(error);
            setSendMessage("Message did not send, Something went wrong. :(");
            setShowMessage(true);
          }
        );

      setFormInput({ ...formInput, name: "", email: "", text: "" });
    }
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
            Send me an email to connect or for any questions I'd love to hear
            from you.
          </h6>
          <div className="contact-form-input">
            <label>Name</label>
            <input
              type="text"
              name="user_name"
              value={formInput.name}
              onChange={(e) =>
                setFormInput({ ...formInput, name: e.target.value })
              }
            />
            <p className="form-error-msg">{formInputError.nameError}</p>
          </div>
          <div className="contact-form-input">
            <label>Email</label>
            <input
              type="text"
              name="user_email"
              value={formInput.email}
              onChange={(e) =>
                setFormInput({ ...formInput, email: e.target.value })
              }
            />
            <p className="form-error-msg">{formInputError.emailError}</p>
          </div>
          <div className="contact-form-textarea">
            <label>Message</label>
            <textarea
              name="message"
              value={formInput.text}
              onChange={(e) =>
                setFormInput({ ...formInput, text: e.target.value })
              }
            />
          </div>
          <div className="contact-form-submit">
            <button type="submit">Send</button>
            
          </div>
          <div className="send-message">
            {showMessage && <p>{sendMessage}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;

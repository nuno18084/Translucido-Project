import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./FormComponent.css";

export const FormComponent = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_avq9c5c", // Email Services - ServiceID
        "template_q3kuksu", // Email Template - TemplateID
        form.current,
        "ao0by5cqFGggXbluF" // Account - Pblic key
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="form-main-container-2">
        <div className="form-input-label">
          <label>Nome:</label>
          <input type="text" name="user_name" />
        </div>
        <div className="form-input-label">
          <label>Email:</label>
          <input type="email" name="user_email" />
        </div>
        <div className="form-input-label">
          <label>Mensagem:</label>
          <textarea className="form-message-area" name="message" />
        </div>
        <div>
          <input className="submit-btn" type="submit" value="Submeter" />
        </div>
      </div>
    </form>
  );
};

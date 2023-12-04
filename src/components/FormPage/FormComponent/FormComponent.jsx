import React, { useRef } from "react";
import emailjs from "emailjs-com";

export const FormComponent = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Email Services - ServiceID
        "YOUR_TEMPLATE_ID", // Email Template - TemplateID
        form.current,
        "YOUR_PUBLIC_KEY" // Account - Pblic key
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
      <label>Nome</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Mendagem</label>
      <textarea name="message" />
      <input type="submit" value="Submeter" />
    </form>
  );
};

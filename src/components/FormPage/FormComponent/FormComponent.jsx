import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./FormComponent.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = () =>
  toast.success("Sucesso!", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

export const FormComponent = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(true);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    // Validate form before submitting
    if (!name || !email || !message) {
      setIsFormValid(false);
      return;
    }

    setIsFormValid(true);

    try {
      const result = await emailjs.sendForm(
        "service_st6xk07",
        "template_stvywf8",
        form.current,
        "407jpsr56wEqv9UcY"
      );

      console.log(result.text);
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitSuccess(true);
      setIsSubmitSuccess(true);
      notify();
    } catch (error) {
      console.error(error.text);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Reset form validation when any input changes
    setIsFormValid(true);

    // Handle individual input changes
    switch (name) {
      case "user_name":
        setName(value);
        break;
      case "user_email":
        setEmail(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="form-main-container-2">
        <div className={`form-input-label ${!isFormValid ? "invalid" : ""}`}>
          <label>Nome:</label>
          <input
            type="text"
            name="user_name"
            value={name}
            onChange={handleInputChange}
            className={`form-input ${!isFormValid && !name ? "invalid" : ""}`}
          />
        </div>
        <div className={`form-input-label ${!isFormValid ? "invalid" : ""}`}>
          <label>Email:</label>
          <input
            type="email"
            name="user_email"
            value={email}
            onChange={handleInputChange}
            className={`form-input ${!isFormValid && !email ? "invalid" : ""}`}
          />
        </div>
        <div className={`form-input-label ${!isFormValid ? "invalid" : ""}`}>
          <label>Mensagem:</label>
          <textarea
            className={`form-input form-message-area ${
              !isFormValid && !message ? "invalid" : ""
            }`}
            name="message"
            value={message}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button
            className={`submit-btn ${
              !isFormValid || !message || !email || !name
                ? "not-valid-btn "
                : "submit-btn-active"
            }`}
            type="submit"
            value="Submeter"
            disabled={!isFormValid}
          >
            Submeter
          </button>
          {isSubmitSuccess && <ToastContainer />}
        </div>
      </div>
    </form>
  );
};

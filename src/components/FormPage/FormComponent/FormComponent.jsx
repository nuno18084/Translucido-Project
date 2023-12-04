// import React, { useRef } from "react";
// import emailjs from "emailjs-com";
// import "./FormComponent.css";

// export const FormComponent = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_avq9c5c", // Email Services - ServiceID
//         "template_q3kuksu", // Email Template - TemplateID
//         form.current,
//         "ao0by5cqFGggXbluF" // Account - Pblic key
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <div className="form-main-container-2">
//         <div className="form-input-label">
//           <label>Nome:</label>
//           <input type="text" name="user_name" />
//         </div>
//         <div className="form-input-label">
//           <label>Email:</label>
//           <input type="email" name="user_email" />
//         </div>
//         <div className="form-input-label">
//           <label>Mensagem:</label>
//           <textarea className="form-message-area" name="message" />
//         </div>
//         <div>
//           <input className="submit-btn" type="submit" value="Submeter" />
//         </div>
//       </div>
//     </form>
//   );
// };

// import React, { useRef, useState } from "react";
// import emailjs from "emailjs-com";
// import "./FormComponent.css";

// export const FormComponent = () => {
//   const form = useRef();
//   const [formData, setFormData] = useState({
//     user_name: "",
//     user_email: "",
//     message: "",
//   });

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_avq9c5c", // Email Services - ServiceID
//         "template_q3kuksu", // Email Template - TemplateID
//         form.current,
//         "ao0by5cqFGggXbluF" // Account - Public key
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const isFormValid = () => {
//     return Object.values(formData).every((value) => value.trim() !== "");
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <div className="form-main-container-2">
//         <div className="form-input-label">
//           <label>Nome:</label>
//           <input
//             type="text"
//             name="user_name"
//             value={formData.user_name}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="form-input-label">
//           <label>Email:</label>
//           <input
//             type="email"
//             name="user_email"
//             value={formData.user_email}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div className="form-input-label">
//           <label>Mensagem:</label>
//           <textarea
//             className="form-message-area"
//             name="message"
//             value={formData.message}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <input
//             className="submit-btn"
//             type="submit"
//             value="Submeter"
//             disabled={!isFormValid()}
//           />
//         </div>
//       </div>
//     </form>
//   );
// };

// import React, { useRef, useState, useEffect } from "react";
// import emailjs from "emailjs-com";
// import "./FormComponent.css";

// export const FormComponent = () => {
//   const form = useRef();
//   const [formData, setFormData] = useState({
//     user_name: "",
//     user_email: "",
//     message: "",
//   });
//   const [invalidFields, setInvalidFields] = useState([]);

//   useEffect(() => {
//     const invalidFieldsArray = [];
//     Object.entries(formData).forEach(([key, value]) => {
//       if (value.trim() === "") {
//         invalidFieldsArray.push(key);
//       }
//     });
//     setInvalidFields(invalidFieldsArray);
//   }, [formData]);

//   const sendEmail = (e) => {
//     e.preventDefault();

//     if (invalidFields.length === 0) {
//       // Only send email if there are no invalid fields
//       emailjs
//         .sendForm(
//           "service_avq9c5c", // Email Services - ServiceID
//           "template_q3kuksu", // Email Template - TemplateID
//           form.current,
//           "ao0by5cqFGggXbluF" // Account - Public key
//         )
//         .then(
//           (result) => {
//             console.log(result.text);
//           },
//           (error) => {
//             console.log(error.text);
//           }
//         );
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const isFormValid = () => {
//     return invalidFields.length === 0;
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <div className="form-main-container-2">
//         <div
//           className={`form-input-label ${
//             invalidFields.includes("user_name") ? "invalid" : ""
//           }`}
//         >
//           <label>Nome:</label>
//           <input
//             type="text"
//             name="user_name"
//             value={formData.user_name}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div
//           className={`form-input-label ${
//             invalidFields.includes("user_email") ? "invalid" : ""
//           }`}
//         >
//           <label>Email:</label>
//           <input
//             type="email"
//             name="user_email"
//             value={formData.user_email}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div
//           className={`form-input-label ${
//             invalidFields.includes("message") ? "invalid" : ""
//           }`}
//         >
//           <label>Mensagem:</label>
//           <textarea
//             className="form-message-area"
//             name="message"
//             value={formData.message}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <input
//             className="submit-btn"
//             type="submit"
//             value="Submeter"
//             disabled={!isFormValid()}
//           />
//         </div>
//       </div>
//     </form>
//   );
// };

import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./FormComponent.css";

export const FormComponent = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate form before submitting
    if (!name || !email || !message) {
      setIsFormValid(false);
      return;
    }

    setIsFormValid(true);

    emailjs
      .sendForm(
        "service_avq9c5c",
        "template_q3kuksu",
        form.current,
        "ao0by5cqFGggXbluF"
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
          <input
            className="submit-btn"
            type="submit"
            value="Submeter"
            disabled={!isFormValid}
          />
        </div>
      </div>
    </form>
  );
};

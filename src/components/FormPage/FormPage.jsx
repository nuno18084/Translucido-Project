import React from "react";
import "./FormPage.css";
import FromRectangle from "../../Assets/FormPage/FormPageRectangle.png";
import { FormComponent } from "./FormComponent/FormComponent";

const FormPage = () => {
  // const inputElement = document.querySelector("input");

  // setInterval(() => {
  //   inputElement.classList.toggle("cursor-blink");
  // }, 500);

  return (
    <div className="form-main-container">
      <img
        src={FromRectangle}
        alt="form-rectangle"
        className="form-rectangle"
      />
      <div className="form-media-container">
        <div>
          <h1>Agende Connosco!</h1>
        </div>
        <div className="form-component">
          <FormComponent />
        </div>
      </div>
    </div>
  );
};

export default FormPage;

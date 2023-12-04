import React from "react";
import "./FormPage.css";
import FromRectangle from "../../Assets/FormPage/FormPageRectangle.png";
import { FormComponent } from "./FormComponent/FormComponent";

const FormPage = () => {
  return (
    <div className="form-main-container">
      <img
        src={FromRectangle}
        alt="form-rectangle"
        className="form-rectangle"
      />
      <div>
        <div>
          <h1>Agende Connosco!</h1>
        </div>
        <div>
          <FormComponent />
        </div>
      </div>
    </div>
  );
};

export default FormPage;

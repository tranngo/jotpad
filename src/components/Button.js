import React from "react";
import "../scss/main.scss";

const Button = (props) => {
  return (
    <button type="button" className="btn button">
      {props.text}
    </button>
  );
};

export default Button;

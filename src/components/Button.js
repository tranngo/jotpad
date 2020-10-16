import React from "react";
import "../scss/main.scss";

const Button = (props) => {
  const { text } = props;

  return (
    <button type="button" className="btn button">
      {text}
    </button>
  );
};

export default Button;

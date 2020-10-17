import React from "react";
import "../../../scss/main.scss";

const DropdownMenu = (props) => {
  return <div className="dropdown">{props.children}</div>;
};

export default DropdownMenu;

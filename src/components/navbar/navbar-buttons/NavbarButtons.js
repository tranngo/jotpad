import React from "react";
import "../../../scss/main.scss";

const NavbarButtons = (props) => {
  return <div className="navbar-buttons d-flex flex-row">{props.children}</div>;
};

export default NavbarButtons;

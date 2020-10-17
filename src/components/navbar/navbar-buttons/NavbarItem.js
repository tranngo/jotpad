import React, { useState } from "react";
import "../../../scss/main.scss";

const NavbarItem = (props) => {
  return (
    <div>
      <h6
        className="navbar-button-text my-0 px-1 mr-1"
        onClick={props.updateActiveMenu}
      >
        {props.text}
      </h6>

      {props.activeMenu === props.text && props.children}
    </div>
  );
};

export default NavbarItem;

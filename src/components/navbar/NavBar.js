import React from "react";
import "../../scss/main.scss";
import Button from "../Button";
import ContributorsList from "../contributors";
import NavBarButtons from "./NavBarButtons";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light justify-content-between px-4">
      <div className="d-flex flex-column">
        <h1 className="px-1" id="logo">
          Jotpad
        </h1>
        <NavBarButtons />
      </div>
      <div>
        <ContributorsList />
        <Button text="Invite to collaborate" />
      </div>
    </nav>
  );
};

export default NavBar;

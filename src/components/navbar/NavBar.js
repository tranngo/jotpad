import React, { useState } from "react";
import "../../scss/main.scss";
import Button from "../Button";
import ContributorsList from "../contributors";
import DropdownMenu from "./dropdown/DropdownMenu";
import DropdownItem from "./dropdown/DropdownItem";
import NavbarButtons from "./navbar-buttons/NavbarButtons";
import NavbarItem from "./navbar-buttons/NavbarItem";
import { DropdownEnum } from "./enums/Dropdown";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState();

  const updateActiveMenu = (pressedButton) => {
    if (activeMenu === pressedButton) {
      setActiveMenu(null);
    } else {
      setActiveMenu(pressedButton);
    }
  };

  return (
    <nav className="navbar navbar-light justify-content-between px-4 sticky-top">
      <div className="d-flex flex-column">
        <h1 className="px-1" id="logo">
          Jotpad
        </h1>
        <NavbarButtons>
          <NavbarItem
            text={DropdownEnum.FILE}
            updateActiveMenu={() => updateActiveMenu(DropdownEnum.FILE)}
            activeMenu={activeMenu}
          >
            <DropdownMenu>
              <DropdownItem text="Save as PDF" />
            </DropdownMenu>
          </NavbarItem>
          <NavbarItem
            text={DropdownEnum.EDIT}
            updateActiveMenu={() => updateActiveMenu(DropdownEnum.EDIT)}
            activeMenu={activeMenu}
          >
            <DropdownMenu>
              <DropdownItem text="Undo" />
              <DropdownItem text="Redo" />
            </DropdownMenu>
          </NavbarItem>
          <NavbarItem
            text={DropdownEnum.PROFILE}
            updateActiveMenu={() => updateActiveMenu(DropdownEnum.PROFILE)}
            activeMenu={activeMenu}
          >
            <DropdownMenu>
              <DropdownItem text="Change name" />
            </DropdownMenu>
          </NavbarItem>
        </NavbarButtons>
      </div>
      <div>
        <ContributorsList />
        <Button text="Invite to collaborate" />
      </div>
    </nav>
  );
};

export default Navbar;

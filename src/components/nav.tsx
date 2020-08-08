import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const NavbarQuizApp = () => {


  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand >Quizapp</NavbarBrand>       
    </Navbar>
    </div>
  );
}

export default NavbarQuizApp;
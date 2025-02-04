import "./NavigationBar.scss";
import { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import logo from "../assets/logo.png";

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Navbar expand="md" className="nav-bar">
      <div className="nav-logo-brand" id="home">
        <NavbarBrand href="/">
          <img src={logo} alt="logo" className="logo" />
        </NavbarBrand>
      </div>
      <div className="nav-all-items">
        <NavbarToggler className="nav-bar-hamburger" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto nav-bar-items" navbar>
            <NavItem>
              <NavLink className="nav-bar-color" href="#home">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-bar-color" href="#about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-bar-color" href="#projects">
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-bar-color" href="#gallery">
                Gallery
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink className="nav-bar-color" href="#blog">
                blog
              </NavLink>
            </NavItem> */}

            <NavItem>
              <NavLink className="nav-bar-color" href="#contact">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
}

export default NavigationBar;

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
      <div className="nav-logo-brand">
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
                home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-bar-color" href="#about">
                about
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-bar-color" href="#projects">
                projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-bar-color" href="#gallery">
                gallery
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink className="nav-bar-color" href="#blog">
                blog
              </NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink className="nav-bar-color" href="#resume">
                resume
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-bar-color" href="#contact">
                contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
}

export default NavigationBar;

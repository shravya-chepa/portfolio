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
        <NavbarBrand className="nav-bar-color" href="/">
          <img src={logo} alt="logo" className="logo" />
        </NavbarBrand>
      </div>
      <div className="nav-all-items">
        <NavbarToggler className="nav-bar-hamburger" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto nav-bar-items" navbar>
            <NavItem>
              <NavLink className="nav-bar-color" href="/components/">
                home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-bar-color" href="/components/">
                about
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-bar-color" href="/components/">
                projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-bar-color" href="/components/">
                blog
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-bar-color" href="/components/">
                resume
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-bar-color" href="/components/">
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

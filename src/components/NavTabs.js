import React from "react";
import { Link } from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBFormInline, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu,  MDBDropdownItem, MDBContainer, MDBIcon } from "mdbreact";

function NavTabs() {
  return (
    <MDBNavbar
      color="bg-dark"
      style={{ marginTop: "20px" }}
      dark
      expand="md"
      scrolling
    >
      <MDBContainer>
        <MDBNavbarBrand>
          <strong className="white-text"><h1>Jarren Patao</h1></strong>
          <hr/>
          <small className="text-muted">Full Stack Web Developer</small>
        </MDBNavbarBrand>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/Contact">Contact Me</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/Projects">Projects</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default NavTabs;

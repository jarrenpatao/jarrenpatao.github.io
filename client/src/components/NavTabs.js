import React from "react";
// import { Link } from "react-router-dom";
// import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBFormInline, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu,  MDBDropdownItem, MDBContainer, MDBIcon } from "mdbreact";
import "../assets/css/style.css";
import { ParallaxBanner } from 'react-scroll-parallax';

function NavTabs() {
  return (
    <div>
    <ParallaxBanner
      className="your-class"
      layers={[{
        image: 'https://i.imgur.com/JhXaId2.jpg',
        amount: 0.1,
        slowerScrollRate: false,
      },
      {
        image: 'https://i.imgur.com/JhXaId2.jpg',
        amount: 0.2,
        slowerScrollRate: false,
      },]}
      style={{
          height: '500px',
      }}
      >
    </ParallaxBanner>
    <nav className="navbar navbar-dark stylish-color mb-4">

      {/* <!-- Navbar brand --> */}
      <a className="navbar-brand" href="/">Jarren Patao : Web Developer</a>

      {/* <!-- Collapse button --> */}
      <button className="navbar-toggler second-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent23"
        aria-controls="navbarSupportedContent23" aria-expanded="false" aria-label="Toggle navigation">
        <div className="animated-icon2"><span></span><span></span><span></span><span></span></div>
      </button>

      {/* <!-- Collapsible content --> */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent23">

        {/* <!-- Links --> */}
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" target="_blank" rel="noopener noreferrer" href="https://sleepy-refuge-79306.herokuapp.com/">Passion Project - Aria : RPG</a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
}

export default NavTabs;

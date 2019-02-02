// import { React, Component } from "react";
import { MDBJumbotron, MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBNavbarNav, MDBCollapse, MDBNavItem, MDBNavLink, MDBFormInline, MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import React from "react";
import "../../assets/css/index.css"


function Home() {
  return (
    
    <MDBContainer>
    <hr />
      <MDBRow>
        <MDBCol>
          <img className="profPic" src="http://i103.photobucket.com/albums/m130/minibalogna00/6W7Y9721.jpg" />
          <p>
            Having moved from Hawaii, I've come to see the amazing world of tech that lives here in the Bay area. My passion lives in full stack with a focus on UX/UI. The user experience is what our community sees and feels, but the functionality is what drives us.
          </p>
          <blockquote className="blockquote">
            "People ignore design that ignores people." - Frank Chimero
          </blockquote>
          <p>
            <strong>About me :</strong> MERN Stack Developer - MongoDB, Express (Web Server), React.js, Node.js.
            <br />
            Other technologies I've used are <i>HTML5/CSS3, JS, APIs, Twitter Bootstrap, Handlebars, MobX, jQuery, Firebase, SQL/MySQL, Sequelize, and MVC</i> 
          </p>
        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}
export default Home;
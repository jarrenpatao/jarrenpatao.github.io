// import { React, Component } from "react";
import { MDBJumbotron, MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle} from "mdbreact";
import React from "react";
import "../../assets/css/style.css"


function Projects() {
  return (
    
    <MDBContainer>
    <hr />
      <MDBJumbotron>
        <h1><strong>Projects</strong></h1>
      </MDBJumbotron>
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <h3>Deployed Co-op Projects</h3>
            <hr />
            {/* Project 1 : Rupert */}
            <MDBCard>
            <MDBCardImage
              src="https://i.imgur.com/zx4WWa7.jpg"
              alt="Rupert: Movie Companion | Hosted by Heroku"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody color="dark">
              <MDBCardTitle tag="h5">Rupert: Movie Companion</MDBCardTitle>
              <MDBCardText>
                Rupert was created by <a href="https://www.github.com/orionabrams">Orion</a>, <a href="https://www.github.com/amandamurillo">Amanda</a>, <a href="https://www.github.com/zimanzm">Ziman</a>, and <a href="https://www.github.com/jarrenpatao">myself</a> to help find top movies that you might be looking for.
              </MDBCardText>
              <MDBBtn color="white" size="md">
                <a href="https://github.com/OrionAbrams/Project-One">GitHub Repository</a>
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
          <hr />
          {/* Project 2 : Bill¥ */}
          <MDBCard>
            <MDBCardImage
              src="https://i.imgur.com/sFrqnJn.png"
              alt="Bill¥: Payment Assistant | Hosted by Heroku"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <MDBCardTitle tag="h5">Bill¥: Payment Assistant</MDBCardTitle>
              <MDBCardText>
                Bill¥ is a web application built with a unified bill system in mind. Created with <a href="https://github.com/Hellsrevenge/">Varvara</a> and <a href="https://github.com/mpoblete27/">Mickey</a>.
              </MDBCardText>
              <MDBBtn color="primary" size="md">
                <a href="https://github.com/Hellsrevenge/Project-2-BillY">GitHub Repository</a>
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
          </MDBCol>

          {/* GitHub */}
          <MDBCol md-6>
            <h3>Personal Projects</h3>
            <hr />
            <MDBCard>
            <MDBCardImage
              src="https://mdbootstrap.com/img/Photos/Others/images/77.jpg"
              alt="MDBCard image cap"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </MDBCardText>
              <MDBBtn color="primary" size="md">
                read more
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBContainer>
  );
}
export default Projects;
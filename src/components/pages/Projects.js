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
                <a href="https://rupert-movie-companion.herokuapp.com/">Go Ask Rupert</a>
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
                Bill¥ is a web application built with a unified bill system in mind. This project is still a work in progress. Created with <a href="https://github.com/Hellsrevenge/">Varvara</a> and <a href="https://github.com/mpoblete27/">Mickey</a>.
              </MDBCardText>
              <MDBBtn color="white" size="md">
                <a href="https://billy2019.herokuapp.com">Track Some Bills</a>
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
              src="https://i.imgur.com/OEhitpq.png"
              alt="Crystal Clicker: First JavaScript Application"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <MDBCardTitle tag="h5">Crystal Clicker: First JavaScript Application</MDBCardTitle>
              <MDBCardText>
                This is an onClick based JavaScript game where it gives each crystal a randomly generated whole value, which you then need to meet the target number.
              </MDBCardText>
              <MDBBtn color="white" size="md">
                <a href="https://jarrenpatao.github.io/unit-4-game">Crystal Clicker</a>
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
          <hr />
          {/* Objectional Quiz */}
          <MDBCard>
            <MDBCardImage
              src="https://i.imgur.com/tqXoNHF.jpg"
              alt="Trivia Game: Mostly Opinionated"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <MDBCardTitle tag="h5">Trivia Game: E = MCHammer</MDBCardTitle>
              <MDBCardText>
                This is a JavaScript based trivia game where most of the questions are opinionated, but it works with jQuery click events and setTimeouts.
              </MDBCardText>
              <MDBBtn color="white" size="md">
                <a href="https://jarrenpatao.github.io/TriviaGame">Opinionated Trivia</a>
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
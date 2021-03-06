import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle} from "mdbreact";
import React from "react";
import "../../assets/css/style.css";
import NavTabs from "../../components/NavTabs";


function Projects() {
  return (
    <div>
    <NavTabs />
    <hr />
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <h3 className="projTitle">Deployed Collaborative Projects</h3>
            <hr />
            {/* Project 3 : Fullstack-Network */}
            <MDBCard>
              <MDBCardImage
                src="http://i103.photobucket.com/albums/m130/minibalogna00/FSN_1.png"
                alt="Fullstack-Network | Hosted by Heroku"
                top
                hover
                overlay="white-slight"
              />
              <MDBCardBody color="dark">
                <MDBCardTitle tag="h5">Fullstack-Network</MDBCardTitle>
                <MDBCardText className="bt">
                Fullstack-Network was created by <a href="https://www.github.com/orionabrams" target="_blank" rel="noopener noreferrer">Orion</a>, <a href="https://www.github.com/jkawahara" target="_blank" rel="noopener noreferrer">John</a>, <a href="https://www.github.com/Momo0532" target="_blank" rel="noopener noreferrer">Jason</a>, and <a href="https://www.github.com/jarrenpatao" target="_blank" rel="noopener noreferrer">myself</a> to help organize a set of lessons prevalent to boot camps.
                <hr />
                  Main technologies used to create Fullstack-Network were:<br />
                  <ul>
                    <li>React.js</li>
                    <li>Express.js</li>
                    <li>SQL/MySQL</li>
                    <li>Material Design for Bootstrap / MDBReact</li>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>Passport</li>
                    <li>MVC Framework</li>
                    <li>Chart.js</li>
                  </ul>
                </MDBCardText>
                <MDBBtn color="white" size="md">
                  <a href="https://fullstack-network.herokuapp.com/" target="_blank" rel="noopener noreferrer">Coordinate Lessons</a>
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
            <hr />
            {/* Project 2 : Bill¥ */}
            <MDBCard>
              <MDBCardImage
                src="https://i103.photobucket.com/albums/m130/minibalogna00/BSS.png"
                alt="Bill¥: Payment Assistant | Hosted by Heroku"
                top
                hover
                overlay="white-slight"
              />
              <MDBCardBody>
                <MDBCardTitle tag="h5">Bill¥: Payment Assistant</MDBCardTitle>
                <MDBCardText>
                  Bill¥ is a web application built with a unified bill system in mind. This project is still a work in progress. Created with <a href="https://github.com/Hellsrevenge/" target="_blank" rel="noopener noreferrer">Varvara</a> and <a href="https://github.com/mpoblete27/" target="_blank" rel="noopener noreferrer">Mickey</a>.
                  <hr />
                  Main technologies used to create Bill¥ were:<br />
                  <ul>
                    <li>SQL/MySQL</li>
                    <li>Sequelize</li>
                    <li>Server Migrations</li>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>Passport</li>
                    <li>Travis</li>
                  </ul>
                </MDBCardText>
                <MDBBtn color="white" size="md">
                  <a href="https://billy2019.herokuapp.com" target="_blank" rel="noopener noreferrer">Track Some Bills</a>
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
            <hr />
            {/* Project 1 : Rupert */}
            <MDBCard>
            <MDBCardImage
              src="https://i103.photobucket.com/albums/m130/minibalogna00/RSS.png"
              alt="Rupert: Movie Companion | Hosted by Heroku"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody color="dark">
              <MDBCardTitle tag="h5">Rupert: Movie Companion</MDBCardTitle>
              <MDBCardText>
                Rupert was created by <a href="https://www.github.com/orionabrams" target="_blank" rel="noopener noreferrer">Orion</a>, <a href="https://www.github.com/amandamurillo" target="_blank" rel="noopener noreferrer">Amanda</a>, <a href="https://www.github.com/zimanzm" target="_blank" rel="noopener noreferrer">Ziman</a>, and <a href="https://www.github.com/jarrenpatao" target="_blank" rel="noopener noreferrer">myself</a> to help find top movies that you might be looking for.
                <hr />
                Main technologies used to create Rupert were:<br />
                <ul>
                  <li>Firebase</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>Twitter Bootstrap</li>
                  <li>API</li>
                </ul>
              </MDBCardText>
              <MDBBtn color="white" size="md">
                <a href="https://rupert-movie-companion.herokuapp.com/" target="_blank" rel="noopener noreferrer">Go Ask Rupert</a>
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
          <hr />
          </MDBCol>

          {/* GitHub */}
          <MDBCol md-6>
            <h3 className="projTitle">Personal Projects</h3>
            <hr />
            <MDBCard>
              <MDBCardImage
                src="https://i.imgur.com/ebx84T0.jpg"
                alt="Legends : Aria"
                top
                hover
                overlay="white-slight"
              />
              <MDBCardBody>
                <MDBCardTitle tag="h5">Legends : Aria - JavaScript RPG Game</MDBCardTitle>
                <MDBCardText>
                  This is a passion project of mine where you can play the start of a game that I am currently developing in my off times. It shows a depth of complex job system with 60+ classes programmed. This project is still under development and will be made available for free when I am completed. To run this locally you can download the game and run it with the http-server node module.<br />
                  -<br />
                  Currently I am working primarily on the story and will continue to edit the game when I feel as if the story has good development.
                </MDBCardText>
                <MDBBtn color="white" size="md">
                  <a href="https://www.github.com/jarrenpatao/Aria">Source Code</a>
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
            <hr />
            <MDBCard>
            <MDBCardImage
              src="http://i103.photobucket.com/albums/m130/minibalogna00/Screen%20Shot%202019-02-01%20at%207.33.44%20PM.png"
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
              src="http://i103.photobucket.com/albums/m130/minibalogna00/Screen%20Shot%202019-02-01%20at%208.10.20%20PM.png"
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
        <hr /><br />
      </MDBContainer>
    </div>
  );
}
export default Projects;
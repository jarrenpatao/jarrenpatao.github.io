// ------------------------------ Main Dependencies ------------------------------
import { MDBContainer, MDBRow, MDBCol, Jumbotron } from "mdbreact";
import React from "react";
// ---------------------------------- Navi ---------------------------------------
import NavTabs from "../../components/NavTabs";
// ------------------------------ Frills ------------------------------
import { ParallaxBanner } from 'react-scroll-parallax';
import "../../assets/css/style.css";



function Home() {
  return (
    
    <div>
    <NavTabs />
    <MDBContainer>
      <MDBRow>
        <MDBCol sm="1"></MDBCol>
        <MDBCol sm="10">
          <img className="profPic" alt="Cheers!" src="http://i103.photobucket.com/albums/m130/minibalogna00/6W7Y9721.jpg" />
          <p className="aboutMe">
            Having moved from Hawaii, I've come to see the amazing world of tech that lives here in the Bay area. My passion lives in full stack with a focus on UX/UI. The user experience is what our community sees and feels, but the functionality is what drives us. 
          </p>
          <blockquote className="blockquote">
            "People ignore design that ignores people." - <b>Frank Chimero</b>
          </blockquote>
          <p className="aboutMe">
            <strong>About me :</strong> Full Stack Developer - MongoDB/SQL, express.js (Web Server), React.js, Node.js.
          </p>
            <br />
          <div className="floatLeft">
          <p className="aboutMe">  
            Other technologies I've used are <i>HTML5/CSS3, JS, APIs, Twitter Bootstrap, Handlebars, MobX, jQuery, Firebase, SQL/MySQL, Sequelize, and MVC</i> 
          </p>
          </div>
        </MDBCol>
      </MDBRow>
      <MDBCol sm="1"></MDBCol>
      </MDBContainer>
      {/*
      <div className="spacer"></div>
      <MDBRow>
        <MDBCol>
          <ParallaxBanner
            className="your-class"
            layers={[{
              image: 'https://i.imgur.com/Pjusw36.jpg',
              amount: 0.1,
              slowerScrollRate: false,
            },
            {
              image: 'https://i.imgur.com/Pjusw36.jpg',
              amount: 0.6,
              slowerScrollRate: false,
            },]}
            style={{
                height: '300px',
                width: '100%',
            }}
            >
            
          </ParallaxBanner>
        </MDBCol>
      </MDBRow>
      <div className="spacer">
        <Jumbotron>
          <h1>Connect with me!</h1>
        </Jumbotron>
        
      </div>
      */}
    </div>
  );
}
export default Home;
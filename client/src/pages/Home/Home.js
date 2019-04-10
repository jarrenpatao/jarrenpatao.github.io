// ------------------------------ Main Dependencies ------------------------------
import React from "react";
import { MDBContainer, MDBRow, MDBCol, Jumbotron } from "mdbreact";
import { ParallaxBanner } from "react-scroll-parallax";
// ---------------------------------- Navi ---------------------------------------
import NavTabs from "../../components/NavTabs";
import AnimName from "../../components/AnimName/AnimName.js"
// ------------------------------ Frills ------------------------------
import "../../assets/css/style.css";
import userIcon from "./userIcon.svg";
import paraOne from "./IMG_0207.JPG";
import cardOne from "./IMG_0209.JPG";
import cardTwo from "./IMG_0211.JPG";
import cardThree from "./IMG_0210.JPG";


function Home() {

  var inPad = 50;
  return (
    
    <div>
    <NavTabs />
    <MDBContainer>

      {/* -------------------- Splash -------------------- */}
      <MDBRow>
        <MDBCol sm="1"></MDBCol>
        <MDBCol sm="10">
          <MDBRow>
            <AnimName />
          </MDBRow>
          <MDBRow>
            <img id="uifp" src={userIcon} />
          </MDBRow>
        </MDBCol>
        <MDBCol sm="1"></MDBCol>
      </MDBRow>

      {/* -------------------- Body -------------------- */}
      <MDBRow>
        <MDBCol sm="1"></MDBCol>
        <MDBCol sm="10">
          <MDBRow className="aboutMeBody">
            <img className="profPic" alt="Cheers!" src="http://i103.photobucket.com/albums/m130/minibalogna00/6W7Y9721.jpg" />
            <p className="aboutMe floatleft">
              Aloha! Having moved from Hawaii, I've come to see the amazing world of tech that lives here in the Bay area. My passion lives in full stack with a focus on front-end web development. Primary tech stack used - MongoDB/SQL, express.js (Web Server), React.js, Node.js.
            </p>
            <div className="floatLeft">
              <p className="aboutMe">  
                Other technologies I've used are <i>HTML5/CSS3, SCSS, Javascript, jQuery, APIs, Twitter Bootstrap, Handlebars, MobX, React Native, Expo, Firebase, SQL/MySQL, Sequelize, and MVC</i> 
              </p>
            </div>
            <blockquote className="blockquote">
              "People ignore design that ignores people." - <b>Frank Chimero</b>
            </blockquote>
          </MDBRow>
        </MDBCol>
      </MDBRow>
      <MDBCol sm="1"></MDBCol>
      <hr />


    </MDBContainer>
      
      <div className="spacer">
        <h3 id="secTwo">coding ideals</h3>
      </div>
     
      <div className="amc">
        <MDBRow style={{
          "margin": inPad
        }}>
          <h1></h1>
        </MDBRow>
        <MDBRow style={{
          "margin": inPad
        }}>
          <MDBCol md="4">
            {/* Card */}
            <div className="card card-cascade narrower">
              {/* Card image */}
              <div className="view view-cascade overlay">
                <img className="card-img-top" src={cardOne} alt="Card cap" />
                <div className="mask rgba-white-slight"></div>
              </div>

              {/* Card content */}
              <div className="card-body card-body-cascade">
                <h5 className="blue-text pb-2 pt-1 msf">
                  <i className="fas fa-search"></i> focus
                </h5>
                <p className="card-text">
                  Designs with the user experience in mind. Using micro-animations to capture the user in specific areas.
                </p>
              </div>
            </div>
          </MDBCol>

          <MDBCol md="4">
            {/* Card */}
            <div className="card card-cascade narrower">
              {/* Card image */}
              <div className="view view-cascade overlay">
                <img className="card-img-top" src={cardTwo} alt="Card cap" />
                <div className="mask rgba-white-slight"></div>
              </div>

              {/* Card content */}
              <div className="card-body card-body-cascade">
                <h5 className="blue-text pb-2 pt-1 msf">
                  <i className="fas fa-balance-scale"></i> balance
                </h5>
                <p className="card-text">
                  Always striving for balance in features. Never settling on a single design knowing that trends and audiences change.
                </p>
              </div>
            </div>
          </MDBCol>

          <MDBCol md="4">
            {/* Card */}
            <div className="card card-cascade narrower">
              {/* Card image */}
              <div className="view view-cascade overlay">
                <img className="card-img-top" src={cardThree} alt="Card cap" />
                <div className="mask rgba-white-slight"></div>
              </div>

              {/* Card content */}
              <div className="card-body card-body-cascade">
                <h5 className="blue-text pb-2 pt-1 msf">
                  <i className="fas fa-object-group"></i> arrangement
                </h5>
                <p className="card-text">
                  Carefully curated content because your website is an experience. Building simple yet powerful website designs.
                </p>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </div>
      {/*<ParallaxBanner
        layers={[
          {
            image: paraOne,
            amount: 0.1,
          },
          {
            image: paraOne,
            amount: 0.2,
          },
        ]}
        style={{
          height: '500px',
        }}
      >
        <h1>Banner Children</h1>
    </ParallaxBanner>*/}
    </div>
  );
}
export default Home;
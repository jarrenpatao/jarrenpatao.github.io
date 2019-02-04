// ------------------------------ Main Dependencies ------------------------------
// import { React, Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import React from "react";
// ------------------------------ Frills ------------------------------
import { Parallax } from "react-parallax";
// import anime from 'lib/anime.es.js';
import "../../assets/css/index.css"


function Home() {
  return (
    
    <div>
    <hr />
    <Parallax
      // blur={5}
      bgImage={require('../../assets/images/myLogoWide.png')}
      bgImageAlt="My Logo"
      strength={200}
      borderRadius={20}
      className="logoLimit">
    <div className="paraBlock"></div>
    </Parallax>
    <br />
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
            <strong>About me :</strong> MERN Stack Developer - MongoDB, Express (Web Server), React.js, Node.js.
          </p>
            <br />
          <div className="floatLeft">
          <p className="aboutMe">  
            Other technologies I've used are <i>HTML5/CSS3, JS, APIs, Twitter Bootstrap, Handlebars, MobX, jQuery, Firebase, SQL/MySQL, Sequelize, and MVC</i> 
            <br />
          </p>
          </div>
        </MDBCol>
      </MDBRow>
      <MDBCol sm="1"></MDBCol>
      </MDBContainer>
      <MDBRow>
      <MDBCol>
        <br />
        
          {/* <p>Lorem ipsum dolor amet 8-bit squid everyday carry iPhone. Vice jianbing marfa synth fam asymmetrical vaporware copper mug food truck keffiyeh wolf photo booth literally seitan. Tofu banh mi hashtag fanny pack listicle. Umami before they sold out affogato prism four loko letterpress disrupt flexitarian health goth biodiesel gastropub cronut. Vape ethical humblebrag yuccie cornhole wolf 90's. Banjo pug VHS asymmetrical beard messenger bag marfa knausgaard freegan tousled pickled butcher.
          <br /><br />
          Lyft deep v iPhone biodiesel organic trust fund, letterpress skateboard butcher post-ironic mustache. Knausgaard XOXO put a bird on it street art mlkshk biodiesel. Fanny pack man braid thundercats keffiyeh hexagon, sriracha portland before they sold out cred. Squid tote bag enamel pin salvia cliche hell of, crucifix af forage gluten-free narwhal. Oh. You need a little dummy text for your mockup? How quaint. I bet you’re still using Bootstrap too…</p> */}
        </MDBCol>
      </MDBRow>
    </div>
  );
}
export default Home;
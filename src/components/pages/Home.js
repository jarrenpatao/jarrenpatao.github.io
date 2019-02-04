// import { React, Component } from "react";
import { MDBJumbotron, MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBNavbarNav, MDBCollapse, MDBNavItem, MDBNavLink, MDBFormInline, MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import React from "react";
import { Parallax } from "react-parallax";
import "../../assets/css/index.css"


function Home() {
  return (
    
    <MDBContainer>
    <hr />
      <MDBRow>
        <MDBCol>
          <img className="profPic" alt="Cheers!" src="http://i103.photobucket.com/albums/m130/minibalogna00/6W7Y9721.jpg" />
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
            <br /><hr />
            I'm also into creative stuff in general like music and photography, but most of all I love food.
          </p>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
        <Parallax
          // blur={5}
          bgImage={require('../../assets/images/AOE2.jpg')}
          bgImageAlt="Haiku Mill | Maui, HI"
          strength={150}
          borderRadius={20}>
          <div className="paraBlock"></div>
        </Parallax>
        <br />
          {/* <p>Lorem ipsum dolor amet 8-bit squid everyday carry iPhone. Vice jianbing marfa synth fam asymmetrical vaporware copper mug food truck keffiyeh wolf photo booth literally seitan. Tofu banh mi hashtag fanny pack listicle. Umami before they sold out affogato prism four loko letterpress disrupt flexitarian health goth biodiesel gastropub cronut. Vape ethical humblebrag yuccie cornhole wolf 90's. Banjo pug VHS asymmetrical beard messenger bag marfa knausgaard freegan tousled pickled butcher.
          <br /><br />
          Lyft deep v iPhone biodiesel organic trust fund, letterpress skateboard butcher post-ironic mustache. Knausgaard XOXO put a bird on it street art mlkshk biodiesel. Fanny pack man braid thundercats keffiyeh hexagon, sriracha portland before they sold out cred. Squid tote bag enamel pin salvia cliche hell of, crucifix af forage gluten-free narwhal. Oh. You need a little dummy text for your mockup? How quaint. I bet you’re still using Bootstrap too…</p> */}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
export default Home;
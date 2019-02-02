// import { React, Component } from "react";
import { MDBJumbotron, MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBNavbarNav, MDBCollapse, MDBNavItem, MDBNavLink, MDBFormInline, MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import React from "react";


function Contact() {
  return (
    
    <MDBContainer>
    <hr />
      <div>
      <MDBRow className="my-5">
          <MDBCol md="6">
            <form action="https://formspree.io/jarrenpatao@gmail.com" method="POST">
              <p className="h5 text-center mb-4">Contact me here!</p>
              <div className="grey-text">
                <MDBInput
                  label="Your name"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                  name="_replyto"
                />
                <MDBInput
                  label="Subject"
                  icon="tag"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  type="textarea"
                  rows="2"
                  label="Your message"
                  icon="pencil-alt"
                />
              </div>
              <div className="text-center">
                <MDBBtn
                  outline color="secondary"
                  type="submit"
                  value="Send"
                >
                  Send <MDBIcon icon="paper-plane" className="ml-1" />
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </div>
    </MDBContainer>
  );
}
export default Contact;
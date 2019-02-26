import { MDBBtn, MDBInput, MDBIcon, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import React from "react";
import NavTabs from "../../components/NavTabs";


function Contact() {
  return (
    <div>
    <NavTabs />
    <MDBContainer>
    <hr />
      <div className="contactBack">
      <MDBRow className="my-5">
          <MDBCol>
            <form action="https://formspree.io/jarrenpatao@gmail.com" method="POST">
              <p className="h5 text-center mb-4">Contact me here!</p>
              <div className="black-text">
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
                  name="_subject"
                />
                <MDBInput
                  type="textarea"
                  rows="2"
                  label="Your message"
                  icon="pencil-alt"
                  name="name"
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
      <hr /><br />
    </MDBContainer>
    </div>
  );
}
export default Contact;
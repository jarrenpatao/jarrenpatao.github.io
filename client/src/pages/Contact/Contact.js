import { MDBContainer } from "mdbreact";
import React from "react";
import NavTabs from "../../components/NavTabs";
import ContactForm from "../../components/ContactForm/ContactForm";


function Contact() {
  return (
    <div>
    <NavTabs />
    <MDBContainer>
      <hr />
        <ContactForm />
      <hr /><br />
    </MDBContainer>
    </div>
  );
}
export default Contact;
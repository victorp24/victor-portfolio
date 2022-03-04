import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact-form.style.css";

const ContactForm = () => {
  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3">CONTACT</h1>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a href="mailto:vicparangue@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger" title="vicparangue@gmail.com">
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.linkedin.com/in/victor-angelo-parangue/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Visit my LinkedIn page">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://github.com/victorp24" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-dark" title="Take a peek at my projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
            {/* <div className="m-2">
              <a href="https://www.facebook.com/victor.parangue/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Add me on FB">
                  <i className="fab fa-facebook-square"></i> Facebook
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://instagram.com/vic.par" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-info" title="Let's connect on Insta">
                  <i className="fab fa-instagram"></i> Instagram
                </Button>
              </a>
            </div> */}
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default ContactForm;
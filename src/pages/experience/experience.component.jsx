import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import Tilt from 'react-tilt';
import L_TASKTOP from "../../assets/img/experience/tasktop.png";
import L_SAMSUNG from "../../assets/img/experience/samsung.png";
import L_MASTERCARD from "../../assets/img/experience/mastercard.png";

import "./experience.style.css";

const Experience = () => {
    return (
        <div id='experience'>
            <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
            <Jumbotron className="jumbo-style">
                <Container>
                    <Tilt options={{max: 25}}>
                        <Card>
                            <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                                <Card.Img variant="top" className="img-resize" src={L_MASTERCARD} alt="Mastercard logo" />
                            </Card.Header>
                            <Card.Body className="d-flex justify-content-center flex-column">
                                <div>
                                <Card.Title className="text-center">Software Engineer Intern</Card.Title>
                                </div>
                                <div>
                                <Card.Text className="text-center style">
                                    <strong>Division:</strong> Operations and Technology Team
                                    <br /><br />
                                    <strong>Technologies:</strong> Java, Spring, Splunk, Chef Habitat, and Jenkins
                                    <br />
                                    <strong>Duration:</strong> September 2021 - May 2022
                                </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Tilt>
                </Container>
            </Jumbotron>
            <Jumbotron className="jumbo-style">
                <Container>
                    <Tilt options={{max: 25}}>
                        <Card>
                            <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                                <Card.Img variant="top" className="img-resize" src={L_TASKTOP} alt="Tasktop logo" />
                            </Card.Header>
                            <Card.Body className="d-flex justify-content-center flex-column">
                                <div>
                                <Card.Title className="text-center">Junior Software Engineer</Card.Title>
                                </div>
                                <div>
                                <Card.Text className="text-center style">
                                    <strong>Division:</strong> Tasktop Hub Team
                                    <br /><br />
                                    <strong>Technologies:</strong> Java, Spring Boot, AngularJS, JUnit, Jest and Selenium
                                    <br />
                                    <strong>Duration:</strong> January - August 2021 
                                </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Tilt>
                </Container>
            </Jumbotron>
            <Jumbotron className="jumbo-style">
                <Container>
                    <Tilt options={{max: 25}}>
                        <Card>
                            <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                                <Card.Img variant="top" className="img-resize" src={L_SAMSUNG} alt="Samsung logo" />
                            </Card.Header>
                            <Card.Body className="d-flex justify-content-center flex-column">
                                <div>
                                <Card.Title className="text-center">Junior Escalations Engineer</Card.Title>
                                </div>
                                <div>
                                <Card.Text className="text-center style">
                                    <strong>Division:</strong> B2B Operations
                                    <br /><br />
                                    <strong>Technologies:</strong> Java, Android Development and the Samsung Knox SDK
                                    <br />
                                    <strong>Duration:</strong> May - December 2020
                                </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Tilt>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Experience;

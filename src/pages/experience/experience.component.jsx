import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import Tilt from 'react-tilt';
import L_TASKTOP from "../../assets/img/experience/tasktop.png";
import L_SAMSUNG from "../../assets/img/experience/samsung.png";

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
                                <Card.Img variant="top" className="img-resize" src={L_TASKTOP} alt="Accenture logo" />
                            </Card.Header>
                            <Card.Body className="d-flex justify-content-center flex-column">
                                <div>
                                <Card.Title className="text-center">Junior Software Engineer</Card.Title>
                                </div>
                                <div>
                                <Card.Text className="text-center style">
                                    <strong>Division:</strong> Tasktop Hub Team
                                    <br /><br />
                                    <strong>Description:</strong> Develop, test, and maintain Tasktop Hub features, development tools, and frameworks. Perform software testing to ensure the quality and stability of features in development.
                                    <br />
                                    <strong>Technologies:</strong> Java, Spring Boot, AngularJS, JUnit, Jest and Selenium
                                    <br />
                                    <strong>Duration:</strong> January 2021 - August 2021
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
                                <Card.Img variant="top" className="img-resize" src={L_SAMSUNG} alt="Accenture logo" />
                            </Card.Header>
                            <Card.Body className="d-flex justify-content-center flex-column">
                                <div>
                                <Card.Title className="text-center">Junior Escalations Engineer</Card.Title>
                                </div>
                                <div>
                                <Card.Text className="text-center style">
                                    <strong>Division:</strong> B2B Product Support Team (Knox SDK)
                                    <br /><br />
                                    <strong>Description:</strong> Developed Android Applications to reproduce enterprise partners' issues with the Samsung Knox SDK. Troubleshot issues ranging from Knox product configuration to API support for MDM solutions.
                                    <br />
                                    <strong>Technologies:</strong> Java, Android Development and the Samsung Knox SDK
                                    <br />
                                    <strong>Duration:</strong> May 2020 - December 2020
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

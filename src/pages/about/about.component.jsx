import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Profile from '../../assets/img/profile/profile.JPG';
import './about.style.css';

const About = () => {
    return (
        <div id='about'>
            <div className="about">
                <h1 className='pt-3 text-center font-details pb-3'>ABOUT ME</h1>
                <Container>
                    <Row className="pt-3 pb-5 align-items-center">
                        {/* Profile Picture */}
                        <Col xs={12} md={6}>
                            <Row className="justify-content-center mb-2 mr-2">
                                <Image className="profile justify-content-end p-2" alt="profile" src={Profile}/>
                            </Row>
                        </Col>
                        {/* Personal Description */}
                        <Col xs={12} md={6}>
                            <Row className="align-items-start p-4 my-details rounded">
                                {/* Description */}
                                Hey there! My name is <strong>&nbsp;Victor Angelo Parangue.</strong> I am a 4th year Computer Engineering student currently studying at the University of British Columbia.
                                <br /><br />
                                Through my personal projects, university courses, and 28 months of co-op experience, I discovered my passion for Software Engineering. I love learning about the software development lifecycle. I enjoy working full-stack and being responsible for delivering features and products end-to-end.
                                <br /><br />
                                Outside of school and work, I enjoy participating in hackathons and creating solutions that tackle pressing problems in today's world. My other hobbies include playing basketball, cooking, and searching for the best food places in the city!
                                <br /><br />
                                <Row>
                                    {/* Button links */}
                                    <Col className="d-flex justify-content-center flex-wrap">
                                        <div>
                                            <a href="#contact">
                                                <Button className="m-2" variant="outline-success"><i className="fas fa-envelope-square"></i> Let's talk</Button>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="https://github.com/victorp24" target="_blank">
                                                <Button className="m-2" variant="outline-dark"><i className="fab fa-github-square"></i> GitHub</Button>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="https://www.linkedin.com/in/victor-angelo-parangue/" target="_blank">
                                                <Button className="m-2" variant="outline-primary"><i className="fab fa-linkedin"></i> LinkedIn</Button>
                                            </a>
                                        </div>
                                    </Col>
                                </Row>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    )
}

export default About;

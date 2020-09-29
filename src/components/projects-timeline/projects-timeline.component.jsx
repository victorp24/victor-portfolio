import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import L_DETRON from "../../assets/img/projects/de-tron.png";
import L_RAPIDSERVE from "../../assets/img/projects/rapidserve.png";
import L_WHOSGOTNEXT from "../../assets/img/projects/whosgotnext.png";
import L_BABYVISION from "../../assets/img/projects/babyvision.png";
import L_ROBOTICCAR from "../../assets/img/projects/roboticcar.png";
import L_DANCINGROBOT from "../../assets/img/projects/dancingrobot.png";
import L_NBAFANTASYLEAGUE from "../../assets/img/projects/nbafantasyleague.png";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import Image from "react-bootstrap/Image";
import L_PYTHON from "../../assets/img/skills/python.svg";
import L_C from "../../assets/img/skills/c.svg";
import L_CIRCUIT from "../../assets/img/skills/circuit.png";
import L_FLASK from "../../assets/img/skills/flask.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import L_ANDROID from "../../assets/img/skills/android.svg";
import L_PHP from "../../assets/img/skills/php.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_ORACLE from "../../assets/img/skills/oracle.svg";

import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>

          {/* NBA Fantasy League */}
          <ImageEvent date="April 2020" className="text-center" text="NBA Fantasy League" src={L_NBAFANTASYLEAGUE} alt="NBA Fantasy League">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> An online NBA Fantasy League web application where users can assemble imaginary teams of real players from the NBA. Each team’s performance depends on the statistical performance of those players in real-time NBA games.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>User registration and login</li>
                          <li>Create and join fantasy leagues</li>
                          <li>Build teams and sign free agents</li>
                          <li>Request and perform trades with other teams</li>
                          <li>Team customization and branding</li>
                        </ul>
                        <hr />
                        <strong>Technologies used:</strong><br /><br />
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_JAVASCRIPT} alt="JavaScript" rounded className="image-style1 m-1"></Image> JavaScript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_HTML5} alt="React Native" rounded className="image-style1 m-1"></Image> HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_CSS3} alt="CSS3" rounded className="image-style1 m-1"></Image> CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_PHP} alt="PHP" rounded className="image-style1 m-1"></Image> PHP
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_ORACLE} alt="Oracle and SQL" rounded className="image-style1 m-1"></Image> Oracle and SQL
                            </span>
                          </li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="text-center">
                <UrlButton href="https://www.bit.ly/2ZdTKKw" target="_blank">
                  READ MORE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* DE-TRON */}
          <ImageEvent date="February 2020" className="text-center" text="DE-TRON" src={L_DETRON} alt="DE-TRON">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A hardware accelerated and distributed multiplayer game using 4 DE1-SoC microcontrollers. This is a modern take on the classic retro game TRON.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Face Recognition Login and Registration</li>
                          <li>ELO Rating System with an Online Leaderboard</li>
                          <li>Responsive Touchscreen Interface</li>
                          <li>Multiplayer Mode: Up to 4 players</li>
                          <li>Singleplayer Mode: Up to 3 bots</li>
                        </ul>
                        <hr />
                        <strong>Technologies used:</strong><br /><br />
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_PYTHON} alt="Python and OpenCV" rounded className="image-style m-1"></Image> Python and OpenCV
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_C} alt="C" rounded className="image-style m-1"></Image> C
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_REACT} alt="React" rounded className="image-style1 m-1"></Image> React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_CIRCUIT} alt="Verilog / VHDL" rounded className="image-style1 m-1"></Image> SystemVerilog
                            </span>
                          </li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="text-center">
                <UrlButton href="https://www.bit.ly/3m0xTQn" target="_blank">
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* RapidServe */}
          <ImageEvent date="January 2020" className="text-center" text="RapidServe (nwHacks 2020 Award Winner)" src={L_RAPIDSERVE} alt="RapidServe">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A mobile app that streamlines bill payment at restaurants by using a QR code/scanner at each table. Awarded the 'Best Use of MongoDB Atlas' award at nwHacks 2020, the largest hackathon in all of Western Canada.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Customer Registration and Login</li>
                          <li>Waiter/Waitress Registration and Login</li>
                          <li>QR Code Scanning</li>
                          <li>Waiter/Waitress Order Registration</li>
                          <li>Customer Payment Interface</li>
                          <li>Payment Notification and Receipt Generation</li>
                        </ul>
                        <hr />
                        <strong>Technologies used:</strong><br /><br />
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_REACT} alt="React Native" rounded className="image-style1 m-1"></Image> React Native
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_PYTHON} alt="Python" rounded className="image-style1 m-1"></Image> Python
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_FLASK} alt="Flask" rounded className="image-style1 m-1"></Image> Flask
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_MONGODB} alt="MongoDB" rounded className="image-style1 m-1"></Image> MongoDB
                            </span>
                          </li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="text-center">
                <UrlButton href="https://www.bit.ly/2ZdTKKw" target="_blank">
                  READ MORE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Who's Got Next? */}
          <ImageEvent date="November 2019" className="text-center" text="Who's Got Next?" src={L_WHOSGOTNEXT} alt="Who's Got Next?">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A mobile app that connects nearby users that want to play pick-up sport games in real-time.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>User Registration and Login through Facebook</li>
                          <li>Profile customization</li>
                          <li>Search for pick-up sport games near you</li>
                          <li>Create and host pick-up sport events</li>
                          <li>Receive push notifications about nearby events</li>
                        </ul>
                        <hr />
                        <strong>Technologies used:</strong><br /><br />
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_REACT} alt="React" rounded className="image-style1 m-1"></Image> React Native
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_NODE_JS} alt="Node.js" rounded className="image-style1 m-1"></Image> Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_EXPRESS} alt="Express" rounded className="image-style1 m-1"></Image> Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_MONGODB} alt="MongoDB" rounded className="image-style1 m-1"></Image> MongoDB
                            </span>
                          </li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="text-center">
                <UrlButton href="https://www.bit.ly/335Kg5e" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* BabyVision */}
          <ImageEvent date="April 2019" className="text-center" text="BabyVision" src={L_BABYVISION} alt="BabyVision">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A baby monitor web application with a live feed, a lullaby radio/night lights control panel, and displays room sensor data.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Live camera feed with face detection</li>
                          <li>Room safety analysis</li>
                          <li>Displays room temperature and humidity</li>
                          <li>Controllable lullaby radio and volume</li>
                          <li>Controllable night lights</li>
                        </ul>
                        <hr />
                        <strong>Technologies used:</strong><br /><br />
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_REACT} alt="React" rounded className="image-style m-1"></Image> React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_PYTHON} alt="Python" rounded className="image-style m-1"></Image> Python / OpenCV / Raspberry Pi
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_NODE_JS} alt="Node.js" rounded className="image-style m-1"></Image> Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_EXPRESS} alt="Express" rounded className="image-style m-1"></Image> Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_MONGODB} alt="MongoDB" rounded className="image-style1 m-1"></Image> MongoDB
                            </span>
                          </li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="text-center">
                <UrlButton href="https://github.com/victorp24/babyvision" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Line-following Robotic Car */}
          <ImageEvent date="March 2019" className="text-center" text="Line-Following Robotic Car" src={L_ROBOTICCAR} alt="Line-Following Robotic Car">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A robotic, self-driving car that can follow black lines and overcome tough obstacles.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Can drive itself and follow black lines</li>
                          <li>Able to overcome line gaps and sharp turns</li>
                          <li>Remote control mode through a mobile app</li>
                          <li>Can detect wall barriers and stop on its own</li>
                        </ul>
                        <hr />
                        <strong>Technologies used:</strong><br /><br />
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_PYTHON} alt="Python/RPi" rounded className="image-style m-1"></Image> Python and a Raspberry Pi
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_ANDROID} alt="Android" rounded className="image-style m-1"></Image> Android Development
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_CIRCUIT} alt="Hardware" rounded className="image-style m-1"></Image> Servo Motors / Ultrasonic and Optical Sensors
                            </span>
                          </li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </div>
          </ImageEvent>

          {/* Dancing Biped Robot */}
          <ImageEvent date="February 2019" className="text-center" text="Dancing Biped Robot" src={L_DANCINGROBOT} alt="Dancing Biped Robot">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A robot that can play music, perform a series of dances, and perform realistic eye animations with an LCD display.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Freestyle mode: Perform 6 dance moves in succession</li>
                          <li>Remote control mode: Control the dances via a keypad</li>
                          <li>Play a tune using high frequency buzzers</li>
                          <li>Show different eye animations per dance</li>
                        </ul>
                        <hr />
                        <strong>Technologies used:</strong><br /><br />
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_CIRCUIT} alt="Arduino" rounded className="image-style m-1"></Image> Arduino
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_CIRCUIT} alt="Hardware" rounded className="image-style m-1"></Image> Piezo Buzzers / Keypad
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_CIRCUIT} alt="Hardware" rounded className="image-style m-1"></Image> Servo Motors / LCD Display
                            </span>
                          </li>
                        </ul>
                        <hr />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/alamin2.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    
    <Container fluid className="home-about-section" id="about">
      <br />
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
               <span style={{color:"blue"}}> Introduce </span> Myself
            </h1>
            <p className="home-about-body">
            I'd like to work for a software company as a MERN Stack Web Developer, where I can use my web design, front-end programming, and back-end development talents to give excellent customer service. <br />
            I'd like to work for a software company as a MERN Stack Web Developer, where I can use my web design, front-end programming, and back-end development talents to give excellent customer service. <br />
             Looking for a position as a Junior Software Engineer at Limited, where my skills in developing clean code, testing, assuring separation of concerns, and designing for the specific needs of users will be valuable to the organization
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt className="imgHeight">
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Searching Me On</h1>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/alamin1246"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/md-al-amin-hossain-33371a241/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
             
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

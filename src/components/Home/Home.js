import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/alamin.png";
import ContactForm from "../ContactForm/ContactForm";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Button from "react-bootstrap/Button";
import resume from "../../Assets/../Assets/Resume of Md Al Amin Hossain.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Home() {
  const [width, setWidth] = useState(1200);
  // console.log(object);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi there!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Md. Al Amin Hossain</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <div className="mb-10">
        <br />
        <h2 style={{backgroundColor:"black",color:"blue"}}><marquee>MERN (MONGODB, EXPRESS.JS, REACT.JS, NODE.JS) STACK DEVELOPER</marquee> </h2>
         <Button
            variant="secondary"
            href={resume}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download My Resume
          </Button>
      </div>
      <br />
      <Home2 />
      <ContactForm />
    </section>
  );
}

export default Home;

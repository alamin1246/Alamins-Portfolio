import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import myProject1 from "../../Assets/myProject1.PNG";
import myProject2 from "../../Assets/myProject2.JPG";
import myProject3 from "../../Assets/myProject3.JPG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <p className="project-heading">
        I'd like to work for a software company as a MERN Stack Web Developer, 
        where I can use my web design, front-end programming, and back-end development talents to give excellent customer service.
         I'd like to work for a software company as a MERN Stack Web Developer, where I can use my web design, front-end programming, 
        and back-end development talents to give excellent customer service.
        </p>
        <h3 style={{ color: "white" }}>
         Recently I have worked in Several projects. Here I attached three project and details-
        </h3>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myProject1}
              isBlog={false}
              title="Computer Parts Manufacturer"
              description="-MERN Stack Project built on React.js, MongoDB Database, Express.js, Heroku, Bootstrap CSS, Custom 
              CSS.
               Manufacturer Admin Portal - where a business owner can save computer parts manufacturer, 
              Admin Manage Users, Admin Add Multiple Admin, Manage Products 
               Manufacturer Client Portal - clients can create profile, update profile, buy manufacturer products, 
              Feedback, Resume Build, Purchase Product
               Customers and administrators have access to a dynamic dashboard."
              link="https://computer-parts-manufactu-c5c5c.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myProject2}
              isBlog={false}
              title="Home Food Catering Service"
              description="- Project built on React.js, Fake Data Generate, REST API, Bootstrap CSS, Custom CSS.
               Customer Login, Signup and also Google, GitHub Login (Using Firebase and JWT)
               Customer Booking Services."
              link="https://alamins-home-food-catering-service.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myProject3}
              isBlog={false}
              title="Kids Toys Stock Management"
              description="-MERN Stack Project built on React.js, MongoDB Database, Express.js, Heroku, Tailwind CSS, Custom 
              CSS.
               Stock Management Portal - where a business person can save products, Add Products, Delete 
              Products, Update Product, View Products that means Manage Inventory 
               Admin have access to a dynamic dashboard."
              link="https://tangerine-figolla-1f58c9.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

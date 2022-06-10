import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am Md. Al Amin Hossain 
            from <span className="purple">East Hazi Nagar, Sarulia, Demra Dhaka,Bangladesh 1361</span>
            <br />I am a junior Web developer.
            <br />
            <br />
            I've worked on multiple web projects (ensured optimal security procedures) with node.js and MongoDB, 
            as well as two large MERN stack projects. Those helped me improve my technical ability and performance.
             I can guarantee you, however, that I am a quick learner, adaptable, and energetic individual who has solved 
             various programming challenges using JS and has a strong understanding of data structures and algorithms.
          </p>
          
          <footer>"Md. Al Amin Hossain"</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

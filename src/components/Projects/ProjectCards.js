import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="secondary" href={props.link} target="_blank" className="mb-2">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "Go to Live Website"}
        </Button>
        <Button variant="secondary" href={props.serverLink} target="_blank" className="mb-2">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "Github Server Side Link"}
        </Button>
        <Button variant="secondary" href={props.clientLink} target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "Github Client Side Link"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;

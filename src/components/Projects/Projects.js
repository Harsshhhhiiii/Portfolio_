import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import chatify from "../../Assets/Projects/chatify.png";
import Pshop from "../../Assets/Projects/Pshop.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="A Chat App where a use can securely register himself. It is a platform where the user can search and find a person registered and start to chat. It has real time messaging feature with socket.io implemented."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card  ">
            <ProjectCard 
              imgPath={Pshop}
              isBlog={false}
              title="Proshop"
              description="An Online shopping application where user can buy products. It has many feautures like a user can rate the product, add a comment. Apart from this it has a secure authentication system with paypal api integrated along with Admin functionality to malit more vast."
              ghLink=""
              demoLink=""
            />
          </Col>

     


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

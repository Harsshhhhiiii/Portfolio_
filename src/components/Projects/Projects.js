import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import chatify from "../../Assets/Projects/chatify.png";
import DSATUT from "../../Assets/Projects/DSATUT.png"

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
              ghLink="https://github.com/Harsshhhhiiii/Chatify"
              demoLink="https://chatify-kbmc.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DSATUT}
              isBlog={false}
              title="DSATUT"
              description="A Web App where a user can have a set of DSA questions which are commonly asked where user can bookmark the important questions to keep a track. It will further be developed to access the premium content after making a successfull payment ."
              ghLink="https://github.com/Harsshhhhiiii/dsa-tut"

              demoLink="https://dsa-tut.vercel.app/about"
            />
          </Col>
     


        </Row>
        
      </Container>
    </Container>
  );
}

export default Projects;

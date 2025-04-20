import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import chatify from "../../Assets/Projects/chatify.png";
import DSATUT from "../../Assets/Projects/DSATUT.png"
import ChatAssit from "../../Assets/Projects/ChatAssit.png";
import TranslatorAI from "../../Assets/Projects/TranslatorAI.png";
import CharityFund from "../../Assets/Projects/CharityFund.png";
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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ChatAssit}
              isBlog={false}
              title="ChatAssit"
              description="A basic AIAgent built with integration of Groq API Key which has the access to static messages chats of various groups about the compamies like Tasks, Sales and the provide suggestions to the user about incomplete and impotant discussions going in different groups. All the data sent through the backend is static currently ."
              ghLink="https://github.com/Harsshhhhiiii/ChatAssit"
              demoLink="https://chat-assit-git-researchify-harshits-projects-99ccb490.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TranslatorAI}
              isBlog={false}
              title="TranslatorAI"
              description="A Web App which takes login from google auth then will redirect to chat interface where the logged in user can send upload an image which should contain either hindi or english words .The Translator will extract the text from the image and present the text translator to the Alternate language in editable form. The Ui will surely get updates soon ."
              ghLink="https://github.com/Harsshhhhiiii/TranslatorAI"

              demoLink="https://translator-ai-nine.vercel.app/login"
            />
          </Col>
     


        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CharityFund}
              isBlog={false}
              title="CharityFund"
              description="A testing platform build with Node and Express for the backend and MongoDB for storing the successfull payment details along with the integration of Payment Gateway of Razorpay. Also using  Chakra UI along with react to build the frontend part. The user can donate from 1 - 10,000 rupees using all the provided functions from the Gateway. "
              ghLink="https://github.com/Harsshhhhiiii/HarshitCharityFund"
              demoLink="https://harshit-charity-fund.vercel.app/"
            />
          </Col>

          


        </Row>
        
      </Container>
    </Container>
  );
}

export default Projects;

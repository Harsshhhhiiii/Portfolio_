import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Harshit Pandey </span>
            staying in <span className="purple"> Hyderabad Telangana, India.</span>
            <br />
            <p>I am a Graduate from  IIT BHU (VARANASI).</p>
            <p>
              I have worked for <a href="https://www.breatheesg.com/" target="_blank" rel="noopener noreferrer">BreatheESG</a> - a product based startup as an SDET intern. I contributed from testing API to developing the same, modifying screens and adding events to perform Product Analytics for the platform.  
              <br />
              <br />
              {/* Added Download Button */}
              <Button 
                variant="primary" 
                href="/relieving_letter.pdf" 
                target="_blank" 
                download="Harshit_Pandey_Relieving_Letter.pdf"
              >
                Download Relieving Letter
              </Button>
            </p>
            <p>Then I joined TCS-Hyderabad (prime-role) where I was trained on building AI Agents (Langchain, Langgraph and RAG based). And now I am working in <span className="purple">AMD's</span> Devops team taking care of 20+ Production CIs and automating daily CI-CD operations tasks. </p>
            I have a great interest in problem solving and algorithm building well.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Watch Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
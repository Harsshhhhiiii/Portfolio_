import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Harshit Pandey </span>
            from <span className="purple"> Bokaro Jharkhand, India.</span>
            <br />
            I am an undergraduate student from  IIT BHU (VARANASI).
            <br />
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

          <p style={{ color: "rgb(155 126 172)" }}>
            Programmer: A Person that turns coffee into code.!{" "}
          </p>
          <footer className="blockquote-footer">Harshit Pandey</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

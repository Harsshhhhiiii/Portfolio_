import React from "react";
import { Col, Row } from "react-bootstrap";
import { VscCode } from "react-icons/vsc";
import {
  SiPostman,
  SiVercel,
  SiJenkins,
  SiGithubactions,
  SiPosthog,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <VscCode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithubactions />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPosthog />
      </Col>
    </Row>
  );
}

export default Toolstack;
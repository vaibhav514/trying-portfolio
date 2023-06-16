import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import water from "../../Assets/Projects/water.png";
import photo from "../../Assets/Projects/photo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
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
              imgPath={water}
              isBlog={false}
              title="Water Level Prediction"
              description="This project involves the development of a neural network system for detecting and predicting water level, which aims to get alert if for flood  . The system will use automatic techniques to detect water level and warn if water level is high."
              ghLink="https://github.com/vaibhav514/water-level-prediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={photo}
              isBlog={false}
              title="Photo Detection"
              description="an application service is developed that detects whether uploaded documents are photo and compresses them appropriately. The document will be removed if it does not contain a face, and the required documentation will be asked for"
              ghLink="https://github.com/vaibhav514/Photo-Detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

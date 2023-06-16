import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vaibhav Agrawal </span>
            from <span className="purple"> Varanasi, India.</span>
            <br /> I am a final year student pursuing a B.Tech
            in Computer and Science Engineering (Specialisation in Cyber Security and Digital Forensic) .
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Quotes
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Novels
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "In coding, innovation knows no bounds!"{" "}
          </p>
          <footer className="blockquote-footer">Vaibhav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

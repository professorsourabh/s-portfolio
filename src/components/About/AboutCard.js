import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sandeep Singh </span>
            from <span className="purple"> Mathura, India.</span>
            {/* <br /> I am  */}
            <br />
             I am currently employed as a software developer at
            Codenia Technologies .
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If code doesn't work, Just comment it 😊😃!!"{" "}
          </p>
          <footer className="blockquote-footer">Sandeep</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

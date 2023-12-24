import React from 'react'
import { IoLogoWindows } from "react-icons/io5";
import { FaUbuntu } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";

function OSstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
    <Col xs={4} md={2} className="tech-icons">
      <IoLogoWindows />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <FaUbuntu />
    </Col>
    
   
  </Row>
  )
}

export default OSstack

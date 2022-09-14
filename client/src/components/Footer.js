import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <Container fluid className="text-center">
      <hr></hr>
      <Row style={{ color: "white" }}>
        <Col className="mt-2 ml-1">
          <a href="/construction">
            <p>Returns & Exchanges</p>
          </a>
          <a href="/construction">
            <p>Shipping & Handling </p>
          </a>
          <a href="/construction">
            <p></p>
          </a>
        </Col>
        <Col className="mt-2">
          <a href="/construction">
            <p>Terms Of Service</p>
          </a>
          <a href="/construction">
            <p> FAQ</p>
          </a>
          <a href="/construction">
            <p> Privacy Policy</p>
          </a>
        </Col>
      </Row>
      <p className="text-center mt-4" style={{ color: "white" }}>
        © 2022 MernCaveHQ. All Rights Reserved.
      </p>
    </Container>
  );
}

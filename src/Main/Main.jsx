import React from "react";
import "./Main.css";
import { Container, Row, Col } from "react-bootstrap";

function Main() {
  return (
    <div>
      <div>
        <Container fluid="md">
          <Row>
            <Col>1 of 3</Col>
            <Col xs={5}>2 of 3 (wider)</Col>
            <Col>3 of 3</Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Main;

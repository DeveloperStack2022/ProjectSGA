import React from "react";
import { Col, Row } from "react-bootstrap";
import CreateParalelo from "../components/Paralelo/CreateParalelo";
export default function Paralelo() {
  return (
    <>
      <h2>Paralelo</h2>
      <Row>
        <Col sx={3}>
          <CreateParalelo />
        </Col>
        <Col></Col>
      </Row>
    </>
  );
}

import React from "react";
import FormMateria from "../components/Materia/CrateMateria";
import { Col, Row } from "react-bootstrap";
export default function Materia() {
  return (
    <>
      <h2>Materia</h2>
      <Row>
        <Col sm={5}>
          <FormMateria />
        </Col>
        <Col></Col>
      </Row>
    </>
  );
}

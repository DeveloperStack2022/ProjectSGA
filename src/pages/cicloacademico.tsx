import React from "react";
import CicloAcademicoForm from "../components/FormCicloAcademico";
import { Container, Row, Col } from "react-bootstrap";
export default function CicloAcademico() {
  return (
    <>
      <h2>Ciclo Academico form</h2>
      <Container>
        <Row>
          <Col md={"5"}>
            <CicloAcademicoForm />
          </Col>
        </Row>
      </Container>
    </>
  );
}

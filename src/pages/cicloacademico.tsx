import React from "react";
import CicloAcademicoForm from "../components/CicloAcademico/FormCicloAcademico";
import { Container, Row, Col } from "react-bootstrap";
export default function CicloAcademico() {
  return (
    <>
      <h2>Ciclo Academico </h2>
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

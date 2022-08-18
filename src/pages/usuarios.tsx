import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//componenst
import FormUsers from "../components/FormUsuarios";
import TableUsers from "../components/TableUser";
export default function Usuarios() {
  return (
    <>
      <h2>Usuarios</h2>
      <Container>
        <Row>
          <Col className="p-4 m-auto shadow-sm rounded-lg">
            <FormUsers />
          </Col>
          <Col>
            <TableUsers />
          </Col>
        </Row>
      </Container>
    </>
  );
}

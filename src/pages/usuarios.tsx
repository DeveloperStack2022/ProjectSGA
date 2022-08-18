import React, { useState, FormEvent } from "react";
import { Container, Row, Col, Stack, Form, Button } from "react-bootstrap";

//componenst
import FormUsers from "../components/FormUsuarios";
import TableUsers from "../components/TableUser";

export default function Usuarios() {
  const [State, setState] = useState<number>(0);
  const [Change, setChange] = useState<Boolean>(false);
  const [Picture, setPicture] = useState<string | null>();
  const [ImageData, setImageData] = useState<any>(null);

  const handleCheck = (val: number) => {
    setState(val);
    setChange(true);
  };

  //
  const onChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      console.log(file);
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImageData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <>
      <h2>Usuarios</h2>
      <Container>
        <Row>
          <Col className="p-4 m-auto shadow-sm rounded-lg">
            <Stack gap={2} className="col-md-5 mx-auto">
              <Button
                variant={State == 0 ? "primary" : "outline-primary"}
                onClick={() => handleCheck(0)}
              >
                Estudiante
              </Button>
              <Button
                variant={State == 1 ? "primary" : "outline-primary"}
                onClick={() => handleCheck(1)}
              >
                Docente
              </Button>
              {!Change && (
                <p className="h6 text-center text-muted">
                  Por defecto esta en Estudiante
                </p>
              )}
            </Stack>
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

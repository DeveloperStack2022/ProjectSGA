import { Form, Button, Row, Col, Stack } from "react-bootstrap";
import { useState } from "react";

const CreateMateria = () => {
  const [Active, setActive] = useState<number>(0);
  const handleClick = (valor: number) => {
    setActive(valor);
  };

  let dias = [
    {
      Nombre: "Juan",
    },
    {
      Nombre: "Andrea",
    },
    {
      Nombre: "Pedro",
    },
    {
      Nombre: "Noel",
    },
    {
      Nombre: "Cristian",
    },
    {
      Nombre: "Juan",
    },
    {
      Nombre: "Andrea",
    },
    {
      Nombre: "Pedro",
    },
    {
      Nombre: "Noel",
    },
    {
      Nombre: "Cristian",
    },
    {
      Nombre: "Noel",
    },
    {
      Nombre: "Cristian",
    },
  ];
  return (
    <Form className="border p-4 rounded">
      <Stack gap={2} className="col-md-5 mx-auto">
        <Button
          variant={Active == 0 ? "primary" : "outline-primary"}
          onClick={() => handleClick(0)}>
          Paralelo A
        </Button>
        <Button
          variant={Active == 1 ? "primary" : "outline-primary"}
          onClick={() => handleClick(1)}>
          Paralelo B
        </Button>
      </Stack>
      <p className="mt-4 mb-0">
        <b>Ciclo Academico:</b> CicloExample
      </p>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Docente</Form.Label>
        <Form.Select aria-label="Default select example">
          <option>Selecione el Docente</option>
          <option value="1">Docente Uno</option>
          <option value="2">Docente Dos</option>
          <option value="3">Docente Tres</option>
        </Form.Select>
      </Form.Group>

      <Form.Group controlId="formBasicPassword" className="mb-3">
        <Form.Label>Materia</Form.Label>
        <Form.Select aria-label="Default select example">
          <option>Selecione la Materia</option>
          <option value="1">Materia Uno</option>
          <option value="2">Materia Dos</option>
          <option value="3">Materia Tres</option>
        </Form.Select>
      </Form.Group>
      <h6>Asignar a estudiantes </h6>
      <hr />
      <Row className="mb-3">
        {dias.map((item) => (
          <Col className="col-sm-4">
            <Form.Group controlId={`check-item-${item.Nombre}`}>
              <Form.Check type="checkbox" label={item.Nombre} />
            </Form.Group>
          </Col>
        ))}
      </Row>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default CreateMateria;

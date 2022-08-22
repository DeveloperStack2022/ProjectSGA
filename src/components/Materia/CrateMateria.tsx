import { Form, Button, Row, Col, Stack } from "react-bootstrap";
const CreateMateria = () => {
  let dias = [
    {
      dia: "Lunes",
    },
    {
      dia: "Martes",
    },
    {
      dia: "Miercoles",
    },
    {
      dia: "Jueves",
    },
    {
      dia: "Viernes",
    },
  ];
  return (
    <Form className="border p-4 rounded">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <h6 className="mb-0">Horario</h6>
      <hr />
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Hora Inicial</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Hora Final</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Aula</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Stack direction="horizontal" gap={2}>
        {dias.map((item) => (
          <Form.Group className="mb-3" controlId={`check-item-${item.dia}`}>
            <Form.Check type="checkbox" label={item.dia} />
          </Form.Group>
        ))}
      </Stack>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default CreateMateria;

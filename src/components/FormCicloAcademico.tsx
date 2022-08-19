import { Form, Button } from "react-bootstrap";
const ComponentCicloAcademico = () => {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>ID</Form.Label>
        <Form.Control type="text" placeholder="ID" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control type="password" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Orden</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Estado</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Agregar
      </Button>
    </Form>
  );
};

export default ComponentCicloAcademico;

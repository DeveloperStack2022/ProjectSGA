import { Form, Button } from "react-bootstrap";

const FormUsers = () => {
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>Num Cl</Form.Label>
          <Form.Control type="text" placeholder="Enter number" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Enter number" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" placeholder="Enter number" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter number" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="****" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default FormUsers;

import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import { Row, Col, Stack, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
//
import { GetUsers } from "../features/usuarios";
import { useAppDispatch, useAppSelector } from "../hooks/useReducer";

function HomeComponent() {
  const dispatch = useAppDispatch();
  const { error, loading, users } = useAppSelector(
    (state) => state.userStudent
  );

  useEffect(() => {
    dispatch(GetUsers());

    return () => {};
  }, [dispatch]);

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Bienvenidos</Navbar.Brand>
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link href="#home">Home</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            <LinkContainer to="/signin">
              <Nav.Link>Sign in</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Row className="mt-5">
          <Col md={6} xs={6} className="p-4 m-auto shadow-sm rounded-lg">
            <Stack gap={2} className="col-md-5 mx-auto">
              <LinkContainer to="/students?paralelo=A">
                <Button variant="outline-primary">Paralelo A </Button>
              </LinkContainer>
              <LinkContainer to="/students?paralelo=B">
                <Button variant="outline-primary">Paralelo B </Button>
              </LinkContainer>
              <Button variant="light">Ingresar</Button>
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomeComponent;

// {!error &&
// users?.map((i) => (
// <Col md="2">
{
  /* <LinkContainer to={`/evaluacion?user=${i._id}`}> */
}
{
  /* <Card role="button"> */
}
{
  /* <Card.Img variant="top" src={i.img_url} /> */
}
{
  /* <Card.Footer>{i.nombre}</Card.Footer> */
}
{
  /* </Card> */
}
{
  /* </LinkContainer> */
}
{
  /* </Col> */
}
// ))}

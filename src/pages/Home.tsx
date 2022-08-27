import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
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
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#pricing">Entrenamiento</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>Sign in</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Row className="mt-5">
          {!error &&
            users?.map((i) => (
              <Col>
                <LinkContainer to={`/evaluacion?user=${i._id}`}>
                  <Card role="button">
                    <Card.Img variant="top" src={i.img_url} />
                    <Card.Footer>{i.nombre}</Card.Footer>
                  </Card>
                </LinkContainer>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
}

export default HomeComponent;

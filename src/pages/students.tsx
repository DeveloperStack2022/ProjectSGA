import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useReducer";
import { useSearchParams } from "react-router-dom";
import { GetUsers } from "../features/students";
import { Container, Row, Col, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const StudentsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();

  const usuarios = useAppSelector((state) => state.students.students);
  const errors = useAppSelector((state) => state.students.error);
  let paralelo = searchParams.get("paralelo");
  useEffect(() => {
    console.log(paralelo);
    dispatch(GetUsers(paralelo));
    return () => {};
  }, []);

  return (
    <>
      <h2>Students</h2>
      <Container>
        <Row>
          {!errors &&
            usuarios?.map((i) => (
              <Col md="2">
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
};

export default StudentsPage;

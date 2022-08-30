import React, { useEffect, useState } from "react";
import { GetNotasStudent } from "../api/users";
import { Container, Row, Col, Table } from "react-bootstrap";
type Notas = {
  _id: { $oid: string };
  id_student: string;
  calificacion: number;
  fallos: number;
};
type Response = {
  error: null | Error;
  loading: boolean;
  notas?: Notas[];
};
const HomePageDocente = () => {
  const [Notas, setNotas] = useState<Response>({
    error: null,
    loading: false,
  });
  useEffect(() => {
    GetNotasStudent().then((res) =>
      setNotas({ ...Notas, error: null, loading: false, notas: res })
    );

    return () => {};
  }, []);

  return (
    <>
      <h2>Home page Docente</h2>
      <Container>
        <Row>
          <Col>
            <Table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>id Student</th>
                  <th>Calificacion</th>
                  <th>fallos</th>
                </tr>
              </thead>
              <tbody>
                {Notas.notas?.map((i) => (
                  <tr>
                    <td>{i._id.$oid}</td>
                    <td>{i.id_student}</td>
                    <td>{i.calificacion}</td>
                    <td>{i.fallos}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default HomePageDocente;

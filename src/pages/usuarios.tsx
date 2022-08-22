import React, { useState, FormEvent, useEffect } from "react";
import { Container, Row, Col, Stack, Form, Button } from "react-bootstrap";

//componenst
import FormUsers from "../components/users/FormUsuarios";
import TableUsers from "../components/users/TableUser";
//Redux - Store
import { useAppDispatch, useAppSelector } from "../hooks/useReducer";
import { GetUsers } from "../features/users";
import { DeleteUser } from "../api/users";

export default function Usuarios() {
  const [State, setState] = useState<number>(0);
  const [Change, setChange] = useState<Boolean>(false);
  const [Picture, setPicture] = useState<string | null>();
  const [ImageData, setImageData] = useState<any>(null);

  const dispatch = useAppDispatch();

  const users = useAppSelector((state) => state.users.users);
  const loading = useAppSelector((state) => state.users.loading);

  useEffect(() => {
    dispatch(GetUsers());
  }, [dispatch]);
  //
  const handleCheck = (val: number) => {
    setState(val);
    setChange(true);
  };

  const handleDeleteUser = async (username: string) => {
    let response = await DeleteUser(username);
    console.log(response);
  };

  return (
    <>
      <h2>Usuarios</h2>
      <Container>
        <Row>
          <Col xs={5} className="p-4 m-auto shadow-sm rounded-lg">
            <Stack gap={2} className="col-md-5 mx-auto">
              <Button
                variant={State == 0 ? "primary" : "outline-primary"}
                onClick={() => handleCheck(0)}>
                Estudiante
              </Button>
              <Button
                variant={State == 1 ? "primary" : "outline-primary"}
                onClick={() => handleCheck(1)}>
                Docente
              </Button>
              {!Change && (
                <p className="h6 text-center text-muted">
                  Por defecto esta en Estudiante
                </p>
              )}
            </Stack>
            <FormUsers rol={State} />
          </Col>
          <Col>
            <TableUsers
              loading={loading}
              users={users}
              deleteUser={handleDeleteUser}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

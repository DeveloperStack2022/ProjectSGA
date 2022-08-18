import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FormEvent } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type Inputs = {
  nombre: string;
  apellido: string;
  username: string;
  password: string;
  numCedula: number;
};
const FormUsers = () => {
  const schema = yup.object().shape({
    numCedula: yup.number().required("Field required"),
    nombre: yup.string().required("Field required"),
    username: yup.string().required("Field required"),
    password: yup.string().required("Field required"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>({ mode: "onTouched", resolver: yupResolver(schema) });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log("submited");
  };
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>Num Cl</Form.Label>
          <Form.Control
            {...register("numCedula")}
            type="text"
            placeholder="Enter number"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            {...register("nombre")}
            type="text"
            placeholder="Enter number"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            {...register("apellido")}
            type="text"
            placeholder="Enter number"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            {...register("username")}
            placeholder="Enter number"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            {...register("password")}
            placeholder="****"
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Imagen perfil</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default FormUsers;

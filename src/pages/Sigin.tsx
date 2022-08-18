// components
import SiginComponent from "../components/Form";
import { Container, Row, Col } from "react-bootstrap";
import {useAuth} from '../context/useAuth'
type FormValues  = {
  username:string;
  password:string;
}
const SignPage = () => {
  const {authenticate} = useAuth()
  const onSubmit = async (value:FormValues) => {
    console.log(value)
    await authenticate(value.username,value.password)
  }
  return (
    <Container>
      <h1 className="  mt-5 p-3 text-center rounded">Sign In</h1>
      <Row className="mt-5">
        <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
          <SiginComponent submitData={onSubmit}  />
        </Col>
      </Row>
    </Container>
  );
};
export default SignPage;

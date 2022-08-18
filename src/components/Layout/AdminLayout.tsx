import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const LayoutComponent = ({ children }: { children: JSX.Element }) => {
  let links = [
    {
      url: "usuarios",
      text: "Usuarios",
    },
    {
      url: "materia",
      text: "Materia",
    },
    {
      url: "paralelos",
      text: "Paralelo",
    },
    {
      url: "notas",
      text: "Notas",
    },
  ];
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Sistema Gestion Academica</Navbar.Brand>
          <Nav className="me-auto">
            {links.map((item) => (
              <LinkContainer to={`/Admin/${item.url}`}>
                <Nav.Link>{item.text}</Nav.Link>
              </LinkContainer>
            ))}
          </Nav>
          <Nav>
            <Nav.Link>Sign Out</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>{children}</Container>
    </>
  );
};
export default LayoutComponent;

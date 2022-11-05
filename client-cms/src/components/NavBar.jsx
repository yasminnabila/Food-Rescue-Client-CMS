import { Navbar, Container, Col, Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={
              process.env.PUBLIC_URL + "/assets/logo_savvie_transparant-01.png"
            }
            width="70"
            height="70"
            className="d-inline-block align-top"
            alt="Savvie Logo"
          />
        </Navbar.Brand>
      </Container>
      <Navbar.Toggle />
      <Col className="col-2">
        <Nav className="me-auto d-flex align-items-center justify-content-center">
          <Nav.Link
            href="#home"
            style={{ color: "#77AA9C" }}
            className="font-weight-bold"
          >
            Eat
          </Nav.Link>
          <Nav.Link href="#link" style={{ color: "#77AA9C" }}>
            Sell
          </Nav.Link>
          <Nav.Link href="#link" style={{ color: "#77AA9C" }}>
            Partner Login
          </Nav.Link>
        </Nav>
      </Col>
    </Navbar>
  );
}

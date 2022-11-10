import { Navbar, Container, Col, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <Navbar bg="light" className="fixed-top">
      <Container gap={3}>
        <Navbar.Brand>
          <img
            src={
              process.env.PUBLIC_URL + "/assets/Logo_Horizontal.png"
            }
            width="170"
            height="60"
            className="d-inline-block align-top "
            alt="Savvie Logo"
            onClick={() => navigate(`/`)}
          />
        </Navbar.Brand>
      </Container>
      <Navbar.Toggle />
      <Col className="col-2">
        <Nav className="me-auto d-flex align-items-center justify-content-center">
          <Nav.Link style={{ color: "#77AA9C" }}>Eat</Nav.Link>
          <Nav.Link style={{ color: "#77AA9C" }}>Sell</Nav.Link>
          <Nav.Link
            onClick={() => navigate(`/login`)}
            style={{ color: "#77AA9C" }}
          >
            Partner Login
          </Nav.Link>
        </Nav>
      </Col>
    </Navbar>
  );
}

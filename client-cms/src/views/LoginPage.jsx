import { Button, Form, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../store/actionTypes/actionTypes";

function LoginPage() {
  const [input, setInputLogin] = useState({
    email: "",
    password: "",
  });
  return (
    <Container
      fluid
      className="d-flex justify-content-center"
      style={{ minHeight: "100vh", backgroundColor: "#77AA9C" }}
    >
      <Container
        className="container h-50 w-50 justify-content-center align-items-center mt-5"
        style={{ backgroundColor: "white", transform: "scale(90%)" }}
      >
        <Row>
          <Form
            // onSubmit={handleOnSubmit}
            className="w-50 p-3 m-auto mt-5"
          >
            <h1 className="text-center mb-4 text-black">Partner Login</h1>
            <Row className="mb-3">
              <Form.Group controlId="formGridEmail">
                <Form.Label className="text-black d-flex justify-content-start">
                  Email address
                </Form.Label>
                <Form.Control
                  //   value={input.email}
                  // onChange={handleOnChange}
                  name="email"
                  type="email"
                  placeholder="Email"
                />
              </Form.Group>

              <Form.Group controlId="formGridPassword">
                <Form.Label className="text-black form-label mt-3 d-flex justify-content-start">
                  Password
                </Form.Label>
                <Form.Control
                  //   value={input.password}
                  // onChange={handleOnChange}
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
            </Row>
            <Button
              variant="primary"
              type="submit"
              className="mt-3"
              style={{ backgroundColor: "#77AA9C", color: "black" }}
            >
              Login
            </Button>
            <Row className="mt-3">
              <h6>Don’t have an account?</h6>
              <Link
                to="/registerA"
                className="nav-link"
                style={{ color: "#77AA9C" }}
              >
                Start Selling with Savvie
              </Link>
            </Row>
          </Form>
        </Row>
      </Container>
    </Container>
  );
}

export default LoginPage;

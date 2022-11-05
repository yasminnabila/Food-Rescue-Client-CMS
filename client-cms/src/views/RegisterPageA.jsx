import { Button, Form, Row, Container, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function RegisterPageA() {
  const navigate = useNavigate();
  return (
    <Container
      fluid
      className="d-flex justify-content-center"
      style={{ minHeight: "100vh", backgroundColor: "#77AA9C" }}
    >
      <Container
        className="container h-50 w-80 mt-5"
        style={{ backgroundColor: "white", transform: "scale(90%)" }}
      >
        <Row>
          <Form
            // onSubmit={handleOnSubmit}
            className="w-50 p-5 m-auto mt-3"
          >
            <Row className="d-flex justify-content-center align-items-center">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/logo_savvie_transparant-01.png"
                }
                style={{ width: "30%" }}
                alt="Logo"
                className="d-flex align-items-center justify-content-center"
              />
            </Row>
            <h6 className="mt-5 mb-5">
              By selling surplus food you will earn extra income, attract new
              customers and show that you care about the environment.
            </h6>
            <h4 className="mb-0 text-black">Crate an account</h4>
            <h5 className=" mb-5 text-black">
              Set up your Savvie account in just minutes!
            </h5>
            <Row className="mb-3">
              <Form.Group ontrolId="formGridUsername">
                <Form.Label className="text-black d-flex justify-content-start">
                  Username
                </Form.Label>
                <Form.Control
                  name="username"
                  // value={input.username}
                  // onChange={handleOnChange}
                  type="text"
                  placeholder="Username"
                  className="mb-3"
                />
              </Form.Group>
              <Form.Group controlId="formGridEmail">
                <Form.Label className="text-black d-flex justify-content-start">
                  Email
                </Form.Label>
                <Form.Control
                  name="email"
                  // value={input.email}
                  // onChange={handleOnChange}
                  type="email"
                  placeholder="Email"
                  className="mb-3"
                />
              </Form.Group>
              <Form.Group controlId="formGridPassword">
                <Form.Label className="text-black d-flex justify-content-start">
                  Password
                </Form.Label>
                <Form.Control
                  name="password"
                  // value={input.password}
                  // onChange={handleOnChange}
                  type="password"
                  placeholder="Password"
                  className="mb-3"
                />
              </Form.Group>
              <Form.Group controlId="formGridPhoneNumber">
                <Form.Label className="text-black d-flex justify-content-start">
                  Phone Number
                </Form.Label>
                <Form.Control
                  name="phoneNumber"
                  // value={input.phoneNumber}
                  // onChange={handleOnChange}
                  type="text"
                  placeholder="Phone number"
                  className="mb-3"
                />
              </Form.Group>
              <Form.Group controlId="formGridAddress">
                <Form.Label className="text-black d-flex justify-content-start">
                  Address
                </Form.Label>
                <Form.Control
                  name="address"
                  // value={input.address}
                  // onChange={handleOnChange}
                  type="text"
                  placeholder="Address"
                  className="mb-3"
                />
              </Form.Group>
            </Row>
            <Col>
              <Button
                onClick={() => navigate(`/`)}
                variant="light"
                type="button"
                className="mt-3 margin-5 btn btn-light"
              >
                Cancel
              </Button>
              <Button
                onClick={() => navigate(`/registerB`)}
                variant="primary"
                type="submit"
                className="mt-3 border-0"
                style={{ backgroundColor: "#77AA9C", color: "black" }}
              >
                Continue
              </Button>
            </Col>
          </Form>
        </Row>
      </Container>
    </Container>
  );
}

export default RegisterPageA;

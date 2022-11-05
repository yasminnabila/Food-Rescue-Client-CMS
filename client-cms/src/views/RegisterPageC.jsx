import {
  Button,
  Form,
  Row,
  Container,
  Col,
  FloatingLabel,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function RegisterPageC() {
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
            <h3 className="mt-5 mb-5">Welcome, [Restaurant Name]!</h3>
            <Row className="mb-3">
              <Form.Group ontrolId="formGridUsername">
                <Form.Label className="text-black text-start d-flex justify-content-start">
                  Set up your profile to continue. The information will be
                  displayed in the Savvie app.
                </Form.Label>
                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Input your food business description here"
                  className="mb-3"
                >
                  <Form.Control
                    as="textarea"
                    // placeholder="Input your food business description here"
                    style={{ height: "150px" }}
                  />
                </FloatingLabel>
              </Form.Group>
            </Row>
            <Col>
              <Button
                onClick={() => navigate(`/registerB`)}
                variant="light"
                type="button"
                className="mt-3 margin-5 btn btn-light"
              >
                Back
              </Button>
              <Button
                onClick={() => navigate(`/admin`)}
                variant="primary"
                type="submit"
                className="mt-3 border-0"
                style={{ backgroundColor: "#77AA9C", color: "black" }}
              >
                Finish Sign Up
              </Button>
            </Col>
          </Form>
        </Row>
      </Container>
    </Container>
  );
}

export default RegisterPageC;

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
              <h5 className="mb-5">
                {" "}
                Set up your profile to continue. The information will be
                displayed in the Savvie app.
              </h5>
              {/* Business Description */}
              <Form.Group ontrolId="formGridUsername">
                <Form.Label className="text-black text-start d-flex justify-content-start">
                  Business Description
                </Form.Label>
                <FloatingLabel
                  name="description"
                  controlId="floatingTextarea"
                  label="Input your food business description here"
                  className="mb-3"
                >
                  <Form.Control
                    // value={input.description}
                    // onChange={handleOnChange}
                    name="description"
                    type="textarea"
                    style={{ height: "75px" }}
                  />
                </FloatingLabel>
              </Form.Group>

              {/* Business Logo */}
              <Form.Group ontrolId="formGridUsername">
                <Form.Label className="text-black text-start d-flex justify-content-start">
                  Company logo (.jpg, .jpeg, or .png format)
                </Form.Label>
                <FloatingLabel
                  name="logoUrl"
                  controlId="floatingTextarea"
                  label="Input your food business logo here"
                  className="mb-3"
                >
                  <Form.Control
                    // value={input.description}
                    // onChange={handleOnChange}
                    name="description"
                    type="textarea"
                    // placeholder="description"
                    style={{ height: "50px" }}
                  />
                </FloatingLabel>
              </Form.Group>

              {/* Business Address */}
              <Form.Group ontrolId="formGridUsername">
                <Form.Label className="text-black text-start d-flex justify-content-start">
                  Company Address
                </Form.Label>
                <FloatingLabel
                  name="address"
                  controlId="floatingTextarea"
                  label="Input your food business address here"
                  className="mb-3"
                >
                  <Form.Control
                    // value={input.address}
                    // onChange={handleOnChange}
                    name="address"
                    type="textarea"
                    // placeholder="address"
                    style={{ height: "50px" }}
                  />
                </FloatingLabel>
              </Form.Group>

              {/* Business Opening Hour */}
              <Form.Group ontrolId="formGridUsername">
                <Form.Label className="text-black text-start d-flex justify-content-start">
                  Opening Hour
                </Form.Label>
                <FloatingLabel
                  controlId="floatingTextarea"
                  // label="Input your food business opening hour"
                  className="mb-3"
                >
                  <Form.Control
                    style={{ width: "10rem", height: "2rem" }}
                    className="d-flex align-items-center"
                    // value={input.open_time}
                    // onChange={handleOnChange}
                    name="open_time"
                    type="time"
                    // placeholder="open_time"
                  />
                </FloatingLabel>
              </Form.Group>

              {/* Business Closing Hour */}
              <Form.Group ontrolId="formGridUsername">
                <Form.Label className="text-black text-start d-flex justify-content-start">
                  Closing Hour
                </Form.Label>
                <FloatingLabel
                  controlId="floatingTextarea"
                  // label="Input your food business opening hour"
                  className="mb-3"
                >
                  <Form.Control
                    style={{ width: "10rem", height: "2rem" }}
                    className="d-flex align-items-center"
                    // value={input.close_time}
                    // onChange={handleOnChange}
                    name="close_time"
                    type="time"
                    // placeholder="close_time"
                  />
                </FloatingLabel>
              </Form.Group>
            </Row>
            <Col>
              <Button
                onClick={() => navigate(`/register-resto-1`)}
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

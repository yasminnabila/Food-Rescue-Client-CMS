import { Button, Form, Row, Container, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";

function RegisterPageB() {
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
            <h4 className="mt-5 mb-5">Start selling with Savvie!</h4>
            <Row className="mb-3">
              <Form.Group ontrolId="formGridUsername">
                <Form.Label className="text-black d-flex justify-content-start">
                  Name of your food business
                </Form.Label>
                <Form.Control
                  name="name"
                  // value={input.name}
                  // onChange={handleOnChange}
                  type="text"
                  placeholder="Example: Flash Coffee"
                  className="mb-3"
                />
              </Form.Group>
              <Form.Group className="form-check d-flex justify-content-start">
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Restaurant"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="restaurant"
                      control={<Radio />}
                      label="Restaurant"
                    />
                    <FormControlLabel
                      value="cafe"
                      control={<Radio />}
                      label="Cafe"
                    />
                    <FormControlLabel
                      value="bakery"
                      control={<Radio />}
                      label="Bakery"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>
              </Form.Group>
            </Row>
            <Col>
              <Button
                onClick={() => navigate(`/`)}
                variant="light"
                type="button"
                className="mt-3 margin-5 btn btn-light"
              >
                Back
              </Button>
              <Button
                onClick={() => navigate(`/register-resto-2`)}
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

export default RegisterPageB;

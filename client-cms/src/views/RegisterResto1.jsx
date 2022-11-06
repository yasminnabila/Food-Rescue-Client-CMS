import {
  Button,
  Form,
  Row,
  Container,
  Col,
  FloatingLabel,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";
import { BASE_URL } from "../store/actionTypes/actionTypes";

function RegisterResto() {
  const navigate = useNavigate();
  const [input, setInputRegister] = useState({
    name: "",
    logoUrl: "",
    description: "",
    type: "",
    open_time: "",
    close_time: "",
    address: "",
  });

  console.log(input);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputRegister({
      ...input,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(BASE_URL + `/resto/restaurants`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
        body: JSON.stringify(input),
      });
      let data = await response.json();
      if (!response.ok) throw data.message;
      console.log(data, "<<<<<");
      localStorage.setItem("restoId", data.restaurant.id);
      
      setInputRegister({
        name: "",
        logoUrl: "",
        description: "",
        type: "",
        open_time: "",
        close_time: "",
        address: "",
      });
      navigate("/admin");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Register new restaurant success!",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      });
    } catch (err) {
      console.log(err, "<<<<");
      Swal.fire({
        icon: "error",
        title: "Oops, something's wrong!",
        text: err,
      });
    }
  };
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
          <Form onSubmit={handleOnSubmit} className="w-50 p-5 m-auto mt-3">
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
            <h4 className="mt-5 mb-3">Start selling with Savvie!</h4>
            <h5 className="mb-5">
              {" "}
              Set up your business profile to continue. The information will be
              displayed in the Savvie app.
            </h5>
            <Row className="mb-3">
              <Form.Group controlId="formGridUsername">
                <Form.Label className="text-black d-flex justify-content-start">
                  Name of your food business
                </Form.Label>
                <Form.Control
                  name="name"
                  value={input.name}
                  onChange={handleOnChange}
                  type="text"
                  placeholder="Example: Flash Coffee"
                  className="mb-3"
                />
              </Form.Group>
              <Form.Group controlId="formGridUsername">
                <Form.Label className="text-black d-flex justify-content-start">
                  Type of your food business
                </Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  className="mb-3"
                  name="type"
                  value={input.type}
                  onChange={handleOnChange}
                >
                  <option>Open this select menu</option>
                  <option>Restaurant</option>
                  <option>Cafe</option>
                  <option>Bakery</option>
                  <option>Grocery Store</option>
                  <option>Other</option>
                </Form.Select>
              </Form.Group>

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
                    value={input.description}
                    onChange={handleOnChange}
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
                    value={input.logoUrl}
                    onChange={handleOnChange}
                    name="logoUrl"
                    type="textarea"
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
                  controlId="floatingTextarea"
                  label="Input your food business address here"
                  className="mb-3"
                >
                  <Form.Control
                    onChange={handleOnChange}
                    name="address"
                    value={input.address}
                    type="textarea"
                    style={{ height: "50px" }}
                  />
                </FloatingLabel>
              </Form.Group>

              {/* Business Opening Hour */}
              <Form.Group ontrolId="formGridUsername">
                <Form.Label className="text-black text-start d-flex justify-content-start">
                  Opening Hour
                </Form.Label>
                <FloatingLabel controlId="floatingTextarea" className="mb-3">
                  <Form.Control
                    style={{ width: "10rem", height: "2rem" }}
                    className="d-flex align-items-center"
                    value={input.open_time}
                    onChange={handleOnChange}
                    name="open_time"
                    type="time"
                  />
                </FloatingLabel>
              </Form.Group>

              {/* Business Closing Hour */}
              <Form.Group ontrolId="formGridUsername">
                <Form.Label className="text-black text-start d-flex justify-content-start">
                  Closing Hour
                </Form.Label>
                <FloatingLabel controlId="floatingTextarea" className="mb-3">
                  <Form.Control
                    style={{ width: "10rem", height: "2rem" }}
                    className="d-flex align-items-center"
                    value={input.close_time}
                    onChange={handleOnChange}
                    name="close_time"
                    type="time"
                  />
                </FloatingLabel>
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

export default RegisterResto;

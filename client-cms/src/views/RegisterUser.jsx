import { Button, Form, Row, Container, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";
import { BASE_URL } from "../store/actionTypes/actionTypes";
import Geocode from "react-geocode";

function RegisterUser() {
  Geocode.setApiKey("AIzaSyAw99RzBxkw-upCWfK5gVURlEMRzTn3pOI");
  const navigate = useNavigate();
  const [input, setInputRegister] = useState({
    fullName: "",
    password: "",
    email: "",
    address: "",
    phoneNumber: "",
  });

  // console.log(input, "<< input formnya");

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
      Geocode.fromAddress(input.address).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          input.latitude = lat;
          input.longitude = lng;
          console.log(lat, lng);
          console.log(input, "<><><><><><><>");
        },
        (error) => {
          console.error(error);
        }
      );
      const response = await fetch(BASE_URL + `/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });
      let data = await response.json();
      console.log(data);
      if (!response.ok) throw data.message;
      setInputRegister({
        fullName: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
      });
      navigate("/login");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Register new admin success!",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      });
    } catch (err) {
      console.log(err, "<<<< error di register");
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
      style={{
        maxHeight: "100vh",
        backgroundColor: "#77aa9c",
      }}
    >
      <Container
        fluid
        className="justify-content-center align-items-center mt-2 border rounded shadow-lg bg-white rounded"
        style={{
          backgroundColor: "white",
          transform: "scale(80%)",
          borderColor: "black",
        }}
      >
        <Row className="d-flex justify-content-center align-items-center mt-5 mb-5">
          <Col className="col-6 d-flex justify-content-center align-items-center">
            <img
              className="d-flex justify-content-center align-items-center w-100 h-100 p-5"
              src={process.env.PUBLIC_URL + "/assets/surplus.png"}
            ></img>
          </Col>
          <Col className="col-6 d-flex justify-content-center align-items-center mb-5">
            <Form onSubmit={handleOnSubmit} className="w-75 m-auto">
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
              {/* <h6 className="mt-5 mb-5 text-center">
                By selling surplus food you will earn extra income, attract new
                customers and show that you care about the environment.
              </h6> */}
              {/* <h4 className="mb-0 text-black text-center">
                Crate an admin account
              </h4>
              <h5 className=" mb-5 text-black text-center">
                Set up your Savvie account in just minutes!
              </h5> */}
              <Row>
                <Form.Group ontrolId="formGridUsername">
                  <Form.Label className="text-black d-flex justify-content-start">
                    Full Name
                  </Form.Label>
                  <Form.Control
                    name="fullName"
                    value={input.fullName}
                    onChange={handleOnChange}
                    type="text"
                    placeholder="Full Name"
                    className="mb-3"
                  />
                </Form.Group>
                <Form.Group controlId="formGridEmail">
                  <Form.Label className="text-black d-flex justify-content-start">
                    Email
                  </Form.Label>
                  <Form.Control
                    name="email"
                    value={input.email}
                    onChange={handleOnChange}
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
                    value={input.password}
                    onChange={handleOnChange}
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
                    value={input.phoneNumber}
                    onChange={handleOnChange}
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
                    value={input.address}
                    onChange={handleOnChange}
                    type="text"
                    placeholder="Address"
                    className="mb-3"
                  />
                </Form.Group>
              </Row>
              <Col className="d-flex justify-content-center align-items-center">
                <Button
                  onClick={() => navigate(`/`)}
                  variant="light"
                  type="button"
                  className="mt-3 margin-5 btn btn-light mx-2 btn-outline-secondary"
                >
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  type="submit"
                  className="mt-3 border-0 btn btn-outline-black btn-outline-secondary"
                  style={{ backgroundColor: "#77AA9C", color: "white" }}
                >
                  Register
                </Button>
              </Col>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default RegisterUser;

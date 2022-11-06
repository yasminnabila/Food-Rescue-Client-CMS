import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();
  return (
    <Container>
      <h1 className="mb-3 mt-5">Add Product</h1>

      <Container
        className="container h-50 w-70"
        style={{ backgroundColor: "white", transform: "scale(90%)" }}
      >
        <Row>
          <Col className="mt-5 bg-white">
            <Form>
              {/* PRODUCT IMAGE URL */}
              <Row className="px-3">
                <Row>
                  <h1 className="d-flex justify-content-start">
                    Upload Product
                  </h1>
                  <Row className="mt-2">
                    <Col className="col-3 d-flex justify-content-start">
                      <h5>Product Photos</h5>
                    </Col>
                    <Col className="col-9 d-flex justify-content-start">
                      <text className="muted">Required</text>
                    </Col>
                  </Row>
                </Row>
                {/* Product Photo */}
                <Form.Group className="mb-3 px-3">
                  <Row className="d-flex align-items-center justify-content-start">
                    <Form.Label className="text-black d-flex justify-content-start mt-3 ml-5">
                      Input image URL of .jpg, .jpeg, or .png format with
                      minimum size of 300 x 300 px to the field
                    </Form.Label>

                    <Form.Control
                      className="w-75"
                      name="imageUrl"
                      // value={form.imageUrl}
                      // onChange={handleChange}
                      type="text"
                      placeholder="https://flash-coffee.com/id/wp-content/uploads/sites/13/2021/03/new-upgraded-aren-atte-600x368.png"
                    />
                  </Row>
                </Form.Group>
              </Row>

              {/* PRODUCT NAME */}
              <Row className="px-3">
                <Row>
                  <h1 className="mt-5 d-flex justify-content-start">
                    Product Information
                  </h1>
                  <Row className="mt-2">
                    <Col className="col-3 d-flex justify-content-start">
                      <h5>Product Name</h5>
                    </Col>
                    <Col className="col-9 d-flex justify-content-start">
                      <text className="muted">Required</text>
                    </Col>
                  </Row>
                </Row>
                {/* Product Photo */}
                <Form.Group className="mb-3 px-3">
                  <Row className="d-flex align-items-center justify-content-start">
                    <Form.Label className="text-black d-flex justify-content-start mt-3 ml-5">
                      Input descriptive name so it’s easy for customers to find
                      your product
                    </Form.Label>

                    <Form.Control
                      className="w-75"
                      name="name"
                      // value={form.name}
                      // onChange={handleChange}
                      type="text"
                      placeholder="Aren Latte"
                    />
                  </Row>
                </Form.Group>
              </Row>

              {/* PRODUCT CATEGORY */}
              <Row className="px-3">
                <Row>
                  <Row className="mt-3">
                    <Col className="col-3 d-flex justify-content-start">
                      <h5>Product Category</h5>
                    </Col>
                    <Col className="col-9 d-flex justify-content-start">
                      <text className="muted">Required</text>
                    </Col>
                  </Row>
                </Row>
                {/* Product Photo */}
                <Form.Group className="mb-3 px-3">
                  <Row className="d-flex align-items-center justify-content-start">
                    <Form.Label className="text-black d-flex justify-content-start mt-3 ml-5">
                      Choose the right category of your product
                    </Form.Label>

                    <Form.Select
                      aria-label="Default select example"
                      className="w-25"
                    >
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Row>
                </Form.Group>
              </Row>

              {/* PRODUCT PRICE */}
              <Row className="px-3">
                <Row>
                  <Row className="mt-3">
                    <Col className="col-3 d-flex justify-content-start">
                      <h5>Product Price</h5>
                    </Col>
                    <Col className="col-9 d-flex justify-content-start">
                      <text className="muted">Required</text>
                    </Col>
                  </Row>
                </Row>
                {/* Product Photo */}
                <Form.Group className="mb-3 px-3">
                  <Row className="d-flex align-items-center justify-content-start">
                    <Form.Label className="text-black d-flex justify-content-start mt-3 ml-5">
                      Price
                    </Form.Label>

                    <Form.Control
                      className="w-25"
                      name="price"
                      // value={form.price}
                      // onChange={handleChange}
                      type="number"
                      placeholder="40000"
                    />
                  </Row>
                </Form.Group>

                <Form.Group className="mb-3 px-3">
                  <Row className="d-flex align-items-center justify-content-start">
                    <Form.Label className="text-black d-flex justify-content-start mt-3 ml-5">
                      Discount (%)
                    </Form.Label>
                    <Form.Control
                      className="w-25"
                      name="discount"
                      // value={form.discount}
                      // onChange={handleChange}
                      type="number"
                      placeholder="50"
                    />
                  </Row>
                </Form.Group>
              </Row>

              {/* PRODUCT MANAGEMENT */}
              <Row className="px-3 mt-5">
                <Row>
                  <h1 className="d-flex justify-content-start">
                    Product Management
                  </h1>
                  <Row className="mt-2">
                    <Col className="col-3 d-flex justify-content-start">
                      <h5>Active</h5>
                    </Col>
                    <Col className="col-9 d-flex justify-content-start">
                      <text className="muted">Required</text>
                    </Col>
                  </Row>
                </Row>
                {/* Product isActive */}
                <Form.Group className="mb-3 px-3">
                  <Row className="d-flex align-items-center justify-content-start">
                    <Form.Label className="text-black d-flex justify-content-start mt-3 ml-5">
                      Is product active?
                    </Form.Label>

                    <Form.Control
                      className="w-25"
                      name="imageUrl"
                      // value={form.imageUrl}
                      // onChange={handleChange}
                      type="text"
                      placeholder="Replace with toggle later"
                    />
                  </Row>
                </Form.Group>

                {/* Product Stock */}
                <Form.Group className="mb-3 px-3">
                  <Row className="d-flex align-items-center justify-content-start">
                    <Form.Label className="text-black d-flex justify-content-start mt-3 ml-5">
                      Stock
                    </Form.Label>

                    <Form.Control
                      className="w-25"
                      name="stock"
                      // value={form.stock}
                      // onChange={handleChange}
                      type="number"
                      placeholder="Replace with toggle later"
                    />
                  </Row>
                </Form.Group>
              </Row>

              <Button
                onClick={() => navigate(`/admin`)}
                variant="primary"
                type="submit"
                className="mt-3 mb-3 border-0"
                style={{ backgroundColor: "#77AA9C", color: "black" }}
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default AddProduct;

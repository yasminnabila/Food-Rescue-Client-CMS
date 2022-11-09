import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createFood } from "../store/action/food";
import { fetchCategory } from "../store/action/category";
import Swal from "sweetalert2";

function AddProduct() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => {
    // console.log(state, "<<ini dari tables");
    return state.categoryReducer;
  });

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  const [form, setForm] = useState({
    name: "",
    price: "",
    imageUrl: "",
    description: "",
    quantity: "",
    CategoryId: "",
    discount: "",
  });

  // console.log(form, "inputan form");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form, "<<<<<<<");
    dispatch(createFood(form)).then(() => {
      navigate("/admin/list-product");
       Swal.fire({
         position: "center",
         icon: "success",
         title: "Adding new item success!",
         showConfirmButton: false,
         timer: 1500,
       });
    });
  };

  return (
    <Container>
      <h1 className="mb-1 mt-5 text-center">Add Product</h1>

      <Container
        className="container h-50 w-70 p-5"
        style={{ backgroundColor: "white", transform: "scale(90%)" }}
      >
        <Row>
          <Col className="bg-white">
            <Form onSubmit={handleSubmit}>
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
                      value={form.imageUrl}
                      onChange={handleChange}
                      type="text"
                      placeholder="Image URL"
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
                {/* Product Name */}
                <Form.Group className="mb-3 px-3">
                  <Row className="d-flex align-items-center justify-content-start">
                    <Form.Label className="text-black d-flex justify-content-start mt-3 ml-5">
                      Input descriptive name so it’s easy for customers to find
                      your product
                    </Form.Label>

                    <Form.Control
                      className="w-75"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      type="text"
                      placeholder="Product name"
                    />
                  </Row>
                </Form.Group>
              </Row>

              {/* PRODUCT DESCRIPTION */}
              <Row className="px-3">
                <Row>
                  <Row className="mt-2">
                    <Col className="col-3 d-flex justify-content-start">
                      <h5>Product Description</h5>
                    </Col>
                    <Col className="col-9 d-flex justify-content-start">
                      <text className="muted">Required</text>
                    </Col>
                  </Row>
                </Row>

                <Form.Group className="mb-3 px-3">
                  <Row className="d-flex align-items-center justify-content-start">
                    <Form.Label className="text-black d-flex justify-content-start mt-3 ml-5">
                      Describe your product here
                    </Form.Label>

                    <Form.Control
                      className="w-75"
                      name="description"
                      value={form.description}
                      onChange={handleChange}
                      type="text"
                      placeholder="Product description"
                    />
                  </Row>
                </Form.Group>
              </Row>

              {/* Select option */}
              <Row className="px-3">
                <Row>
                  <Row className="mt-2">
                    <Col className="col-3 d-flex justify-content-start">
                      <h5>Product Category</h5>
                    </Col>
                    <Col className="col-9 d-flex justify-content-start">
                      <text className="muted">Required</text>
                    </Col>
                  </Row>
                </Row>
                <Form.Group className="p-3">
                  <Row>
                    <Form.Select
                      name="CategoryId"
                      value={form.CategoryId}
                      onChange={handleChange}
                      className="w-25"
                    >
                      <option selected>Select food category</option>
                      {categories.map((el, index) => {
                        return (
                          <option value={el.id} key={el.id}>
                            {el.name}
                          </option>
                        );
                      })}
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
                      value={form.price}
                      onChange={handleChange}
                      type="number"
                      placeholder="Product price"
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
                      value={form.discount}
                      onChange={handleChange}
                      type="number"
                      placeholder="Discount (%)"
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
                      <h5>Stock</h5>
                    </Col>
                    <Col className="col-9 d-flex justify-content-start">
                      <text className="muted">Required</text>
                    </Col>
                  </Row>
                </Row>
                {/* Product Stock */}
                <Form.Group className="mb-3 px-3">
                  <Row className="d-flex align-items-center justify-content-start">
                    <Form.Label className="text-black d-flex justify-content-start mt-3 ml-5">
                      Stock
                    </Form.Label>

                    <Form.Control
                      className="w-25"
                      name="quantity"
                      value={form.quantity}
                      onChange={handleChange}
                      type="number"
                      placeholder="Surplus stock"
                    />
                  </Row>
                </Form.Group>
              </Row>

              <Button
                // onClick={() => navigate(`/admin`)}
                variant="primary"
                type="submit"
                className="mt-3 mb-5 border-0"
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

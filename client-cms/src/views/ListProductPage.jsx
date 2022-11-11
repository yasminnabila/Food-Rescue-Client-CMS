import { Container, Row, Col, Button } from "react-bootstrap";
import Tables from "../components/Tables";
import { useNavigate } from "react-router-dom";

function ListProductPage() {
  const navigate = useNavigate();
  return (
    <>
      <Container style={{ transform: "scale(95%)" }}>
        <Row className="mt-5">
          <h1 className="d-flex justify-content-start" style={{color: "white" }}>Product List</h1>
          <h5 style={{color: "white" }}>Manage your offer and active product here</h5>
        </Row>
        <Row className="mb-1 mt-3">
          {/* <Col className="col-9"></Col> */}
          <Col className="col-12 d-flex justify-content-end">
            <Button
              onClick={() => navigate(`/admin/add-product`)}
              className="btn-light btn rounded-pill"
              style={{ color: "#77AA9C", fontWeight: "bold" }}
            >
              {" "}
              + Add Product
            </Button>
          </Col>
        </Row>
        <Row>
          <Tables
            status={"product"}
            head={[
              "No",
              "Product Name",
              "Photo",
              "Price",
              "Disc",
              "New Price",
              "Stock",
              "Active",
              "Action",
            ]}
          />
        </Row>
      </Container>
    </>
  );
}

export default ListProductPage;

import { Container, Row, Col, Button } from "react-bootstrap";
import Tables from "../components/Tables";
import { useNavigate } from "react-router-dom";

function ListProductPage() {
   const navigate = useNavigate();
  return (
    <>
      <Container
      >
        <Row className="mt-5">
          <h1 className="d-flex justify-content-start">List Product</h1>
        </Row>
        <Row className="mb-3">
          <Col className="col-9"></Col>
          <Col className="col-3">
            <Button
              onClick={() => navigate(`/admin/add-product`)}
              className="btn-light btn"
            >
              {" "}
              + Add Product
            </Button>
          </Col>
        </Row>
        <Row>
          <Tables />
        </Row>
      </Container>
    </>
  );
}

export default ListProductPage;

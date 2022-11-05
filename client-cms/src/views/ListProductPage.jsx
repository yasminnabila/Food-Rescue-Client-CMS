import { Container, Row, Col, Button } from "react-bootstrap";
import DashboardCards from "../components/DashboardCards";
import Tables from "../components/Tables";

function ListProductPage() {
  return (
    <>
      <Container
        className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
        style={{
          minHeight: "100vh",
          backgroundColor: "#77AA9C",
        }}
      >
        <Row className="mt-5">
          <h1 className="d-flex justify-content-start">List Product</h1>
        </Row>
        <Row className="mb-3">
          <Col className="col-9"></Col>
          <Col className="col-3">
            <Button className="btn-light btn"> + Add Product</Button>
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

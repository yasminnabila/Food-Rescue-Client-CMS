import { Container, Row } from "react-bootstrap";
import Tables from "../components/Tables";
// import { useNavigate } from "react-router-dom";

function ListOrderPage() {
  // const navigate = useNavigate();
  return (
    <>
      <Container>
        <Row className="mt-5">
          <h1 className="d-flex justify-content-start">List Order</h1>
        </Row>
        <Row className="mb-3"></Row>
        <Row>
          <Tables
            status={"order"}
            head={[
              "No",
              "Product Name",
              "Photo",
              "Price",
              "Stock",
              "Status",
              "Action",
            ]}
          />
        </Row>
      </Container>
    </>
  );
}

export default ListOrderPage;

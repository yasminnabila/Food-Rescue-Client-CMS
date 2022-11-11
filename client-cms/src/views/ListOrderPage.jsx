import { Container, Row } from "react-bootstrap";
import Tables from "../components/Tables";

function ListOrderPage() {
  return (
    <>
      <Container style={{ transform: "scale(95%)" }}>
        <Row className="mt-5">
          <h1 className="d-flex justify-content-start" style={{color: "white" }}>Order List</h1>
          <h5 style={{color: "white" }}>
            Orders bought today. You may already pack them for convenience.
          </h5>
        </Row>
        <Row className="mb-3"></Row>
        <Row>
          <Tables striped
            status={"order"}
            head={[
              "Order Id",
              "Cust. Name",
              "Order Time",
              "Qty",
              "Offer",
              "Action",
            ]}
           />
        </Row>
      </Container>
    </>
  );
}

export default ListOrderPage;

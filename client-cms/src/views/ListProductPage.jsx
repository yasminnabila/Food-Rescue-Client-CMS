import { Container, Row, Col } from "react-bootstrap";
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
        <Tables />
      </Container>
    </>
  );
}

export default ListProductPage;

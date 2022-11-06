import { Container, Row, Col } from "react-bootstrap";
import DashboardCards from "../components/DashboardCards";

function Dashboard() {
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
          <h1 className="d-flex justify-content-start">Dashboard</h1>
          <h5 className="d-flex justify-content-start">
            Activities you need to monitor to maintain customer's satisfaction
          </h5>
        </Row>
        <Row className="mt-3">
          <Col className="p-4 col-3">
            <DashboardCards />
          </Col>
          <Col className="p-4 col-3">
            <DashboardCards />
          </Col>
          <Col className="p-4 col-3">
            <DashboardCards />
          </Col>
          <Col className="p-4 col-3">
            <DashboardCards />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;

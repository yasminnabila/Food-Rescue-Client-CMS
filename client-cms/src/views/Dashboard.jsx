import { Container, Row, Col } from "react-bootstrap";
import CardOrder from "../components/CardOrder";
import CardActiveMenu from "../components/CardActiveMenu";
import CardPortionSaved from "../components/CardPortionSaved";
import CardPreventedLoss from "../components/CardPreventedLoss";

function Dashboard() {
  return (
    <>
      <Container style={{ transform: "scale(95%)" }}>
        <Row className="mt-5">
          <h1 className="d-flex justify-content-start" style={{color: "white" }}>Dashboard</h1>
          <h5 className="d-flex justify-content-start" style={{color: "white" }}>
            Activities you need to monitor to maintain customer's satisfaction
          </h5>
        </Row>
        <Row className="mt-3 mx-1">
          <Col className="p-2 col-3">
            <CardOrder />
          </Col>
          <Col className="p-2 col-3">
            <CardActiveMenu />
          </Col>
          <Col className="p-2 col-3">
            <CardPortionSaved />
          </Col>
          <Col className="p-2 col-3">
            <CardPreventedLoss />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;

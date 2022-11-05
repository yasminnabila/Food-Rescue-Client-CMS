import { Card, Row, Col } from "react-bootstrap";

function RestaurantBanner() {
  return (
    <Card style={{ width: "12rem", height: "3rem" }} >
      <Row>
        <Col className="col-4">
          <Card.Img
            variant="top"
            src={process.env.PUBLIC_URL + "/assets/logo-resto.png"}
            width="150"
            height="auto"
            className="d-inline-block align-top"
            alt="Restaurant Logo"
          />
        </Col>
        <Col className="col-8">
          <Row>
            <text className="d-flex justify-content-start">Flash Coffee</text>
            <text>Power Merchant </text>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}

export default RestaurantBanner;

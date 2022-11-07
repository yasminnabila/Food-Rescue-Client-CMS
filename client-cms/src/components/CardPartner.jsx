import { Card, Row, Col } from "react-bootstrap";

function CardPartner() {
  return (
    <>
      <Card style={{ width: "50rem" }}>
        <Row className="p-3 d-flex justify-content-center">
          <Col className="col-6">
            <Card.Body>
              <Card.Text>FOR FOOD BUSINESSES</Card.Text>
              <h4>Increase your revenue and reduce food waste</h4>
              <h6 className="mt-3">
                Throwing food away is bad business. Running out of food during
                peak hours is also bad business. Let us help you sell your
                surplus food and turn it into good business.
              </h6>
            </Card.Body>
          </Col>
          <Col classname="col-6 d-flex justify-content-center">
            <Card.Img
              variant="top"
              className="d-block w-75"
              src={process.env.PUBLIC_URL + "/assets/dummy_partner.png"}
            />
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default CardPartner;

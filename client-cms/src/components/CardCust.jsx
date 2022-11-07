import { Card, Row, Col } from "react-bootstrap";

function CardCust() {
  return (
    <>
      <Card className="w-75">
        <Row className="p-3">
          <Col className="col-7">
            <Card.Body>
              <Card.Text>FOR CONSUMERS</Card.Text>
              <h4>The more you eat, the more you save</h4>
              <h6>
                For consumers, using Savvie means discovering new restaurants,
                cafes and grocery stores at around 50% discount and creating a
                more sustainable environment while at it.
              </h6>
            </Card.Body>
          </Col>
          <Col classname="col-5 d-flex justify-content-center">
            <Card.Img
              variant="top"
              className="d-block w-75"
              src={process.env.PUBLIC_URL + "/assets/dummy_card_cust.png"}
            />
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default CardCust;

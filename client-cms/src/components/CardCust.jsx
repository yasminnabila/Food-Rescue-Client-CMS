import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function CardCust() {
  return (
    <>
      <Card style={{ width: "50rem", height: "auto" }} className="mt-5 rounded-5">
        <Row className="p-3 d-flex align-items-center">
          <Col className="col-7">
            <Card.Body>
              <Card.Text>FOR CONSUMERS</Card.Text>
              <h4>The more you eat, the more you save</h4>
              <h6>
                For consumers, using Savvie means discovering new restaurants,
                cafes and grocery stores at around 50% discount and creating a
                more sustainable environment while at it.
              </h6>
              <Link
                to="/"
                className="nav-link"
                style={{ fontWeight: "bold", color: "#77AA9C" }}
              >
                Get the app
              </Link>
            </Card.Body>
          </Col>
          <Col classname="col-5 d-flex justify-content-center align-items-center">
            <Card.Img
              variant="top"
              className="d-block w-75"
              src={process.env.PUBLIC_URL + "/assets/icon.png"}
            />
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default CardCust;

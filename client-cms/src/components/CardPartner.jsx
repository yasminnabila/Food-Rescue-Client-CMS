import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function CardPartner() {
  return (
    <>
      <Card style={{ width: "50rem", height: "auto" }} className="mb-3">
        <Row className="p-3 d-flex justify-content-center align-items-center">
          <Col className="col-7">
            <Card.Body>
              <Card.Text>FOR FOOD BUSINESSES</Card.Text>
              <h4>Increase your revenue and reduce food waste</h4>
              <h6 className="mt-3">
                Throwing food away is bad business. Running out of food during
                peak hours is also bad business. Let us help you sell your
                surplus food and turn it into good business.
              </h6>
              <Link
                to="/register-user"
                className="nav-link"
                style={{ fontWeight: "bold", color: "#77AA9C" }}
              >
                Start selling
              </Link>
            </Card.Body>
          </Col>
          <Col classname="col-5 d-flex justify-content-center align-items-center">
            <Card.Img
              variant="top"
              className="d-block w-75"
              src={process.env.PUBLIC_URL + "/assets/partner.png"}
            />
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default CardPartner;

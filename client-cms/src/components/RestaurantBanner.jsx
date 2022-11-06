import { Card, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurant } from "../store/action/restaurants";

function RestaurantBanner() {
  const dispatch = useDispatch();
  const { restaurant } = useSelector((state) => {
    console.log(state);
    return state.restaurantReducer;
  });

  useEffect(() => {
    dispatch(fetchRestaurant());
  }, []);

  return (
    <Card
      style={{ width: "11rem", height: "6rem" }}
      className="d-flex align-items-center mb-3 mt-2 mx-auto"
    >
      <Row className="d-flex align-items-center">
        <Col className="col-6">
          <Card.Img
            variant="top"
            src={restaurant.logoUrl}
            width="250"
            height="auto"
            className="d-inline-block align-top"
            alt="Restaurant Logo"
          />
        </Col>
        <Col className="col-6">
          <Row>
            <h6 className="d-flex justify-content-start">{restaurant.name}</h6>
            <text style={{ fontSize: "0.6rem" }}>
              Open: {restaurant.open_time}
            </text>
            <text style={{ fontSize: "0.6rem" }}>
              Close: {restaurant.close_time}
            </text>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}

export default RestaurantBanner;

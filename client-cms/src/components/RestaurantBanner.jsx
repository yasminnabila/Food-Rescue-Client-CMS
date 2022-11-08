import { Card, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurant } from "../store/action/restaurants";

function RestaurantBanner() {
  const dispatch = useDispatch();
  const { restaurant } = useSelector((state) => {
    // console.log(state);
    return state.restaurantReducer;
  });

  useEffect(() => {
    dispatch(fetchRestaurant());
  }, []);

  return (
    <Card className="d-flex align-items-center mb-3 mt-2 p-1">
      <Row className="d-flex align-items-center">
        <Col className="col-5">
          <Card.Img
            variant="top"
            src={restaurant.logoUrl}
            width="50"
            height="auto"
            className="d-inline-block align-top"
            alt="Restaurant Logo"
          />
        </Col>
        <Col className="col-7">
          <Row>
            <text
              className="d-flex justify-content-start"
              style={{ fontSize: "0.8rem" }}
            >
              Rate: {restaurant.rate}
            </text>
            <text
              className="d-flex justify-content-start"
              style={{ fontSize: "0.8rem" }}
            >
              Review: {restaurant.review_count}
            </text>
            {/* <text style={{ fontSize: "0.6rem" }}>
              Open: {restaurant.open_time}
            </text>
            <text style={{ fontSize: "0.6rem" }}>
              Close: {restaurant.close_time}
            </text> */}
          </Row>
        </Col>
      </Row>
    </Card>
  );
}

export default RestaurantBanner;

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrder } from "../store/action/order";
import { useEffect, useState } from "react";

export default function CardOrder() {
  const dispatch = useDispatch();
  const { order } = useSelector((state) => {
    return state.orderReducer;
  });

  const [orderQty, setOrderQty] = useState(0);

  useEffect(() => {
    dispatch(fetchOrder());
  }, []);

  useEffect(() => {
    let qty = 0;
    order.forEach((order) => {
      order.OrderItems.forEach((item) => {
        if (item.Payment.status !== "Delivered") {
          qty += item.quantity;
        }
      });
    });
    setOrderQty(qty);
  }, [order]);

  return (
    <Card sx={{ width: 220, height: "auto" }}>
      <CardContent>
        <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
          Today's Order
        </Typography>
        <Typography
          sx={{ fontSize: 34 }}
          variant="body2"
          body="theme.typography.fontWeightBold"
        >
          {orderQty}
        </Typography>
      </CardContent>
    </Card>
  );
}

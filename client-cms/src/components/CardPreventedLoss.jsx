import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrder } from "../store/action/order";
import { useEffect, useState } from "react";

export default function CardPreventedLoss() {
  const dispatch = useDispatch();
  const { order } = useSelector((state) => {
    return state.orderReducer;
  });

  const [total, setTotal] = useState(0);

  useEffect(() => {
    dispatch(fetchOrder());
  }, []);

  useEffect(() => {
    let total = 0;
    order.forEach((order) => {
      order.OrderItems.forEach((item) => {
        if (item.Payment.status === "Delivered") {
          total += item.itemPrice * item.quantity;
        }
      });
    });
    setTotal(total);
  }, [order]);

  // console.log(order, "ini!");

  const formatPrice = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  return (
    <Card sx={{ width: 270, height: "auto" }}>
      <CardContent>
        <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
          Prevented Loss
        </Typography>
        <Typography
          sx={{ fontSize: 34 }}
          variant="body2"
          body="theme.typography.fontWeightBold"
        >
          {formatPrice(total).substring(0, formatPrice(total).length - 3)}
        </Typography>
      </CardContent>
    </Card>
  );
}

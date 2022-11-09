import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrder } from "../store/action/order";
import { useEffect } from "react";

export default function CardPreventedLoss() {
  const dispatch = useDispatch();
  const { order } = useSelector((state) => {
    console.log(state);
    return state.orderReducer;
  });

  useEffect(() => {
    dispatch(fetchOrder());
  }, []);

  let data = order.map((e, i) => {
    return e.itemPrice * e.quantity
  });

  // console.log(data);

  const formatPrice = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  return (
    <Card sx={{ width: 220, height: "auto" }}>
      <CardContent>
        <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
          Prevented Loss
        </Typography>
        <Typography
          sx={{ fontSize: 14 }}
          variant="body2"
          body="theme.typography.fontWeightBold"
        >
          test
        </Typography>
      </CardContent>
    </Card>
  );
}

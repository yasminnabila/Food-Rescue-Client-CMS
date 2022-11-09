import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrder } from "../store/action/order";
import { useEffect } from "react";

export default function CardPortionSaved() {
  const dispatch = useDispatch();
  const { order } = useSelector((state) => {
    console.log(state);
    return state.orderReducer;
  });

  useEffect(() => {
    dispatch(fetchOrder());
  }, []);
  let data = order.map((e, i) => {
    if (e.Payment.status) {
      return e.Payment?.status;
    }
  });

  let paid = data.filter((x) => {
    return x === "Delivered";
  });

  paid = paid.length;

  return (
    <Card sx={{ width: 220, height: "auto" }}>
      <CardContent>
        <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
          Portions Saved
        </Typography>
        <Typography
          sx={{ fontSize: 34 }}
          variant="body2"
          body="theme.typography.fontWeightBold"
        >
          {paid}
        </Typography>
      </CardContent>
    </Card>
  );
}

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrder } from "../store/action/order";
import { useEffect } from "react";

export default function CardOrder() {
  const dispatch = useDispatch();
  const { order } = useSelector((state) => {
    console.log(state);
    return state.orderReducer;
  });

  useEffect(() => {
    dispatch(fetchOrder());
  }, []);

  let data = order.map((el) => {
    // console.log(el.Payment, "<<<< id user di payment")
    // console.log(localStorage.getItem("local storage id"))
    return el.Payment.UserId === localStorage.getItem("restoId");
  });


  data = data.length;

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
          {data}
        </Typography>
      </CardContent>
    </Card>
  );
}

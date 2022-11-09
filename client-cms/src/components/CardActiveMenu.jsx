import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { fetchFood } from "../store/action/food";
import { useEffect } from "react";

export default function CardActiveMenu() {
  const dispatch = useDispatch();
  const { food } = useSelector((state) => {
    // console.log(state);
    return state.foodReducer;
  });

  useEffect(() => {
    dispatch(fetchFood());
  }, []);

  let data = food.filter((x) => {
    return x.is_active === true;
  });

  data = data.length;

  return (
    <Card sx={{ width: 220, height: "auto" }}>
      <CardContent>
        <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
          Active Menu
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

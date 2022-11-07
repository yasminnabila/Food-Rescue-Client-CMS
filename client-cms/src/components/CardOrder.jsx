import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function CardOrder() {
  return (
    <Card sx={{ width: 220, height: "auto" }}>
      <CardContent>
        <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom >
          Today's Order
        </Typography>
        <Typography
          sx={{ fontSize: 34 }}
          variant="body2"
          body="theme.typography.fontWeightBold"
        >
          20
        </Typography>
      </CardContent>
    </Card>
  );
}

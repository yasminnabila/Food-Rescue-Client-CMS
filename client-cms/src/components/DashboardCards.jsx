import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function DashboardCards() {
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
          20
        </Typography>
      </CardContent>
    </Card>
  );
}

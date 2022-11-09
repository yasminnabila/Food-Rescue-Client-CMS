import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFood } from "../store/action/food";
import RowsProduct from "../components/RowsProduct";
import { fetchOrder } from "../store/action/order";
import RowsOrder from "./RowsOrder";

export default function Tables(props) {
  const dispatch = useDispatch();
  const { status, head } = props;
  const { food } = useSelector((state) => {
    return state.foodReducer;
  });

  const { order } = useSelector((state) => {
    return state.orderReducer;
  });

  useEffect(() => {
    dispatch(fetchFood());
    dispatch(fetchOrder());
  }, []);

  let tBody;
  const tHead = head.map((e, i) => {
    return <th key={i + "x"}>{e}</th>;
  });
  if (status === "product") {
    tBody = food.map((e, i) => <RowsProduct key={e.id} food={e} no={i} />);
  } else {
    tBody = order.map((e, i) => {
      return <RowsOrder key={e.id} order={e} no={i} />;
    });
  }

  return (
    <div>
      <br />
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>{tHead}</TableRow>
            </TableHead>
            <TableBody>{tBody}</TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFood } from "../store/action/food";
import RowsProduct from "../components/RowsProduct";

export default function Tables(props) {
  const dispatch = useDispatch();
  const { status, head } = props;
  const { food } = useSelector((state) => {
    return state.foodReducer;
  });

  useEffect(() => {
    dispatch(fetchFood());
  }, []);

  let tBody;
  const tHead = head.map((e, i) => {
    return <th key={i + "x"}>{e}</th>;
  });
  if (status === "product") {
    tBody = food.map((e, i) => <RowsProduct key={e.id} food={e} no={i} />);
  }

  return (
    <div>
      <br />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <tr>{tHead}</tr>
          </TableHead>
          <TableBody className="max-w-xs">{tBody}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

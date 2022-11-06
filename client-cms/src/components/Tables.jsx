import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFood } from "../store/action/food";
import RowsProduct from "../components/RowsProduct";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

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

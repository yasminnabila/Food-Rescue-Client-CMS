import * as React from "react";
import {
  deleteFood,
  foodDetailById,
  updateActiveFood,
} from "../store/action/food";
import ToggleSwitch from "./ToggleSwitch";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function RowsProduct(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { no, food } = props;
  const { id, name, imageUrl, price, quantity, discount, newPrice, is_active } =
    food;

  console.log(food, "food!");

  const handleClickEdit = (event, id) => {
    event.preventDefault();
    dispatch(foodDetailById(id));
    navigate(`/admin/edit-product/${id}`);
  };

  const handleDelete = () => {
    dispatch(deleteFood(id));
  };

  const handleClickUpdateActive = (status) => {
    dispatch(updateActiveFood(id, status));
  };

  const formatPrice = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  return (
    <tr className="align-items-center">
      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
        {no + 1}
      </th>
      <td className="align-middle">{name}</td>
      <td className="align-middle">
        <div className="items-center w-40 rounded">
          <img
            src={imageUrl}
            alt={name}
            style={{ height: "75px", width: "75px" }}
            className="rounded-circle"
          />
        </div>
      </td>
      <td className="align-middle">
        {formatPrice(price).substring(0, formatPrice(price).length - 3)}
      </td>
      <td className="align-middle">{discount} %</td>
      <td className="align-middle">
        {formatPrice(newPrice).substring(0, formatPrice(newPrice).length - 3)}
      </td>
      <td className="align-middle">{quantity}</td>
      <td className="align-middle">
        <ToggleSwitch status={is_active} onChange={handleClickUpdateActive} />
      </td>
      <td className="align-middle">
        <button
          onClick={(event) => handleClickEdit(event, id)}
          className="btn btn-dark mx-2"
          style={{ backgroundColor: "#77AA9C", color: "black" }}
        >
          Edit
        </button>
        {/* <Container></Container> */}
        <button onClick={handleDelete} className="btn btn-dark">
          Delete
        </button>
      </td>
    </tr>
  );
}

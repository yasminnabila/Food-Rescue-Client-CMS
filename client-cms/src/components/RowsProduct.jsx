import * as React from "react";
import ToggleSwitch from "./ToggleSwitch";

export default function RowsProduct(props) {
  const { no, food } = props;
  const { name, imageUrl, price, quantity, is_active } = food;
  return (
    <tr className="align-items-center">
      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
        {no + 1}
      </th>
      <td className="align-middle">{name}</td>
      <td className="align-middle">
        <div className="items-center w-40 rounded">
          <img src={imageUrl} alt={name} style={{ height: "8rem" }} />
        </div>
      </td>
      <td className="align-middle">{price}</td>
      <td className="align-middle">{quantity}</td>
      <td className="align-middle">
        <ToggleSwitch label="Active" status={is_active}/>
      </td>
      <td className="align-middle">
        <button
          //   onClick={(event) => handleClickEdit(event, id)}
          className="btn btn-dark"
        >
          Edit
        </button>
      </td>
    </tr>
  );
}

import * as React from "react";

export default function RowsOrder(props) {
  const { no, order } = props;
  const { FoodId, itemPrice, quantity, createdAt, Payment } = order;

  return (
    <tr className="align-items-center">
      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
        {no + 1}
      </th>
      <td className="align-middle">{Payment?.User?.fullName}</td>
      <td className="align-middle">{createdAt}</td>
      <td className="align-middle">{FoodId}</td>
      <td className="align-middle">{quantity}</td>
      <td className="align-middle">{itemPrice}</td>
      <td className="align-middle">{Payment?.is_delivery}</td>
      <td className="align-middle">{Payment?.deliveryFee}</td>
    </tr>
  );
}

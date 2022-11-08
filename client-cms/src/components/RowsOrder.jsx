import * as React from "react";

export default function RowsOrder(props) {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      hour12: true,
      minute: "numeric",
    });
  };

  const formatPrice = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  const { no, order } = props;
  const { FoodId, itemPrice, quantity, createdAt, Payment } = order;

  return (
    <tr className="align-items-center">
      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
        {no + 1}
      </th>
      <td className="align-middle">{Payment?.User?.fullName}</td>
      <td className="align-middle">{formatDate(createdAt)}</td>
      <td className="align-middle">{FoodId}</td>
      <td className="align-middle">{quantity}</td>
      <td className="align-middle">{formatPrice(itemPrice)}</td>
      <td className="align-middle">{Payment?.is_delivery}</td>
    </tr>
  );
}

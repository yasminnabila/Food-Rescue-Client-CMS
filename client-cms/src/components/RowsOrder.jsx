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
  let tData;
  const { no, order } = props;
  if (order.OrderItems.length > 0) {
    tData = order.OrderItems.map((x) => {
      if (x.Payment.status !== "Delivered") {
        return (
          <tr className="align-items-center">
            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
              {x.Payment.id}
            </th>
            <td className="align-middle">{x.Payment?.User?.fullName}</td>
            <td className="align-middle">{formatDate(x.updatedAt)}</td>
            {/* <td className="align-middle">{listLagi}</td> */}
            <td className="align-middle">{x.quantity}</td>
            <td className="align-middle">
              {" "}
              {formatPrice(x.itemPrice).substring(
                0,
                formatPrice(x.itemPrice).length - 3
              )}
            </td>
            <td className="align-middle">{x.Payment?.status}</td>
          </tr>
        );
      }
    });
  }
  console.log(order.OrderItems, "<<<<<<<<<<<<<<");

  const { FoodId, itemPrice, quantity, createdAt, Payment } = order;

  // console.log(Payment, "<<<payment");
  return <>{tData}</>;
}

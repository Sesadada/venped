import React from "react";

function ProductsTableItem(props) {
  const statusColor = (status) => {
    return status > 0
      ? "bg-emerald-100 text-emerald-600"
      : "bg-red-100 text-red-500";
  };

  return (
    <tr>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="font-medium text-sky-500">{props.id}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap text-skin-base">
        <div>{props.title}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div>{props.price} €</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="inline-flex font-medium rounded-full text-center px-2.5 py-0.5 bg-blue-100 text-blue-600">
          {props.tax
            .replace(/^.{0,2}/g, (c) => c.toUpperCase())
            .replace(/_+/g, " ")}{" "}
          %
        </div>
      </td>

      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div
          className={`inline-flex font-medium rounded-full text-center px-2.5 py-0.5 ${statusColor(
            props.stock
          )}`}
        >
          {props.stock}
        </div>
      </td>
    </tr>
  );
}

export default ProductsTableItem;

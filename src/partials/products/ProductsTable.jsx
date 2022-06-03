import { useState } from "react";
import Products from "./ProductsTableItem";
import { useTranslation } from "react-i18next";

function ProductsTable({ list, pagination, setOrder, setOrderby }) {
  const [t, i18n, ready] = useTranslation("global");
  if (!ready) return "loading Translations...";
  const titles = ["ID", "PRODUCTO", "PRECIO", "IMPUESTO", "STOCK"];
  const allTitles = t("productsTable.allProducts", { returnObjects: true });

  const [localPos, setLocalPos] = useState([
    { name: "ID", order: "ASC", trad: "id" },
    { name: "PRODUCTO", order: "ASC", trad: "title" },
    { name: "PRECIO", order: "ASC", trad: "price" },
    { name: "IMPUESTO", order: "ASC", trad: "tax" },
    { name: "STOCK", order: "ASC", trad: "stock" },
  ]);

  const handleOrder = (e) => {
    const sub = e.target.innerText;

    const local = localPos.filter(
      (pos) =>
        pos.name === sub ||
        pos.trad.toUpperCase() === sub ||
        pos.name.slice(0, -1) === sub
    );
    let toggle = local[0].order === "ASC" ? "DESC" : "ASC";

    setLocalPos((prevState) => {
      const newState = prevState.map((obj) => {
        if (
          obj.name === sub ||
          obj.trad.toUpperCase() === sub ||
          obj.name.slice(0, -1) === sub
        ) {
          return { ...obj, order: toggle };
        }
        return obj;
      });
      return newState;
    });

    setOrder(toggle);
    setOrderby(local[0].trad);
  };

  return (
    <div className="bg-white shadow-lg rounded-sm border border-slate-200 relative">
      <header className="px-5 py-4">
        <h2 className="font-semibold text-slate-800">
          {t("productsTable.products")}{" "}
          <span className="text-slate-400 font-medium">
            {pagination.totalResults}
          </span>
        </h2>
      </header>
      <div>
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-slate-500 bg-slate-50 border-t border-b border-slate-200">
              <tr>
                {allTitles.map((title, i) => {
                  return (
                    <th
                      key={i}
                      className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap"
                    >
                      <div
                        onClick={(e) => handleOrder(e)}
                        className="font-semibold text-left cursor-pointer hover:bg-indigo-300 hover:text-neutral-800 w-20 rounded-lg p-1.5 "
                      >
                        {title}
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-200">
              {list.map((product) => {
                return (
                  <Products
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    tax={product.tax}
                    stock={product.stock}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ProductsTable;

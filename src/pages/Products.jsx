import React, { useState, useEffect } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import SearchForm from "../partials/actions/SearchForm";
import FilterButton from "../components/DropdownFilter";
import ProductsTable from "../partials/products/ProductsTable";
import PaginationNumeric from "../components/PaginationNumeric";
import { useTranslation } from "react-i18next";

function Products() {
  const [list, setList] = useState([]);
  const [pagination, setPagination] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [numPage, setNumPage] = useState(1);
  const [titleFilter, setTitleFilter] = useState("");
  const [taxFilter, setTaxFilter] = useState([]);
  const [order, setOrder] = useState("");
  const [orderBy, setOrderby] = useState("");
  const API = "http://vps-123eb2fc.vps.ovh.net/graphql/";
  const query = `query FetchProducts( $tax_filter: [String!], $title_filter: String, $order_by: String, $order: String, $page: Int!, $per_page: Int!){
  fetchProducts {
  results(taxFilter: $tax_filter, titleFilter: $title_filter, orderBy: $order_by, order: $order, page: $page, perPage:
  $per_page) { id
  title price tax stock
  }
  pagination(taxFilter: $tax_filter, titleFilter: $title_filter, orderBy: $order_by, order: $order, page: $page, perPage: $per_page) {
  totalResults limitValue nextPage prevPage firstPage lastPage outOfRange
  } }
  }`;
  const [t, i18n] = useTranslation("global");
  const toEn = () => {
    i18n.changeLanguage("en");
  };
  const toEs = () => {
    i18n.changeLanguage("es");
  };

  useEffect(() => {
    const queryVariables = {
      per_page: 10,
      page: numPage,
      title_filter: titleFilter,
      order: order,
      order_by: orderBy,
    };
    if (taxFilter) {
      const final = taxFilter.map((val) => val.replace(/'/g, '"'));
      queryVariables["tax_filter"] = final;
      if (taxFilter.length === 0) {
        delete queryVariables["tax_filter"];
      }
    }

    const fetchData = async () => {
      const queryRes = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: query, variables: queryVariables }),
      })
        .then((res) => res.json())
        .then((data) => {
          setList(data.data.fetchProducts.results);
          setPagination(data.data.fetchProducts.pagination);
          console.log(data.data.fetchProducts);
        });
    };

    fetchData();
  }, [numPage, titleFilter, taxFilter, order, orderBy]);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          toEs={toEs}
          toEn={toEn}
        />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Page header */}
            <div className="sm:flex sm:justify-between sm:items-center mb-5">
              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
                  {t("productsTable.catalogue")}
                </h1>
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Search form */}
                <SearchForm
                  placeholder={t("productsTable.search")}
                  setTitleFilter={setTitleFilter}
                />
                {/* Filter button */}
                <FilterButton
                  align="right"
                  taxFilter={taxFilter}
                  setTaxFilter={setTaxFilter}
                />
              </div>
            </div>

            {/* Table */}
            <ProductsTable
              list={list}
              pagination={pagination}
              setOrder={setOrder}
              setOrderby={setOrderby}
            />

            {/* Pagination */}
            <div className="mt-8">
              <PaginationNumeric
                pagination={pagination}
                setNumPage={setNumPage}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Products;

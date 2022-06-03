import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.scss";

// Import pages
import Products from "./pages/Products";
import PageNotFound from "./pages/utility/PageNotFound";

function App() {
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

  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Products API={API} query={query} />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;

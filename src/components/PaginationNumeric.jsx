import ReactPaginate from "react-paginate";

function PaginationNumeric({ pagination, setNumPage }) {
  const pageCount = Math.ceil(pagination.totalResults / 10);
  const changePage = ({ selected }) => {
    setNumPage(selected + 1);
  };
  return (
    <>
      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"flex h-10 justify-center"}
        pageClassName={
          "inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white border border-slate-200 hover:bg-indigo-400 hover:text-white cursor-pointer"
        }
        breakClassName={
          "inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white border border-slate-200 hover:bg-indigo-400 hover:text-white cursor-pointer"
        }
        previousLinkClassName={
          "inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white border border-slate-200 mr-2 hover:bg-indigo-400 hover:text-white cursor-pointer"
        }
        nextLinkClassName={
          "inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white border border-slate-200 ml-2 hover:bg-indigo-400 hover:text-white cursor-pointer"
        }
        disabledClassName={"paginationDisabled"}
        activeClassName={"bg-indigo-400 text-white"}
      />

      <div className="flex justify-center">
        <div className="text-sm text-slate-500 text-center sm:text-left py-2">
          <span className="font-medium text-slate-600">1</span> a{" "}
          <span className="font-medium text-slate-600">10</span> de{" "}
          <span className="font-medium text-slate-600">
            {pagination.totalResults}
          </span>{" "}
          resultados
        </div>
      </div>
    </>
  );
}

export default PaginationNumeric;

/*


NAV

        <nav className="flex" role="navigation" aria-label="Navigation">
          <button
            className="mr-2"
            onClick={() => setPage(page - 1)}
            disabled={page > 1 ? false : true}
          >
            <span
              className={`inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white border border-slate-200 ${
                page > 1 ? "text-slate-600" : "text-slate-300"
              }`}
            >
              <span className="sr-only">Previous</span>
              <wbr />
              <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
                <path d="M9.4 13.4l1.4-1.4-4-4 4-4-1.4-1.4L4 8z" />
              </svg>
            </span>
          </button>
          <ul className="inline-flex text-sm font-medium -space-x-px shadow-sm">
            <li>
              <div
                onClick={(e) => specific(e)}
                className={`inline-flex items-center justify-center rounded-l leading-5 px-3.5 py-2 bg-white border border-slate-200 ${
                  !clicked ? "text-blue-500" : "text-slate-600 hover:text-white"
                }`}
              >
                {pagination.prevPage == null ? page : page - 1}
              </div>
            </li>
            <li>
              <div
                onClick={(e) => specific(e)}
                className={`inline-flex items-center justify-center leading-5 px-3.5 py-2 bg-white hover:bg-blue-500 border border-slate-200 ${checkClicked(
                  clicked
                )}`}
              >
                {`${page + 1}`}
              </div>
            </li>
            <li>
              <div
                onClick={(e) => specific(e)}
                className={`inline-flex items-center justify-center leading-5 px-3.5 py-2 bg-white hover:bg-blue-500 border border-slate-200 ${checkClicked(
                  clicked
                )}`}
              >
                {`${page + 2}`}
              </div>
            </li>
            <li>
              <span className="inline-flex items-center justify-center leading-5 px-3.5 py-2 bg-white border border-slate-200 text-slate-400">
                …
              </span>
            </li>
            <li>
              <button className="inline-flex items-center justify-center rounded-r leading-5 px-3.5 py-2 bg-white hover:bg-blue-500 border border-slate-200 text-slate-600 hover:text-white">
                {`${Math.ceil(pagination.totalResults / 10)}`}
              </button>
            </li>
          </ul>
          <div className="ml-2">
            <button
              onClick={() => setPage(page + 1)}
              className="inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white hover:bg-blue-500 border border-slate-200 text-slate-600 hover:text-white shadow-sm"
            >
              <span className="sr-only">Next</span>
              <wbr />
              <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
                <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
              </svg>
            </button>
          </div>
        </nav>















import React, { useState, useEffect } from "react";

function PaginationNumeric({ pagination, numPage, setNumPage }) {
  console.log("numPage", numPage);
  const [page, setPage] = useState(numPage);
  console.log(" Actual page", page);

  return (
    <>
      <div className="flex justify-center">
        <nav className="flex" role="navigation" aria-label="Navigation">
          <button
            className="mr-2"
            onClick={() => setNumPage(numPage - 1)}
            disabled={numPage > 1 ? false : true}
          >
            <span
              className={`inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white border border-slate-200 ${
                numPage > 1 ? "text-slate-600" : "text-slate-300"
              }`}
            >
              <span className="sr-only">Previous</span>
              <wbr />
              <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
                <path d="M9.4 13.4l1.4-1.4-4-4 4-4-1.4-1.4L4 8z" />
              </svg>
            </span>
          </button>
          <ul className="inline-flex text-sm font-medium -space-x-px shadow-sm">
            <li>
              <span className="inline-flex items-center justify-center rounded-l leading-5 px-3.5 py-2 bg-white border border-slate-200 text-blue-500">
                {pagination.prevPage == null ? numPage : numPage - 1}
              </span>
            </li>
            <li>
              <button
                onClick={() => setNumPage(numPage + 1)}
                className="inline-flex items-center justify-center leading-5 px-3.5 py-2 bg-white hover:bg-blue-500 border border-slate-200 text-slate-600 hover:text-white"
              >
                {`${numPage + 1}`}
              </button>
            </li>
            <li>
              <button
                onClick={() => console.log(numPage)}
                className="inline-flex items-center justify-center leading-5 px-3.5 py-2 bg-white hover:bg-blue-500 border border-slate-200 text-slate-600 hover:text-white"
              >
                {`${numPage + 2}`}
              </button>
            </li>
            <li>
              <span className="inline-flex items-center justify-center leading-5 px-3.5 py-2 bg-white border border-slate-200 text-slate-400">
                …
              </span>
            </li>
            <li>
              <button className="inline-flex items-center justify-center rounded-r leading-5 px-3.5 py-2 bg-white hover:bg-blue-500 border border-slate-200 text-slate-600 hover:text-white">
                {`${Math.ceil(pagination.totalResults / 10)}`}
              </button>
            </li>
          </ul>
          <div className="ml-2">
            <button
              onClick={() => setNumPage(numPage + 1)}
              className="inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white hover:bg-blue-500 border border-slate-200 text-slate-600 hover:text-white shadow-sm"
            >
              <span className="sr-only">Next</span>
              <wbr />
              <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
                <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
      <div className="flex justify-center">
        <div className="text-sm text-slate-500 text-center sm:text-left py-2">
          <span className="font-medium text-slate-600">1</span> a{" "}
          <span className="font-medium text-slate-600">10</span> de{" "}
          <span className="font-medium text-slate-600">
            {pagination.totalResults}
          </span>{" "}
          resultados
        </div>
      </div>
    </>
  );
}

export default PaginationNumeric;

*/

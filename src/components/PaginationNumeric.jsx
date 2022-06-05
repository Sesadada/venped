import ReactPaginate from "react-paginate";
import { useTranslation } from "react-i18next";

function PaginationNumeric({ pagination, setNumPage }) {
  const pageCount = Math.ceil(pagination.totalResults / 10);
  const changePage = ({ selected }) => {
    setNumPage(selected + 1);
  };
  const [t, i18n] = useTranslation("global");
  return (
    <div>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount || 96}
        onPageChange={changePage}
        containerClassName={"flex h-10 justify-center"}
        pageClassName={
          "inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white border border-slate-200 hover:bg-skin-button-accent-hover hover:text-skin-inverted cursor-pointer text-skin-base"
        }
        breakClassName={
          "inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white border border-slate-200 hover:bg-skin-button-accent-hover hover:text-skin-inverted cursor-pointer text-skin-base"
        }
        previousLinkClassName={
          "inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white border border-slate-200 mr-2 hover:bg-skin-button-accent-hover hover:text-skin-inverted cursor-pointer text-skin-base"
        }
        nextLinkClassName={
          "inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 bg-white border border-slate-200 ml-2 hover:bg-skin-button-accent-hover hover:text-skin-inverted cursor-pointer text-skin-base"
        }
        disabledClassName={"paginationDisabled"}
        activeClassName={"bg-skin-button-accent text-skin-inverted"}
      />

      <div className="flex justify-center">
        <div className="text-sm text-skin-base text-center sm:text-left py-2">
          <span className="font-medium text-skin-medio">1</span>{" "}
          {t("productsTable.pagTo")}{" "}
          <span className="font-medium text-skin-medio">10</span>{" "}
          {t("productsTable.pagOf")}{" "}
          <span className="font-medium text-skin-medio">
            {pagination.totalResults}
          </span>{" "}
          {t("productsTable.pagRes")}
        </div>
      </div>
    </div>
  );
}

export default PaginationNumeric;

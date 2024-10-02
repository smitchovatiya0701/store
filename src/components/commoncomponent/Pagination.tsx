import React from "react";
type PaginationProps = {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (val: number) => void;
};

const Pagination = ({
  totalPages,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  const maxPagesToShow = 5;
  let startPage, endPage;

  if (totalPages <= maxPagesToShow) {
    startPage = 1;
    endPage = totalPages;
  } else {
    if (currentPage <= 3) {
      startPage = 1;
      endPage = maxPagesToShow;
    } else if (currentPage + 2 >= totalPages) {
      startPage = totalPages - maxPagesToShow + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - 2;
      endPage = currentPage + 2;
    }
  }
  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }
  return (
    <div className="flex items-center justify-center w-full my-4">
      <div className="flex items-center justify-center gap-2 sm:gap-[18px]">
        <button
          className=" p-2 sm:p-3 flex items-center justify-center cursor-pointer"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <p
            className={`${
              currentPage === 1
                ? "cursor-not-allowed text-[#64748b9e]"
                : "cursor-pointer text-slateGray"
            } font-figtree font-semibold text-xs leading-4 md:text-sm `}
          >
            Prev
          </p>
        </button>
        {startPage > 1 && (
          <>
            <div
              className="border-primary border min-w-[34px] min-h-[34px] md:min-w-[50px] md:min-h-[50px] w-full cursor-pointer flex items-center justify-center rounded-[4px] bg-white text-primary"
              onClick={() => setCurrentPage(1)}
            >
              <p className="font-figtree font-semibold text-xs leading-4 md:text-sm  ">
                1
              </p>
            </div>
            {startPage > 2 && (
              <div className="min-w-[34px] min-h-[34px] md:min-w-[50px] md:min-h-[50px] w-full flex items-center justify-center">
                ...
              </div>
            )}
          </>
        )}
        {pages.map((page) => (
          <div
            key={page}
            className={`${
              page === currentPage
                ? "bg-primary text-white "
                : "bg-white text-primary  hover:bg-primary hover:text-white transition-all duration-300"
            } border-primary border min-w-[34px] min-h-[34px] md:min-w-[50px] md:min-h-[50px] w-full  cursor-pointer flex items-center justify-center rounded-[4px]`}
            onClick={() => setCurrentPage(page)}
          >
            <p className="font-figtree font-semibold text-xs leading-4 md:text-sm ">
              {page}
            </p>
          </div>
        ))}
        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && (
              <div className="min-w-[34px] min-h-[34px] md:min-w-[50px] md:min-h-[50px] w-full flex items-center justify-center">
                ...
              </div>
            )}
            <div
              className="border-primary border min-w-[34px] min-h-[34px] md:min-w-[50px] md:min-h-[50px] w-full  cursor-pointer flex items-center justify-center rounded-[4px] bg-white text-primary"
              onClick={() => setCurrentPage(totalPages)}
            >
              <p className="font-figtree font-semibold text-xs leading-4 md:text-sm ">
                {totalPages}
              </p>
            </div>
          </>
        )}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className=" p-2 sm:p-3  flex items-center justify-center cursor-pointer"
        >
          <p
            className={`${
              currentPage === totalPages
                ? "cursor-not-allowed text-[#64748b9e]"
                : "cursor-pointer text-slateGray"
            } font-figtree font-semibold text-xs leading-4 md:text-sm `}
          >
            Next
          </p>
        </button>
      </div>
    </div>
  );
};

export default Pagination;

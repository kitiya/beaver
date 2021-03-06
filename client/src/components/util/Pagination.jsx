import React from "react";
const cursorPointerStyle = {
  cursor: "pointer"
};
const Pagination = ({ totalPages, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <span
              onClick={() => paginate(number)}
              className="page-link"
              style={cursorPointerStyle}
            >
              {number}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

export const PaginationPrevNext = ({ props }) => {
  //console.log(props);
  const currentPage = props.currentPage;
  const handleNext = props.handleNext;
  const handlePrev = props.handlePrev;
  const totalPages = props.totalPages;

  // const disableFirst = isFirst ? 'disabled' : '';
  // const disableLast = isLast ? 'disabled' : '';

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-between align-items-center">
        <li className="page-item">
          {/* <a className={"page-link " + disableFirst}  href="#" aria-label="Previous"> */}
          <span
            className="page-link"
            aria-label="Previous"
            onClick={handlePrev}
            style={cursorPointerStyle}
          >
            <i className="layout-icon text-info fa fa-angle-double-left"></i>
            <span className="sr-only">Previous</span>
          </span>
        </li>
        <li className="text-dark">
          page {currentPage + 1} of {totalPages}
        </li>
        <li className="page-item">
          <span
            className="page-link"
            aria-label="Next"
            onClick={handleNext}
            style={cursorPointerStyle}
          >
            <i className="layout-icon text-info fa fa-angle-double-right"></i>
            <span className="sr-only">Next</span>
          </span>
        </li>
      </ul>
    </nav>
  );
};

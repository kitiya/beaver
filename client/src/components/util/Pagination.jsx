import React from 'react';

const Pagination = ( { totalPages, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i<= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <span onClick={() => paginate(number)} className='page-link'>
                            {number}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Pagination;

export const PaginationPrevNext = ( { props }) => {
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
                <a className="page-link"  href="#" aria-label="Previous" onClick={handlePrev}>
                    <i className="layout-icon text-info fa fa-angle-double-left"></i>
                    <span className="sr-only">Previous</span>
                </a>
            </li>
            <li className="text-dark">page {currentPage + 1} of {totalPages}</li>
            <li className="page-item">
                <a className="page-link" href="#" aria-label="Next" onClick={handleNext}>
                    <i className="layout-icon text-info fa fa-angle-double-right" ></i>
                    <span className="sr-only">Next</span>
                </a>
            </li>
        </ul>
    </nav>
    );
}

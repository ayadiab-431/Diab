import { useState, useEffect, useMemo } from "react";
import './Pagination.css';
import useWindowVisibleCount from "../../Hooks/useWindowVisibleCount";
export default function Pagination({ currentPage, totalPages, onPageChange }) {

  const [startPage, setStartPage] = useState(1);

    // Get Visible Count for pagination
    const visibleCount = useWindowVisibleCount();

    // visible arrow condition
    const showArrows = totalPages > visibleCount;

  useEffect(() => {
    if (currentPage < startPage) {
      setStartPage(currentPage);
    } else if (currentPage >= startPage + visibleCount) {
      setStartPage(currentPage - visibleCount + 1);
    }
  }, [currentPage, startPage, visibleCount]);

  // Page Numbers
  const visiblePages = useMemo(() => {
    const endPage = Math.min(startPage + visibleCount - 1, totalPages);
    return Array.from({length: endPage - startPage + 1}, (_, i) => startPage + i);
  }, [startPage, visibleCount, totalPages]);

  const handlePageClick = (page) => {
    onPageChange(page);

    if (page === startPage && startPage > 1) {
      setStartPage(startPage - 1);
    }

    if (page === startPage + visibleCount - 1 && page < totalPages) {
      setStartPage(startPage + 1);
    }
  };


  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  };

  return (
    <div className="pagination d-flex gap-2 justify-content-center align-items-center my-5">
      {/*Right Arrow */}

      {(currentPage > 1)&& showArrows && <button
        className="px-3 py-1 rounded arrow-btn"
        onClick={() => {
          goToTop();
          if (currentPage > 1) {
            onPageChange(currentPage - 1);

            if (currentPage - 1 < startPage) {
              setStartPage(startPage - 1);
            }
          }
        }}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>}

      {visiblePages.map((page) => (
        <button
          key={page}
          className={`px-3 py-1 rounded ${
            page === currentPage ? "active" : ""
          } btn-page`}
          onClick={() => {
            handlePageClick(page);
          goToTop();}}
        >
          {page}
        </button>
      ))}

      {/*Left Arrow*/}
      {(currentPage < totalPages) && showArrows && <button
        className="px-3 py-1 rounded arrow-btn"
        onClick={() => {
          goToTop();
          if (currentPage < totalPages) {
            onPageChange(currentPage + 1);

            if (currentPage + 1 >= startPage + visibleCount) {
              setStartPage(startPage + 1);
            }
          }
        }}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>}
    </div>
  );
}

import React from "react";
import _ from "lodash";
const Pagination = (props) => {
  const { itemCount, pageSize, onPagechange, currentPage } = props;
  const pagescount = itemCount / pageSize;
  if (pagescount <= 1) return null;
  const pages = _.range(1, pagescount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPagechange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Pagination;

import React from "react";
import classes from "./pagination.module.scss";
const Pagination = ({ productsInPage, totalProducts, paginate}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsInPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className={classes.pagination_buttons}>
      <ul className={classes.pagination_buttons__container}>
        {pageNumbers.map((number) => (
          <li key={number} className={classes.pagination_buttons__item}>
            <a href="#" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;

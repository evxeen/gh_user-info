import React from "react";
import { ReactComponent as ArrowL } from "../../assets/icons/arrowL.svg";
import { ReactComponent as ArrowR } from "../../assets/icons/arrowR.svg";
import s from "./Pagination.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPageAction } from "../../store/actions/actions";

export const Pagination = ({ firstPageIndex, lastPageIndex }) => {
  const { repositories, currentPage, perPage } = useSelector((state) => state);
  const dispatch = useDispatch();

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(repositories.length / perPage); i++) {
    pageNumbers.push(i);
  }

  const buttonLeft =
    currentPage === pageNumbers.length - pageNumbers.length + 1
      ? `${s.button} ${s.disabled}`
      : s.button;

  const buttonRight =
    currentPage === pageNumbers.length ? `${s.button} ${s.disabled}` : s.button;

  return (
    <div className={s.pagination}>
      <p className={s.info}>
        {`${firstPageIndex + 1} - ${lastPageIndex}`} of {repositories.length}{" "}
        items
      </p>
      <button
        className={buttonLeft}
        onClick={() => dispatch(setCurrentPageAction(currentPage - 1))}
      >
        <ArrowL className={s.arrow} />
      </button>
      <div className={s.pages}>
        {pageNumbers.map((page, index) => (
          <span
            key={index}
            className={
              currentPage === page ? `${s.pageBtn} ${s.active}` : `${s.pageBtn}`
            }
            onClick={() => dispatch(setCurrentPageAction(page))}
          >
            {page}
          </span>
        ))}
      </div>
      <button
        className={buttonRight}
        onClick={() => dispatch(setCurrentPageAction(currentPage + 1))}
      >
        <ArrowR className={s.arrow} />
      </button>
    </div>
  );
};

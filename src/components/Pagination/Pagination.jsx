import React from "react";
import { ReactComponent as ArrowL } from "../../assets/icons/arrowL.svg";
import { ReactComponent as ArrowR } from "../../assets/icons/arrowR.svg";
import s from "./Pagination.module.scss";
import { useDispatch, useSelector } from "react-redux";

export const Pagination = () => {
  const { repositories, currentPage, perPage } = useSelector((state) => state);
  const dispatch = useDispatch();

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(repositories.length / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={s.pagination}>
      <button
        className={
          currentPage === pageNumbers.length - pageNumbers.length + 1
            ? `${s.button} ${s.disabled}`
            : s.button
        }
        onClick={() =>
          dispatch({ type: "SET_CURRENT_PAGE", payload: currentPage - 1 })
        }
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
            onClick={() =>
              dispatch({ type: "SET_CURRENT_PAGE", payload: page })
            }
          >
            {page}
          </span>
        ))}
      </div>
      <button
        className={
          currentPage === pageNumbers.length
            ? `${s.button} ${s.disabled}`
            : s.button
        }
        onClick={() =>
          dispatch({ type: "SET_CURRENT_PAGE", payload: currentPage + 1 })
        }
      >
        <ArrowR className={s.arrow} />
      </button>
    </div>
  );
};

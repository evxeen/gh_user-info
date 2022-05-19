import React, { useState } from "react";
import logo from "../../assets/icons/logo.svg";
import s from "./Header.module.scss";
import { useDispatch } from "react-redux";
import { getReposAction, getUserAction } from "../../store/actions/actions";

export const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();

  const inputChangeHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    dispatch(getUserAction(searchInput));
    dispatch(getReposAction(searchInput));
  };

  return (
    <div className={s.header}>
      <img className={s.logo} src={logo} alt="logo" />
      <form onSubmit={submitFormHandler}>
        <input
          className={s.searchField}
          type="text"
          value={searchInput}
          onChange={inputChangeHandler}
          placeholder="Enter GitHub username"
        />
      </form>
    </div>
  );
};

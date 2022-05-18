import React, { useState } from "react";
import logo from "../../assets/icons/Vector.svg";
import styles from "./Header.module.scss";
import { useDispatch } from "react-redux";
import {
  getReposAction,
  getUserAction,
} from "../../store/actions/profileActions";

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
    <div className={styles.header}>
      <img src={logo} alt="logo" />
      <form onSubmit={submitFormHandler}>
        <input
          type="text"
          value={searchInput}
          onChange={inputChangeHandler}
          placeholder="Enter GitHub username"
        />
      </form>
    </div>
  );
};

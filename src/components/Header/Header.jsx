import React from "react";
import logo from "../../assets/icons/Vector.svg";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.header}>
      <img src={logo} alt="logo" />
      <input type="text" />
    </div>
  );
};

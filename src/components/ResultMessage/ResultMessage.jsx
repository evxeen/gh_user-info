import React from "react";
import styles from "./ResultMessage.module.scss";
import icon from "../../assets/icons/search.svg";

export const ResultMessage = () => {
  return (
    <div className={styles.message}>
      <img src={icon} alt="icon" />
      <p>Start with searching a GitHub user</p>
    </div>
  );
};

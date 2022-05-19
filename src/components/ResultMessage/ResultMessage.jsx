import React from "react";
import styles from "./ResultMessage.module.scss";
import icon from "../../assets/icons/search.svg";
import { useSelector } from "react-redux";

export const ResultMessage = () => {
  const { message } = useSelector((state) => state);
  return (
    <div className={styles.message}>
      <img src={icon} alt="icon" />
      <p>{message}</p>
    </div>
  );
};

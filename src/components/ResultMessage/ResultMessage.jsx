import React from "react";
import styles from "./ResultMessage.module.scss";
import searchIcon from "../../assets/icons/search.svg";
import notFoundIcon from "../../assets/icons/notFound.svg";
import noRepos from "../../assets/icons/no-repositories.svg";
import { useSelector } from "react-redux";
import { Loader } from "../Loader/Loader";

export const ResultMessage = () => {
  const { stateApp, message, isLoading } = useSelector((state) => state);

  return (
    <div className={styles.message}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {stateApp === "initial" && <img src={searchIcon} alt="icon" />}
          {stateApp === "nfUser" && <img src={notFoundIcon} alt="icon" />}
          {stateApp === "nfRepos" && <img src={noRepos} alt="icon" />}
          <p>{message}</p>
        </>
      )}
    </div>
  );
};

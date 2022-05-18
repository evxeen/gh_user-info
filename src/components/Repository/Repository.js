import React from "react";
import s from "./Repository.module.scss";

export const Repository = ({ name, desc, link }) => {
  return (
    <div className={s.repository}>
      <a href={link} className={s.repositoryName} target="_blank">
        {name}
      </a>
      <p className={s.repositoryDesc}>
        {desc ? desc : "Description is missing"}
      </p>
    </div>
  );
};

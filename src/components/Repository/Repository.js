import React from "react";
import s from "./Repository.module.scss";

export const Repository = ({ name, desc, link }) => {
  return (
    <div className={s.repository}>
      <a href={link} className={s.name} target="_blank">
        {name}
      </a>
      <p className={s.description}>{desc ? desc : "Description is missing"}</p>
    </div>
  );
};

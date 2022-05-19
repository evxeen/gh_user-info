import React from "react";
import s from "./RepositoriesBlock.module.scss";
import { useSelector } from "react-redux";
import { Repository } from "../Repository/Repository";
import { ResultMessage } from "../ResultMessage/ResultMessage";

export const RepositoriesBlock = () => {
  const { repositories } = useSelector((state) => state);
  return (
    <div className={s.reposInfo}>
      {!repositories.length ? (
        <ResultMessage />
      ) : (
        <>
          <h2 className={s.repositories}>
            Repositories ({repositories.length})
          </h2>
          {repositories.map((rep, index) => (
            <Repository
              key={index}
              name={rep.name}
              desc={rep.description}
              link={rep.html_url}
            />
          ))}
        </>
      )}
    </div>
  );
};

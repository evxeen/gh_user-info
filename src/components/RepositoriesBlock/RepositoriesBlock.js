import React from "react";
import s from "./RepositoriesBlock.module.scss";
import { useSelector } from "react-redux";
import { Repository } from "../Repository/Repository";
import { ResultMessage } from "../ResultMessage/ResultMessage";
import { Pagination } from "../Pagination/Pagination";

export const RepositoriesBlock = () => {
  const { repositories, currentPage, perPage } = useSelector((state) => state);

  const lastPageIndex = currentPage * perPage;
  const firstPageIndex = lastPageIndex - perPage;
  const currentRepos = repositories.slice(firstPageIndex, lastPageIndex);

  return (
    <div className={s.repositoriesBlock}>
      {!repositories.length && <ResultMessage />}
      {repositories.length > 0 && (
        <>
          <h2 className={s.repositories}>
            Repositories ({repositories.length})
          </h2>
          <div className={s.reposContainer}>
            {currentRepos.map((rep, index) => (
              <Repository
                key={index}
                name={rep.name}
                desc={rep.description}
                link={rep.html_url}
              />
            ))}
          </div>
          <Pagination
            firstPageIndex={firstPageIndex}
            lastPageIndex={lastPageIndex}
          />
        </>
      )}
    </div>
  );
};

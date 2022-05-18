import React from "react";
import s from "./ProfilePage.module.scss";
import { useSelector } from "react-redux";
import { Repository } from "../Repository/Repository";
import { User } from "../User/User";

export const ProfilePage = () => {
  const { repositories } = useSelector((state) => state);
  return (
    <div className={s.profilePage}>
      <User />
      <div className={s.reposInfo}>
        <h2>Repositories ({repositories.length})</h2>
        {repositories.map((rep, index) => (
          <Repository
            key={index}
            name={rep.name}
            desc={rep.description}
            link={rep.html_url}
          />
        ))}
      </div>
    </div>
  );
};

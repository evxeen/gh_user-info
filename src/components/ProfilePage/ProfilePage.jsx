import React from "react";
import s from "./ProfilePage.module.scss";
import { UserBlock } from "../UserBlock/UserBlock";
import { RepositoriesBlock } from "../RepositoriesBlock/RepositoriesBlock";

export const ProfilePage = () => {
  return (
    <div className={s.profilePage}>
      <UserBlock />
      <RepositoriesBlock />
    </div>
  );
};

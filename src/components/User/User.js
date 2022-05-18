import React from "react";
import s from "./User.module.scss";
import followers from "../../assets/icons/followers.svg";
import following from "../../assets/icons/following.svg";
import { useSelector } from "react-redux";

export const User = () => {
  const { user, repositories } = useSelector((state) => state);

  return (
    <div className={s.userInfo}>
      <img className={s.userPhoto} src={user.avatar_url} alt="User" />
      <h2 className={s.userName}>{user.name}</h2>
      <a className={s.userLink} href={user.html_url} target="_blank">
        {user.login}
      </a>
      <div className={s.subsBlock}>
        <img src={followers} alt="followers" />
        <span>{user.followers} followers</span>
        <img src={following} alt="following" />
        <span>{user.following} following</span>
      </div>
    </div>
  );
};

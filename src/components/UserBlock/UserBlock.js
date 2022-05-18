import React from "react";
import s from "./UserBlock.module.scss";
import followers from "../../assets/icons/followers.svg";
import following from "../../assets/icons/following.svg";
import { useSelector } from "react-redux";

export const UserBlock = () => {
  const { user } = useSelector((state) => state);

  const countFollow = (value) => {
    if (value < 1000) {
      return value;
    }
    return (value / 1000).toFixed(1) + "k";
  };

  return (
    <div className={s.userInfo}>
      <img className={s.avatar} src={user.avatar_url} alt="UserBlock" />
      <h2 className={s.name}>{user.name}</h2>
      <a className={s.link} href={user.html_url} target="_blank">
        {user.login}
      </a>
      <div className={s.subsBlock}>
        <img src={followers} alt="followers" />
        <span>{countFollow(user.followers)} followers</span>
        <img src={following} alt="following" />
        <span>{countFollow(user.following)} following</span>
      </div>
    </div>
  );
};

import { Avatar, Button, Card } from "antd";
import Link from "next/link";
import React, { Dispatch, FC, SetStateAction, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reducerType } from "../reducers";
import { logoutRequestAction } from "../reducers/user";

const UserProfile: FC = () => {
  const disaptch = useDispatch();
  const { me, logOutLoading } = useSelector((state: reducerType) => state.user);

  const onClickLogout = useCallback(() => {
    disaptch(logoutRequestAction());
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">
          <Link href={`/user/${me.id}`}>
            짹짹
            <br />
            {me.Posts.length}
          </Link>
        </div>,
        <div key="followings">
          <Link href="/profile">
            팔로잉
            <br />
            {me.Followings.length}
          </Link>
        </div>,
        <div key="followings">
          <Link href="/profile">
            팔로워
            <br />
            {me.Followers.length}
          </Link>
        </div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{me.nickname[0]}</Avatar>}
        title={me.nickname}
      />
      <Button onClick={onClickLogout} loading={logOutLoading}>
        로그아웃
      </Button>
    </Card>
  );
};

export default UserProfile;

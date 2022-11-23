import { Avatar, Button, Card } from "antd";
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
          게시글
          <br />
          {me.Posts.length}
        </div>,
        <div key="followings">
          팔로잉
          <br />
          {me.Followings.length}
        </div>,
        <div key="followings">
          팔로워
          <br />
          {me.Followers.length}
        </div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{me.nickname[0]}</Avatar>}
        title={me.nickname[0]}
      />
      <Button onClick={onClickLogout} loading={logOutLoading}>
        로그아웃
      </Button>
    </Card>
  );
};

export default UserProfile;

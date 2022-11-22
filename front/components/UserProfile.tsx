import { Avatar, Button, Card } from "antd";
import React, { Dispatch, FC, SetStateAction, useCallback } from "react";
import { useDispatch } from "react-redux";
import { logoutAction } from "../reducer/user";

const UserProfile: FC = () => {
  const disaptch = useDispatch();
  const onClickLogout = useCallback(() => {
    disaptch(logoutAction());
  }, []);
  return (
    <Card
      actions={[
        <div key="twit">짹짹</div>,
        <div key="followings">팔로잉</div>,
        <div key="followings">팔로우</div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>hello</Avatar>} title="Card title" />
      <Button onClick={onClickLogout}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;

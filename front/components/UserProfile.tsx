import { Avatar, Button, Card } from "antd";
import React, { Dispatch, FC, SetStateAction, useCallback } from "react";

interface Props {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}
const UserProfile: FC<Props> = ({ setIsLogin }) => {
  const onClickLogout = useCallback(() => {
    setIsLogin(false);
  }, []);
  return (
    <Card
      style={{ width: 300 }}
      // cover={
      //   <img
      //     alt="example"
      //     src="https://cdn.class101.net/images/e16f5209-bf9a-49c4-b429-bfa8792bfb51"
      //   />
      // }
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

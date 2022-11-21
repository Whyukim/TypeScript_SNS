import Head from "next/head";
import React, { FC } from "react";
import AppLayout from "../components/AppLayout";
import FollowList from "../components/FollowList";
import NickNameEditForm from "../components/NickNameEditForm";

const profile: FC = () => {
  const followerList = [
    { nickname: "hello" },
    { nickname: "world" },
    { nickname: "hi" },
  ];
  const followingList = [
    { nickname: "world" },
    { nickname: "hi" },
    { nickname: "kkkk" },
  ];

  return (
    <>
      <Head>
        <title>프로필 | twitter</title>
      </Head>
      <AppLayout>
        <NickNameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default profile;

import Head from "next/head";
import Router from "next/router";
import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import FollowList from "../components/FollowList";
import NickNameEditForm from "../components/NickNameEditForm";
import { reducerType } from "../reducers";

const profile: FC = () => {
  const { me } = useSelector((state: reducerType) => state.user);

  useEffect(() => {
    if (!(me && me.id)) {
      Router.push("/");
    }
  }, [me && me.id]);

  if (!me) return null;
  return (
    <>
      <Head>
        <title>프로필 | twitter</title>
      </Head>
      <AppLayout>
        <NickNameEditForm />
        <FollowList header="팔로잉" data={me?.Followings} />
        <FollowList header="팔로워" data={me?.Followers} />
      </AppLayout>
    </>
  );
};

export default profile;

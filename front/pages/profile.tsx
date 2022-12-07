import axios from "axios";
import Head from "next/head";
import Router from "next/router";
import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { END } from "redux-saga";
import AppLayout from "../components/AppLayout";
import FollowList from "../components/FollowList";
import NickNameEditForm from "../components/NickNameEditForm";
import { reducerType } from "../reducers";
import {
  LOAD_FOLLOWERS_REQUEST,
  LOAD_FOLLOWINGS_REQUEST,
  LOAD_MY_INFO_REQUEST,
} from "../reducers/user";
import wrapper from "../store/configureStore";

const profile: FC = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state: reducerType) => state.user);

  useEffect(() => {
    dispatch({
      type: LOAD_FOLLOWERS_REQUEST,
    });
    dispatch({
      type: LOAD_FOLLOWINGS_REQUEST,
    });
  }, []);

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

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const cookie = context.req ? context.req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";

    // 프론트 서버에서 쿠기가 공유되는 문제
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }

    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });


    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default profile;

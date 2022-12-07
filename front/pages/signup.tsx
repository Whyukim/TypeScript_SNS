import { Button, Checkbox, Form, Input } from "antd";
import Head from "next/head";
import React, { FC, useCallback, useEffect, useState } from "react";
import AppLayout from "../components/AppLayout";
import useInput from "../hooks/useInput";

import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_MY_INFO_REQUEST, SIGN_UP_REQUEST } from "../reducers/user";
import { reducerType } from "../reducers";
import Router from "next/router";
import axios from "axios";
import wrapper from "../store/configureStore";
import { END } from "redux-saga";

const signup: FC = () => {
  const dispatch = useDispatch();
  const { signUpLoading, signUpDone, signUpError, me } = useSelector(
    (state: reducerType) => state.user
  );

  const [passwordCheck, setPasswordCheck] = useState("");
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const [email, onChangeEmail] = useInput("");
  const [nickname, onChangeNickName] = useInput("");
  const [password, onChangePassword] = useInput("");

  useEffect(() => {
    if (me && me?.id) {
      Router.replace("/");
    }
  }, [me, me?.id]);

  useEffect(() => {
    if (signUpDone) {
      Router.replace("/");
    }
  }, [signUpDone]);

  useEffect(() => {
    if (signUpError) {
      alert(signUpError);
    }
  }, [signUpError]);

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      setPasswordError(true);
      return;
    }
    if (!term) {
      setTermError(true);
      return;
    }
    dispatch({
      type: SIGN_UP_REQUEST,
      data: { email, password, nickname },
    });
  }, [email, nickname, password, passwordCheck, term]);

  const onChangePasswordCheck = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPasswordError(e.target.value !== password);
      setPasswordCheck(e.target.value);
    },
    [password]
  );

  const onChangeTerm = useCallback((e: CheckboxChangeEvent) => {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);

  return (
    <>
      <AppLayout>
        <Head>
          <title>회원가입 | twitter</title>
        </Head>
        <Form onFinish={onSubmit} style={{ padding: 10 }}>
          <div>
            <label htmlFor="user-email">이메일</label>
            <br />
            <Input
              name="user-email"
              value={email}
              type="email"
              required
              onChange={onChangeEmail}
            />
          </div>
          <div>
            <label htmlFor="user-nickname">닉네임</label>
            <br />
            <Input
              name="user-nickname"
              value={nickname}
              required
              onChange={onChangeNickName}
            />
          </div>
          <div>
            <label htmlFor="user-password">비밀번호</label>
            <br />
            <Input
              name="user-password"
              type="password"
              value={password}
              required
              onChange={onChangePassword}
            />
          </div>
          <div>
            <label htmlFor="user-password-check">비밀번호체크</label>
            <br />
            <Input
              name="user-password-check"
              type="password"
              value={passwordCheck}
              required
              onChange={onChangePasswordCheck}
            />
            {passwordError && (
              <div style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</div>
            )}
          </div>
          <div>
            <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
              제로초 말을 잘 들을 것을 동의합니다.
            </Checkbox>
            {termError && (
              <div style={{ color: "red" }}>약관에 동의하셔야 합니다.</div>
            )}
          </div>
          <div style={{ marginTop: 10 }}>
            <Button type="primary" htmlType="submit" loading={signUpLoading}>
              가입하기
            </Button>
          </div>
        </Form>
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

export default signup;

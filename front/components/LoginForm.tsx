import React, {
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useState,
} from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { loginRequestAction } from "../reducers/user";
import { reducerType } from "../reducers";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const LogoutWrapper = styled(Form)`
  margin: 10px;
`;

const LoginForm: FC = () => {
  const dispatch = useDispatch();
  const { logInLoading } = useSelector((state: reducerType) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);
  const onChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );
  const onSubmitForm = useCallback(() => {
    dispatch(loginRequestAction({ email, password }));
  }, [email, password]);

  return (
    <LogoutWrapper onFinish={onSubmitForm}>
      <div>
        <label>이메일</label>
        <br />
        <Input
          name="user-email"
          type="email"
          value={email}
          onChange={onChangeId}
          required
        />
      </div>
      <div>
        <label>비밀번호</label>
        <br />
        <Input
          name="user-password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={logInLoading}>
          로그인
        </Button>
        <Link href="/signup">
          <Button>회원가입</Button>
        </Link>
      </ButtonWrapper>
    </LogoutWrapper>
  );
};

export default LoginForm;

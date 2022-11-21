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

interface Props {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const LogoutWrapper = styled(Form)`
  margin: 10px;
`;

const LoginForm: FC<Props> = ({ setIsLogin }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onChangeId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  }, []);
  const onChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );
  const onSubmitFinish = useCallback(() => {
    setIsLogin(true);
  }, []);

  return (
    <LogoutWrapper onFinish={onSubmitFinish}>
      <div>
        <label>아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
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
        <Button type="primary" htmlType="submit" loading={false}>
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

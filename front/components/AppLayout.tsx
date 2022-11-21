import React, { FC, useState } from "react";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";
import styled from "styled-components";

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const AppLayout: FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">홈</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">프로필</Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">회원가입</Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLogin ? (
            <UserProfile setIsLogin={setIsLogin} />
          ) : (
            <LoginForm setIsLogin={setIsLogin} />
          )}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://www.naver.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            이동
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default AppLayout;

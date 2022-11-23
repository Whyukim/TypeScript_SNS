import React, { FC, useState } from "react";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { reducerType } from "../reducers";
import { createGlobalStyle } from "styled-components";
interface menuItems {
  label: JSX.Element;
  key: string;
}

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const Global = createGlobalStyle`
  .ant-row {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  
  .ant-col:first-child {
      padding-left: 0 !important;
  }
  
  .ant-col:last-child {
    padding-right: 0 !important;
  }
`;

const menuItems: menuItems[] = [
  {
    label: <Link href="/">홈</Link>,
    key: "home",
  },
  {
    label: <Link href="/profile">프로필</Link>,
    key: "a",
  },
  {
    label: <SearchInput />,
    key: "b",
  },
  {
    label: <Link href="/signup">회원가입</Link>,
    key: "c",
  },
];

const AppLayout: FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const { me } = useSelector((state: reducerType) => state.user);

  return (
    <div>
      <Global />
      <Menu mode="horizontal" items={menuItems} />
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {me ? <UserProfile /> : <LoginForm />}
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

import { Form, Input } from "antd";
import React, { FC } from "react";
import styled from "styled-components";

const NickNameForm = styled(Form)`
  margin-bottom: 20px;
  border: 1px solid #d9d9d9;
  padding: 20px;
`;

const NickNameEditForm: FC = () => {
  return (
    <NickNameForm>
      <Input.Search addonBefore="닉네임" enterButton="수정" />
    </NickNameForm>
  );
};

export default NickNameEditForm;

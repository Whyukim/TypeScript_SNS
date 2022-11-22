import React, { FC } from "react";
import styled from "styled-components";
import { Avatar } from "antd";

interface Props {
  author: string;
  avartar: string;
  content: string;
}

const CommentWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;

    & > span {
      color: rgba(0, 0, 0, 0.45);
    }

    & > p {
      margin: 0;
      padding: 0;
    }
  }
`;

const Comment: FC<Props> = ({ author, avartar, content }) => {
  return (
    <CommentWrapper>
      <Avatar>{avartar}</Avatar>
      <div>
        <span>{author}</span>
        <p>{content}</p>
      </div>
    </CommentWrapper>
  );
};

export default Comment;

import { Button, Form, Input } from "antd";
import React, { FC, useCallback } from "react";
import { useSelector } from "react-redux";
import useInput from "../hooks/useInput";
import { reducerType } from "../reducer";
import { postStateChild } from "../reducer/post";

interface Props {
  post: postStateChild;
}

const CommentForm: FC<Props> = ({ post }) => {
  const id = useSelector((state: reducerType) => state.user?.me?.id);
  const [commentText, onChangeCommentText] = useInput("");

  const onSubmitComment = useCallback(() => {
    console.log(post.id, commentText, id);
  }, [commentText]);

  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{ position: "relative", margin: 0 }}>
        <Input.TextArea
          rows={4}
          value={commentText}
          onChange={onChangeCommentText}
        />
        <Button
          style={{
            position: "absolute",
            right: 0,
            bottom: -40,
            zIndex: 1,
          }}
          type="primary"
          htmlType="submit"
        >
          보내기
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CommentForm;

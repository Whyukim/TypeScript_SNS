import { Button, Form, Input } from "antd";
import React, { FC, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../hooks/useInput";
import { reducerType } from "../reducers";
import { ADD_COMMENT_REQUEST } from "../reducers/post";
import { postStateChild } from "../typings/post";

interface Props {
  post: postStateChild;
}

const CommentForm: FC<Props> = ({ post }) => {
  const dispatch = useDispatch();
  const id = useSelector((state: reducerType) => state.user?.me?.id);
  const [commentText, onChangeCommentText, setCommentText] = useInput("");
  const { addCommentDone } = useSelector((state: reducerType) => state.post);

  useEffect(() => {
    if (addCommentDone) {
      setCommentText("");
    }
  }, [addCommentDone]);

  const onSubmitComment = useCallback(() => {
    dispatch({
      type: ADD_COMMENT_REQUEST,
      data: { content: commentText, postId: post.id, userId: id },
    });
  }, [commentText, id]);

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

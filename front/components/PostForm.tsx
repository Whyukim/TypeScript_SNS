import { Button, Form, Input } from "antd";
import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../hooks/useInput";
import { reducerType } from "../reducers";
import {
  addPost,
  ADD_POST_REQUEST,
  REMOVE_IMAGE,
  UPLOAD_IMAGES_REQUEST,
} from "../reducers/post";

const PostForm = () => {
  const dispatch = useDispatch();

  const { imagePaths, addPostDone } = useSelector(
    (state: reducerType) => state.post
  );
  const [text, onChagneText, setText] = useInput("");
  const imageInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (addPostDone) {
      setText("");
    }
  }, [addPostDone]);

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onChangeImages = useCallback((e) => {
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append("image", f);
    });
    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData,
    });
  }, []);

  const onRemoveImage = useCallback(
    (index) => () => {
      dispatch({
        type: REMOVE_IMAGE,
        data: index,
      });
    },
    []
  );

  const onSubmit = useCallback(() => {
    if (!text || !text.trim()) return alert("게시글을 작성하세요.");

    const formData = new FormData();
    imagePaths.forEach((i) => {
      formData.append("image", i);
    });
    formData.append("content", text);
    dispatch({ type: ADD_POST_REQUEST, data: formData });
  }, [text, imagePaths]);

  return (
    <Form
      style={{ margin: "10px 0 20px" }}
      encType="multipart/form-data"
      onFinish={onSubmit}
    >
      <Input.TextArea
        value={text}
        onChange={onChagneText}
        maxLength={140}
        placeholder="텍스트를 입력해주시길 바랍니다."
      />
      <div>
        <input
          type="file"
          name="image"
          multiple
          hidden
          ref={imageInput}
          onChange={onChangeImages}
        />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <Button type="primary" style={{ float: "right" }} htmlType="submit">
          보내기
        </Button>
      </div>
      <div>
        {imagePaths.map((v, i) => (
          <div key={v} style={{ display: "inline-block" }}>
            <img
              src={`http://localhost:3065/${v}`}
              style={{ width: "200px" }}
              alt={v}
            />
            <div>
              <Button onClick={onRemoveImage(i)}>제거</Button>
            </div>
          </div>
        ))}
      </div>
    </Form>
  );
};

export default PostForm;

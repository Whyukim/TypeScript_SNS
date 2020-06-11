import {
  EllipsisOutlined,
  HeartOutlined,
  HeartTwoTone,
  MessageOutlined,
  RetweetOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Card, List, Popover } from "antd";
import Link from "next/link";
import React, { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reducerType } from "../reducers";
import {
  LIKE_POST_REQUEST,
  REMOVE_POST_REQUEST,
  RETWEET_REQUEST,
  UNLIKE_POST_REQUEST,
} from "../reducers/post";
import { postCommentState, postStateChild } from "../typings/post";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import FollowButton from "./FollowButton";
import PostCardContent from "./PostCardContent";
import PostImages from "./PostImages";
import moment from "moment";

export interface Props {
  post: postStateChild;
}

const PostCard: FC<Props> = ({ post }) => {
  const dispatch = useDispatch();
  const id = useSelector((state: reducerType) => state.user.me?.id);
  const liked = post.Likers.find((v) => v.id === id);
  const { removePostLoading } = useSelector((state: reducerType) => state.post);

  const [commentFormOpened, setCommentFormOpened] = useState(false);

  const onLike = useCallback(() => {
    if (!id) return alert("로그인이 필요합니다.");

    return dispatch({
      type: LIKE_POST_REQUEST,
      data: post.id,
    });
  }, [id]);
  const onUnLike = useCallback(() => {
    if (!id) return alert("로그인이 필요합니다.");

    return dispatch({
      type: UNLIKE_POST_REQUEST,
      data: post.id,
    });
  }, [id]);

  const onToggleComment = useCallback(() => {
    if (!id) return alert("로그인이 필요합니다.");

    return setCommentFormOpened((prev) => !prev);
  }, [id]);

  const onRemovePost = useCallback(() => {
    if (!id) return alert("로그인이 필요합니다.");

    return dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id,
    });
  }, [id]);

  const onRetweet = useCallback(() => {
    if (!id) return alert("로그인이 필요합니다.");

    return dispatch({
      type: RETWEET_REQUEST,
      data: post.id,
    });
  }, [id]);

  return (
    <div style={{ marginBottom: 10 }}>
      <Card
        cover={post.Images.length > 0 && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key="retweet" onClick={onRetweet} />,
          liked ? (
            <HeartTwoTone
              twoToneColor="#eb2f96"
              key="headr"
              onClick={onUnLike}
            />
          ) : (
            <HeartOutlined key="heart" onClick={onLike} />
          ),
          <MessageOutlined key="message" onClick={onToggleComment} />,
          <Popover
            key="ellipsis"
            content={
              <Button.Group>
                {id && post.User.id === Number(id) ? (
                  <>
                    <Button>수정</Button>
                    <Button
                      danger
                      loading={removePostLoading}
                      onClick={onRemovePost}
                    >
                      삭제
                    </Button>
                  </>
                ) : (
                  <Button>신고</Button>
                )}
              </Button.Group>
            }
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
        title={
          post.RetweetId ? `${post.User.nickname}님이 리트윗하셨습니다.` : null
        }
        extra={id && <FollowButton post={post} />}
      >
        {post.RetweetId && post.Retweet ? (
          <Card
            cover={
              post.Retweet.Images[0] && (
                <PostImages images={post.Retweet.Images} />
              )
            }
          >
            <div style={{ float: "right" }}>
              {moment(post.createdAt).fromNow(true)}
            </div>
            <Card.Meta
              avatar={
                <Link href={`/user/${post.Retweet.User.id}`} prefetch={false}>
                  <Avatar>{post.Retweet.User.nickname[0]}</Avatar>
                </Link>
              }
              title={post.Retweet.User.nickname}
              description={<PostCardContent postData={post.Retweet.content} />}
            />
          </Card>
        ) : (
          <>
            <div style={{ float: "right" }}>
              {moment(post.createdAt).fromNow(true)}
            </div>
            <Card.Meta
              avatar={
                <Link href={`/user/${post.User.id}`} prefetch={false}>
                  <Avatar>{post.User.nickname[0]}</Avatar>
                </Link>
              }
              title={post.User.nickname}
              description={<PostCardContent postData={post.content} />}
            />
          </>
        )}
      </Card>
      {commentFormOpened && (
        <div>
          <CommentForm post={post} />
          <List
            header={`${post.Comments.length}개의 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments}
            renderItem={(item) => {
              console.log(3333333333333, item);
              return (
                <li>
                  <Comment
                    author={item.User.nickname}
                    avartar={
                      <Link href={`/user/${item.User.id}`} prefetch={false}>
                        <Avatar>{item.User.nickname[0]}</Avatar>
                      </Link>
                    }
                    content={item.content}
                  />
                </li>
              );
            }}
          />
        </div>
      )}
    </div>
  );
};

export default PostCard;

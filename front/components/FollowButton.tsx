import { Button } from "antd";
import React, { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reducerType } from "../reducers";
import { FOLLOW_REQUEST, UNFOLLOW_REQUEST } from "../reducers/user";

interface Props {
  post: any;
}
const FollowButton: FC<Props> = ({ post }) => {
  const dispatch = useDispatch();
  const { me, followLoading, unfollowLoading } = useSelector(
    (state: reducerType) => state.user
  );
  const isFollowing = me?.Followings.find((v) => v.id === post.User.id);
  const onClickButton = useCallback(() => {
    if (isFollowing) {
      dispatch({
        type: UNFOLLOW_REQUEST,
        data: post.User.id,
      });
    } else {
      dispatch({
        type: FOLLOW_REQUEST,
        data: post.User.id,
      });
    }
  }, [isFollowing]);

  return (
    <Button loading={followLoading || unfollowLoading} onClick={onClickButton}>
      {isFollowing ? "언팔로우" : "팔로우"}
    </Button>
  );
};

export default FollowButton;

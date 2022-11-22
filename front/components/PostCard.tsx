import React, { FC } from "react";
import { postStateChild } from "../reducer/post";

export interface Props {
  post: postStateChild;
}

const PostCard: FC<Props> = ({ post }) => {
  return <div>postCard</div>;
};

export default PostCard;

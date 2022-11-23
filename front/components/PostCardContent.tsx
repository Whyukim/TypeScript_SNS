import Link from "next/link";
import React, { FC } from "react";

interface Props {
  postData: string;
}
const PostCardContent: FC<Props> = ({ postData }) => {
  const reg = /(#[^\s#]+)/g;
  return (
    <div>
      {postData?.split(reg).map((v, i) => {
        if (v.match(reg)) {
          return (
            <Link href={`/hashtag/${v.slice(1)}`} key={i}>
              {v}
            </Link>
          );
        }

        return v;
      })}
    </div>
  );
};

export default PostCardContent;

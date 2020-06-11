import { StopOutlined } from "@ant-design/icons";
import { Button, Card, List } from "antd";
import React, { FC, ReactNode, useCallback } from "react";
import { useDispatch } from "react-redux";
import { REMOVE_FOLLOWER_REQUEST, UNFOLLOW_REQUEST } from "../reducers/user";

interface Props {
  header: string;
  data: {
    nickname: ReactNode;
    id: number;
  }[];
  onClickMore(): void;
  loading: boolean;
}

const FollowList: FC<Props> = ({ header, data, onClickMore, loading }) => {
  const dispatch = useDispatch();
  const onClickUnFollow = useCallback(
    (id) => () => {
      if (header === "팔로잉") {
        dispatch({
          type: UNFOLLOW_REQUEST,
          data: id,
        });
      } else {
        dispatch({
          type: REMOVE_FOLLOWER_REQUEST,
          data: id,
        });
      }
    },
    []
  );

  if (!data) return <div>hello</div>;
  return (
    <List
      style={{ marginBottom: 20 }}
      grid={{ gutter: 4, xs: 2, md: 3 }}
      size="small"
      header={<div>{header}</div>}
      loadMore={
        <div style={{ textAlign: "center", margin: "10px 0" }}>
          <Button onClick={onClickMore} loading={loading}>
            더보기
          </Button>
        </div>
      }
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={{ marginTop: 20 }}>
          <Card
            actions={[<StopOutlined key="stop" />]}
            onClick={onClickUnFollow(item.id)}
          >
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    ></List>
  );
};

export default FollowList;

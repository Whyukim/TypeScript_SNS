import { FC } from "react";
import { useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import { reducerType } from "../reducer";

const Home: FC = () => {
  const { isLoggedIn } = useSelector((state: reducerType) => state.user);
  const { mainPosts } = useSelector((state: reducerType) => state.post);

  return (
    <AppLayout>
      {isLoggedIn && <PostForm />}
      {mainPosts.map((post, index) => (
        <PostCard key={post.id} post={post} />
      ))}
    </AppLayout>
  );
};

export default Home;

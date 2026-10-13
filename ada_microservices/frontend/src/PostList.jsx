import axios from "axios";
import { useEffect, useState } from "react";

import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

export default function PostList() {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:5000/posts");

    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderizandoPosts = Object?.values(posts)?.map((post) => (
    <>
      <div>
        <h3>{post.title}</h3>
        <p>{post.id}</p>
        <CommentCreate postId={post.id} />
        <CommentList comments={post.comments} />
      </div>
    </>
  ));

  return <>{renderizandoPosts}</>;
}

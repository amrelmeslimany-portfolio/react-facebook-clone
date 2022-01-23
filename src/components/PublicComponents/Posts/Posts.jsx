import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../../../context/Postcontext";
import Post from "./Post";
import PostSkelton from "./PostSkelton";

export default function Posts() {
  const [isLoading, setIsLoading] = useState(true);
  const {
    state: { posts },
  } = useContext(PostContext);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <ul className="mt-4 space-y-4">
      {isLoading ? (
        <>
          <PostSkelton />
          <PostSkelton />
          <PostSkelton />
        </>
      ) : posts.length ? (
        posts.map((post) => <Post key={post.post_id} post={post} />)
      ) : (
        <div className="mt-4 text-center">
          <h2 className="text-gray-400 text-lg">No Posts Now</h2>
        </div>
      )}
    </ul>
  );
}

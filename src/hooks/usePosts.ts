import { useState, useEffect } from "react";

import Post from "../interfaces/Post";

const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://still-depths-86703.herokuapp.com/api/posts"
      );
      setPosts(await response.json());
    };
    fetchPosts();
  }, []);

  return posts;
};

export default usePosts;

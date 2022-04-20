import { useState, useEffect } from "react";

const usePost = (id: String) => {
  const [post, setPost] = useState(null);
  const [err, setErr] = useState(null);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        `https://still-depths-86703.herokuapp.com/api/posts/${id}`
      );
      if (response.status !== 200) {
        const test = await response.json();
        setErr(test);
      } else {
        setPost(await response.json());
      }
    };
    fetchPosts();
  }, [id]);
  return [post, err];
};

export default usePost;

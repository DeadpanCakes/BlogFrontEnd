import { useState, useEffect } from "react";

const useComments = (postid: String) => {
  interface Comment {
    author: String;
    content: String;
    timestamp: Date;
    parent: String;
  }

  const [comments, setComments] = useState<Comment[]>([]);
  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch(
        `https://still-depths-86703.herokuapp.com/api/posts/${postid}/comments`
      );
      setComments(await response.json());
    };
    fetchComments();
  }, [postid]);

  return comments;
};

export default useComments;

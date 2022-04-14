import { useState, useEffect } from "react";
import structureComments from "../utils/structureComments";

const useComments = (postid: String) => {
  const [comments, setComments] = useState<Comment[]>([]);
  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch(
        `https://still-depths-86703.herokuapp.com/api/posts/${postid}/comments`
      );
      const data = await response.json();
      setComments(structureComments(data));
    };
    fetchComments();
  }, [postid]);

  return comments;
};

export default useComments;

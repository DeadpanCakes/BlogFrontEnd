import { useParams } from "react-router-dom";

const Post = () => {
  const { postid } = useParams();
  console.log(postid);
  return <h1>This is post {postid}</h1>;
};

export default Post;

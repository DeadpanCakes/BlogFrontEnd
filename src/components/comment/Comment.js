import { Link } from "react-router-dom";

const Comment = ({ comment }) => {
  const nestedComments = (comment.children || []).map((comment) => {
    return <Comment key={comment._id} comment={comment} />;
  });
  return (
    <li className="pt-5 pl-5 border-l border-darkBG bg-[#C2CAE8]">
      <div>
        <h3>
          <Link to={comment.author.url}>{comment.author.username}</Link>
        </h3>
        <p>{comment.content}</p>
      </div>
      <ul>{nestedComments}</ul>
    </li>
  );
};

export default Comment;

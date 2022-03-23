const Comment = ({ comment }) => {
  const nestedComments = (comment.children || []).map((comment) => {
    return <Comment key={comment._id} comment={comment} />;
  });
  return (
    <li className="border-2 border-black">
      <div>
        <h3>{comment.author.username}</h3>
        <p>{comment.content}</p>
      </div>
      <ul>
      {nestedComments}
      </ul>
    </li>
  );
};

export default Comment;

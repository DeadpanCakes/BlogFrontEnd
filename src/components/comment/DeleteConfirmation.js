import Comment from "./Comment";

const DeleteConfirmation = ({ comment }) => {
  return (
    <div>
      <h2>Delete Confirmation</h2>
      <div>
        <p>Are you sure you want to delete {comment._id}</p>
        <Comment comment={comment} />
      </div>
    </div>
  );
};

export default DeleteConfirmation;

const structureComments = (comments) => {
  const commentMap = {};

  // move all the comments into a map of id => comment
  comments.forEach((comment) => {
    commentMap[comment._id] = { children: [], ...comment };
  });

  const isParentDeleted = (targetComment, comments) => {
    return !comments.find((comment) => comment._id === targetComment.parent);
  };

  // iterate over the comments again and correctly nest the children
  comments.forEach((comment) => {
    if (comment.parent) {
      //If parent is deleted, insert a placeholder comment in comments
      if (isParentDeleted(comment, comments)) {
        const placeholder = { _id: comment.parent, isPlaceholder: true };
        comments.push(placeholder);
        commentMap[comment.parent] = { children: [], ...placeholder };
      }
      const parent = commentMap[comment.parent];
      parent.children.push({
        children: commentMap[comment._id].children,
        ...comment,
      });
    }
  });

  //filter the list to return a list of correctly nested comments
  const output = comments
    .filter((comment) => {
      return !comment.parent;
    })
    .map((comment) => {
      return { ...comment, children: commentMap[comment._id].children };
    });
  return output;
};

export default structureComments;

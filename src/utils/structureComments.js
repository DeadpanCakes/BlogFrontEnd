const structureComments = (comments) => {
  const commentMap = {};

  // move all the comments into a map of id => comment
  comments.forEach((comment) => {
    commentMap[comment._id] = { children: [], ...comment };
  });

  let one = 0;
  // iterate over the comments again and correctly nest the children
  comments.forEach((comment) => {
    if (one < 1) {
      one++;
    }
    if (comment.parent) {
      const parent = commentMap[comment.parent];
      parent.children.push(comment);
    }
  });

  // filter the list to return a list of correctly nested comments
  return comments.filter((comment) => {
    return !comment.parent;
  }).map((comment) => {
    return {...comment, children: commentMap[comment._id].children}
  });
};

export default structureComments;

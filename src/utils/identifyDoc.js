const identifyDoc = (doc) => {
  if (doc.username) {
    return "user";
  } else if (doc.title) {
    return "post";
  } else {
    return "comment";
  }
};

export default identifyDoc;

const getBearerToken = () => {
  const token = localStorage.getItem("jwt");
  if (token) {
    return "Bearer " + token;
  }
  return token;
};

export default getBearerToken;

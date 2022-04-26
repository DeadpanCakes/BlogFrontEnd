const deleteData = (url,auth) => {
  const options = {
    method: "DELETE",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (auth) {
    options.headers.Authorization = auth;
  }
  return fetch(url, options);
};

export default deleteData;

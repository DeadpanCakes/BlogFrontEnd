const postData = (url, data, auth) => {
  const options = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  };
  if (auth) {
    options.Authorization = auth;
  }
  return fetch(url, options);
};

export default postData;

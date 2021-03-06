const postData = (url, data, auth, method = "POST") => {
  const options = {
    method,
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  if (auth) {
    options.headers.Authorization = auth;
  }
  return fetch(url, options);
};

export default postData;

const postData = (url, data, auth) => {
  const options = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  if (auth) {
    options.Authorization = auth;
  }
  return fetch(url, options);
};

export default postData;

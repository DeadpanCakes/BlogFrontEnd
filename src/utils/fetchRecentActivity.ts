const fetchRecentActivity = async (userid: String) => {
  const response = await fetch(
    `https://still-depths-86703.herokuapp.com/api/users/${userid}/activity`
  );
  const payload = await response.json();
  return payload;
};

export default fetchRecentActivity;

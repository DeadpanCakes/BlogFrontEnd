import { Link, useLocation } from "react-router-dom";

const ErrorPage = () => {
  const location = useLocation();
  return (
    <>
      <h1>Whoops</h1>
      {location.state ? <p>{location.state.msg}</p> : <p>Something happened</p>}
      <Link to="/">
        <button>Home</button>
      </Link>
    </>
  );
};

export default ErrorPage;

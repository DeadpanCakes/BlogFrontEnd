import { Link, useLocation, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const buttonStyle = "rounded-md min-h-[50px] min-w-[100px] bg-darkBG m-5 text-darkFont"
  return (
    <>
      <h1>Whoops</h1>
      {location.state ? <p>{location.state.msg}</p> : <p>Something happened</p>}
      <div>
        <button className={buttonStyle} onClick={() => navigate(-2)}>Go Back</button>
        <Link to="/">
          <button className={buttonStyle}>Home</button>
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;

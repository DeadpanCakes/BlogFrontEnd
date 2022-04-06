import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import SignUpForm from "./SignUpForm";

const SignUpPage = ({ isLogged }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (isLogged) {
      console.log("reached");
      navigate("/");
    }
  }, [isLogged, navigate]);
  return (
    <div>
      <h2>Sign Up</h2>
      <SignUpForm />
      <div>
        <h3>Already have an account?</h3>
        <Link to="/login">
          <button>Log In</button>
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;

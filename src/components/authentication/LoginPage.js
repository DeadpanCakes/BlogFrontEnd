import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthContext from "../context/AuthContext";
import LoginForm from "./LoginForm";

const LoginPage = ({ isLogged }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (isLogged) {
      navigate("/");
    }
  }, [isLogged, navigate]);

  return (
    <AuthContext.Consumer>
      {(auth) => {
        return (
          <div>
            <h2>Log In</h2>
            <LoginForm login={auth.loginUser} />
            <div>
              <h3>New User?</h3>
              <Link to="/sign-up">
                <button>Sign Up</button>
              </Link>
            </div>
          </div>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default LoginPage;

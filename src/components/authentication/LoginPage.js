import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <h2>Log In</h2>
      <LoginForm />
      <div>
        <h3>New User?</h3>
        <Link to="/sign-up">
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;

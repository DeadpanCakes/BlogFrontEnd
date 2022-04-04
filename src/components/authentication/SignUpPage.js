import SignUpForm from "./SignUpForm";
import { Link } from "react-router-dom";

const SignUpPage = () => {
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

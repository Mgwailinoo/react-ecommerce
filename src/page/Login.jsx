import * as React from "react";

import "./Login.css";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";
export default function Login() {
  const [isSignUp, setIsSignUp] = React.useState(false);
  return (
    <>
      {isSignUp ? (
        <SignUp />
      ) : (
        <div className="container">
          <div className="login form">
            <header>Login</header>
            <form action="#">
              <input type="text" placeholder="Enter your email" />
              <input type="password" placeholder="Enter your password" />
              <a href="#">Forgot password?</a>
              <input type="button" className="button" defaultValue="Login" />
            </form>
            <div className="signup">
              <span className="signup">
                Don't have an account?
                <a onClick={() => setIsSignUp(true)}>
                  <label>Signup</label>
                </a>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

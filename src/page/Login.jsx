import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useLoginContext } from "../Context/LoginContext";
import SignUp from "./SignUp";
import { Box, Modal } from "@mui/material";
export default function Login() {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);

  const { loggedIn, setLoggedIn } = useLoginContext();
  const emailRef = useRef();
  const passwordRef = useRef();

  const login = (e) => {
    e.preventDefault();
    let user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(user);
    emailRef.current.value = "";
    passwordRef.current.value = "";
    setLoggedIn(true);

    navigate("/cart");
  };

  return (
    <>
      {isSignUp ? (
        <SignUp />
      ) : (
        <>
          <div className="container">
            <div className="login form">
              <header>Login</header>
              <form onSubmit={login}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  ref={emailRef}
                />
                <input
                  type="password"
                  placeholder="Enter your password"
                  ref={passwordRef}
                />
                <a href="#">Forgot password?</a>
                <input type="submit" className="button" defaultValue="Login" />
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
        </>
      )}
    </>
  );
}

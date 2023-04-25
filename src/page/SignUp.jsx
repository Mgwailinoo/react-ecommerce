import * as React from "react";

import "./Login.css";
import { Link } from "react-router-dom";

import "./SignUp.css";

export default function Login() {
  return (
    <div className="container">
      <div className="registration form">
        <header>Signup</header>
        <form action="#">
          <input type="text" placeholder="Enter your email" />
          <input type="password" placeholder="Create a password" />
          <input type="password" placeholder="Confirm your password" />
          <input type="button" className="button" defaultValue="Signup" />
        </form>
      </div>
    </div>
  );
}

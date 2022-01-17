import React from "react";
import "./Login.css";
import logo from "./../../assets/images/icon.png";
import fb from "./../../assets/images/fb.png";
import google from "./../../assets/images/google.png";
const Login = () => {
  return (
    <div className="login">
      <img className="icon" src={logo} alt="" />
      <p className="login-text">Explore new courses... Hurry up!!</p>
      <div className="login-items">
        <form>
          <input
            className="form-control"
            placeholder="Email Address"
            type="text"
            name=""
            id=""
          />
          <br />
          <input
            className="form-control"
            placeholder="Password"
            type="password"
            name=""
            id=""
          />
          <br />
          <p className="fp-text">
            <a href="/">Forget Password?</a>
          </p>
          <button className="login-btn" type="submit">
            Login
          </button>
        </form>
        <p className="or">
          <span>or</span>
        </p>
        <div className="login-social">
          <img src={fb} alt="" />
          <img src={google} alt="" />
        </div>
        <p className="signup-text">
          Dont have an account? <a href="/">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;

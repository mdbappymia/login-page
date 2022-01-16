import React from "react";
import "./Login.css";
import logo from "./../../assets/images/icon.png";
import fb from "./../../assets/images/fb.png";
import google from "./../../assets/images/google.png";
const Login = () => {
  return (
    <div className="login">
      <img src={logo} alt="" />
      <p>Explore new courses... Hurry up!!</p>
      <form>
        <input placeholder="Email Address" type="text" name="" id="" />
        <br />
        <input placeholder="Password" type="password" name="" id="" />
        <br />
        <p>Forget Password?</p>
        <button type="submit">Login</button>
      </form>
      <p>or</p>
      <div>
        <img src={fb} alt="" />
        <img src={google} alt="" />
      </div>
      <p>
        Dont have an account? <a href="/">Sign Up</a>
      </p>
    </div>
  );
};

export default Login;

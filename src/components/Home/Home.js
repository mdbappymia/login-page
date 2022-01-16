import React from "react";
import Login from "../Login/Login";
import "./Home.css";
import image from "./../../assets/images/bg.png";

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-container">
        <img className="left-image" src={image} alt="" />
        <div className="right-part"></div>
      </div>
      <div className="login-component">
        <Login />
      </div>
    </div>
  );
};

export default Home;

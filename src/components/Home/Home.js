import React from "react";
import Login from "../Login/Login";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-container">
        <div className="left-image">
          <div className="login-component">
            <Login />
          </div>
        </div>
        <div className="right-part"></div>
      </div>
    </div>
  );
};

export default Home;

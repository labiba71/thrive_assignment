import React from "react";
import "./HomePage.css";
import { withRouter } from "react-router";

const HomePageComponent = (props) => {
  return (
    <div>
      <p className="homePage">Welcome To Thrive Ed Tech</p>
      <nav className="navBottom">
        <button
          className="repoBtn"
          onClick={(e) => {
            e.preventDefault();
            props.history.push("/home");
          }}
        >
          Home
        </button>
        <button
          className="profileBtn"
          onClick={(e) => {
            e.preventDefault();
            props.history.push("/profile");
          }}
        >
          Profile
        </button>
        <button
          className="repoBtn"
          onClick={(e) => {
            e.preventDefault();
            props.history.push("/repositories");
          }}
        >
          Repositories
        </button>
      </nav>
    </div>
  );
};

export const HomePage = withRouter(HomePageComponent);

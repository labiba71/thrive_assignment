import React, { useEffect } from "react";
import thriveIcon from "../resources/thrive.png";
import "./RepoPage.css";
import { withRouter } from "react-router";
import { getRepoList } from "../store/Action.js";
import { connect } from "react-redux";
import moment from "moment";

const RepoPageComponent = (props) => {
  useEffect(() => {
    props.getRepoList();
  }, []);

  return (
    <div className="repoMain">
      <nav className="topNav">
        <img src={thriveIcon} alt="icon" />
      </nav>
      <p className="repo">Repositories</p>
      <div className="upperDiv">
        <p className="githubTitle">github.com</p>
        <div style={{ padding: "15px" }}>
          <p className="time">2:00 PM</p>
          <p className="date">19 Jan 2021(Tuesday)</p>
          <button className="goTo">Go to Profile</button>
        </div>
      </div>
      <div className="day1">
        <div className="day2">
          <div className="day3">
            <p className="day4">JAN 2021</p>
          </div>
        </div>
      </div>
      <div className="repoOuter">
        {props.repoList &&
          props.repoList.map((project) => {
            return (
              <article className="repoList" key={project.id}>
                <div className="divDetails">
                  <p style={{ padding: "0", color: "#FF635A" }}>
                    Project Name: {project.name}
                  </p>
                  <p style={{ padding: "0", color: "orange" }}>
                    Language: {project.language}
                  </p>
                  <p style={{ padding: "0", color: "gray" }}>
                    Updated at{" "}
                    {moment(project.updated_at).format("MMMM Do YYYY")}
                  </p>
                </div>
                <p className="arrowSign">&gt;</p>
                <div className="divRepo">
                  <p style={{ color: "white" }}>repo</p>
                </div>
              </article>
            );
          })}
      </div>
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

const mapStateToProps = (state) => {
  return {
    repoList: state.repoList,
  };
};

export const RepoPage = connect(mapStateToProps, { getRepoList })(
  withRouter(RepoPageComponent)
);

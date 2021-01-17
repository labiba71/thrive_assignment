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
      <div className="repoOuter">
        {props.repoList &&
          props.repoList.map((project) => {
            return (
              <article className="repoList" key={project.id}>
                <p style={{ padding: "0", color: "#FF635A" }}>Project Name: {project.name}</p>
                <p style={{ padding: "0", color: "orange" }}>Language: {project.language}</p>
                <p style={{ padding: "0", color: "gray" }}>
                  Updated at {moment(project.updated_at).format("MMMM Do YYYY")}
                </p>
              </article>
            );
          })}
      </div>
      <nav className="navBottom">
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

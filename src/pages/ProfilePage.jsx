import React, { useEffect } from "react";
import thriveIcon from "../resources/thrive.png";
import homeIcon from "../resources/home.png";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import "./ProfilePage.css";

export const ProfilePageComponent = (props) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="profileMain">
      <nav className="topNav">
        <img src={thriveIcon} alt="icon" />
      </nav>
      <div className="homeDiv">
        <img className="homeIcon" src={homeIcon} alt="icon" />
        <p>Home &gt;</p>
        <p> Profile</p>
      </div>
      <div className="avatarOuter">
        <img
          className="avatarInner"
          src={props.userInfo && props.userInfo.avatar_url}
          alt="icon"
        />
      </div>
      <button className="editBtn">Edit</button>
      <p className="name">{props.userInfo && props.userInfo.name}</p>
      <div className="detailsDiv">
        <p style={{ padding: "0", color: "grey" }}>Software Engineer</p>
        <p style={{ border: "1px solid lightgrey", color: "blue" }}>
          Company: {props.userInfo && props.userInfo.company}
        </p>
        <p style={{ padding: "0", color: "blue" }}>
          Followers: {props.userInfo && props.userInfo.followers}
        </p>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <p className="email">
            Email: {props.userInfo.email ? props.userInfo.email : "null"}
          </p>
          <button className="changeBtn">change</button>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <p className="password">
            Password: {props.userInfo && props.userInfo.id}
          </p>
          <button className="changeBtn">change</button>
        </div>
      </div>
      <button
        className="logoutBtn"
        onClick={(e) => {
          e.preventDefault();
          props.history.push("/");
        }}
      >
        Logout
      </button>
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
    userInfo: state.user,
  };
};

export const ProfilePage = connect(
  mapStateToProps,
  null
)(withRouter(ProfilePageComponent));

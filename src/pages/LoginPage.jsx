import React from "react";
import newtonIcon from "../resources/newton.svg";
import bookIcon from "../resources/book.png";
import { userLogin } from "../store/Action.js";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import "./LoginPage.css";

const LoginPageComponent = (props) => {
  return (
    <div className="loginMain">
      <img className="thriveIcon" src={newtonIcon} alt="icon" />
      <img className="bookImg" src={bookIcon} alt="icon" />
      <p>
        Please find the ID and PIN from SMS. Don’t share your ID or PIN with
        anyone.
      </p>
      <div className="innerDiv">
        <label>
          ID:
          <input placeholder="Enter your ID" type="text" id="id" name="id" />
        </label>
        <label>
          PIN:
          <input
            placeholder="Enter your PIN"
            type="password"
            id="pin"
            name="pin"
          />
        </label>
        <button
          className="loginBtn"
          onClick={(e) => {
            e.preventDefault();
            props.userLogin();
            props.history.push("/home");
          }}
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export const LoginPage = connect(null, { userLogin })(
  withRouter(LoginPageComponent)
);

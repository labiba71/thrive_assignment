import React, { useState } from "react";
import thriveIcon from "../resources/thrive.png";
import homeIcon from "../resources/home.png";
import { connect, useDispatch } from "react-redux";
import { withRouter } from "react-router";
import "./ProfilePage.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { EDIT_EMAIL, EDIT_PASSWORD } from "../store/Type.js";

export const ProfilePageComponent = (props) => {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({ email: "", password: "" });

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setValues({ ...values, [name]: value });
    console.log(value)
  };

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
          <button className="changeBtn" onClick={handleClickOpen}>
            change
          </button>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <p className="password">
            Password: {props.userInfo && props.userInfo.id}
          </p>
          <button className="changeBtn" onClick={handleClickOpen}>
            change
          </button>
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
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            value={values.email}
            onChange={handleChange("email")}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              dispatch({ type: EDIT_EMAIL, payload: values.email });
              handleClose();
            }}
            color="primary"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            value={values.password}
            onChange={handleChange("password")}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              dispatch({ type: EDIT_PASSWORD, payload: values.password });
              handleClose();
            }}
            color="primary"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
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

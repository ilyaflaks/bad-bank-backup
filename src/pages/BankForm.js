import React from "react";
import { useEffect, useState, useContext } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  NavLink,
  NavItem,
} from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

let disabledButton = {
  backgroundColor: "#e2e2e2",
  cursor: "not-allowed",
};

let logOutButtonStyle = {
  textDecoration: "none",
  color: "white",
  margin: "2px",
};

function validateName(name) {
  let regex = /^[a-zA-Z\s]*$/g;
  if (name.length < 2 || regex.test(name) == false) {
    console.log("bad name");
    return false;
  } else {
    return true;
  }
}

function validateEmail(email) {
  const regex2 = /\S@\S/;
  if (!regex2.test(email) || email.length < 3) {
    console.log("bad email");
    return false;
  } else {
    return true;
  }
}

function validatePassword(password) {
  if (password.length < 8) {
    console.log("bad pw");
    return false;
  } else {
    return true;
  }
}

function BankForm({
  label,
  handle,
  successButton,
  successMessage,
  secondButtonText,
  bool,
  loginError,
  buttonFunc,
}) {
  const [show, setShow] = React.useState(true);
  // const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isError, setIsError] = React.useState(true);
  const [errors, setError] = React.useState({
    nameError: "",
    emailError: "",
    passwordError: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(true);

  function clearError() {
    setError({ nameError: "", emailError: "", passwordError: "" });
  }

  function handleCreate() {
    const isValidName = validateName(name);
    const isValidEmail = validateEmail(email);
    const isValidPassword = validatePassword(password);

    if (isValidName && isValidEmail && isValidPassword) {
      setIsError(false);
      handle({ name, email, password });
      setShow(false);
    } else {
      setIsError(true);
      setError({
        nameError: isValidName ? "" : "invalid name",
        emailError: isValidEmail ? "" : "invalid email",
        passwordError: isValidPassword ? "" : "invalid password",
      });
    }
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <Card
      style={{
        width: "28rem",
      }}
    >
      <CardBody>
        <CardTitle tag="h5">{label}</CardTitle>
        {show ? (
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Please fill out the form below
          </CardSubtitle>
        ) : (
          <h3> </h3>
        )}
        {show ? (
          <div className="mb-3">
            Name
            <br />
            <input
              type="input"
              className="form-control"
              id="name"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => {
                setName(e.currentTarget.value);
                setButtonDisabled(false);
                clearError();
              }}
            />
            <div style={{ color: "red" }}>{errors.nameError}</div>
            Email Address
            <br />
            <input
              type="input"
              className="form-control"
              id="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => {
                setEmail(e.currentTarget.value);
                setButtonDisabled(false);
                clearError();
              }}
            />
            <div style={{ color: "red" }}>{errors.emailError}</div>
            Password <br />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => {
                setPassword(e.currentTarget.value);
                setButtonDisabled(false);
                clearError();
              }}
            />
            <div style={{ color: "red" }}>{errors.passwordError}</div>
          </div>
        ) : (
          <div>
            <h3>{successMessage}</h3>
            <br />
          </div>
        )}
        {/* above is the success scenario for inputs and the title*/}

        {show && buttonDisabled ? (
          <Button
            className="btn btn-dark"
            type="submit"
            onClick={handleCreate}
            style={disabledButton}
          >
            {label}
          </Button>
        ) : show && !buttonDisabled ? (
          //in createaccount, label is createaccount, in login it's "Log In"
          <Button type="submit" className="btn btn-dark" onClick={handleCreate}>
            {label}
          </Button>
        ) : (
          <div></div>
        )}
        {/* bool is only passed from createaccount */}
        {/* show is set to false when the validation passes */}
        {/* why do both createaccount and login have two buttons when show is true? */}
        {/* they should only appear after success = !show */}
        {/* create account has "add another account on load", on the right that's successButton passed from parent, default state */}
        {/* login has "log out" on load, on the right that's successButton passed from parent */}

        {!show && bool ? (
          <div>
            <Button type="submit" className="btn btn-dark" onClick={clearForm}>
              {successButton}
            </Button>
            <Button>
              <NavItem tag={Link} to="/login" style={logOutButtonStyle}>
                {/* secondButtonText is only passed on createaccount and it's "Log In" */}
                {secondButtonText}
              </NavItem>
            </Button>
          </div>
        ) : //                  {/* otherwise if it's a valid login show success buttons, buttonFunc is logout */}
        !show && !bool && !loginError ? (
          <Button type="submit" className="btn btn-dark" onClick={buttonFunc}>
            {successButton}
          </Button>
        ) : !show && !bool && loginError ? (
          <Button type="submit" className="btn btn-dark" onClick={clearForm}>
            {successButton}
          </Button>
        ) : (
          <p> </p>
          //{/* otherwise try again */}
        )}
      </CardBody>
    </Card>
  );
}

export default BankForm;

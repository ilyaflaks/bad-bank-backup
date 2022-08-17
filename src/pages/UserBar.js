import React, { useContext } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { useUserContext, UserContext, UserProvider } from "./context";
import { useNavigate } from "react-router-dom";
import avatar from "../avatar.png";

function UserBar() {
  const { user, setUser, userLoggedIn, setUserLoggedIn } = useUserContext();
  const navigate = useNavigate();

  function navigateBack() {
    navigate("/", { replace: true });
  }

  let userLoggedInName = "";

  if (userLoggedIn >= 0) {
    userLoggedInName = user[userLoggedIn].name;
    return (
      <div className="userBar">
        <h2>{userLoggedInName}</h2>
        <img alt="Default avatar" src={avatar} className="avatar" />
        <Button
          onClick={() => {
            userLoggedInName = "";
            navigateBack();
            setUserLoggedIn();
          }}
        >
          Log Out
        </Button>
        <div></div>
      </div>
    );
  }
}

export default UserBar;

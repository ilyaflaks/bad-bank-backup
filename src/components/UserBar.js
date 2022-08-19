import React, { useContext } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { useUserContext, UserContext, UserProvider } from "../pages/context";
import { useNavigate } from "react-router-dom";
import avatar from "../avatar.png";

function UserBar() {
  const { user, setUser, userLoggedIn, setUserLoggedIn } = useUserContext();
  const navigate = useNavigate();

  function navigateBack() {
    navigate("/", { replace: true });
  }

  let userBar = {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    justifyContent: "end",
  };

  let avatarStyle = {
    width: "50px",
    height: "50px",
  };

  let userLoggedInName = "";

  if (userLoggedIn >= 0) {
    userLoggedInName = user[userLoggedIn].name;
    return (
      <div className="userBar" style={userBar}>
        <h2>{userLoggedInName}</h2>
        <img alt="Default avatar" src={avatar} style={avatarStyle} />
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
  } else {
    return <div></div>;
  }
}

export default UserBar;

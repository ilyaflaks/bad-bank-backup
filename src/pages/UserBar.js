import React, { useContext } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { useUserContext, UserContext, UserProvider } from "./context";

function UserBar() {
  const { user, setUser, userLoggedIn, setUserLoggedIn } = useUserContext();

  if (userLoggedIn) {
    let userLoggedInName = userLoggedIn.name;
    return (
      <div className="userBar">
        <h2>{userLoggedInName}</h2>
      </div>
    );
  }
}

export default UserBar;

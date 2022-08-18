import React, { useContext } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { useUserContext, UserContext, UserProvider } from "./context";

function Balance() {
  const d = new Date();
  let year = d.getFullYear();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[d.getMonth()];
  let date = d.getDate();

  const { user, setUser, userLoggedIn, setUserLoggedIn } =
    useUserContext(UserContext);
  //console.log("userLoggedIn: " + userLoggedIn);
  let userLoggedInName = "";
  let userLoggedInEmail = "";
  let userLoggedInPassword = "";
  let userLoggedInBalance = "";

  if (userLoggedIn >= 0) {
    userLoggedInName = user[userLoggedIn].name;
    userLoggedInEmail = user[userLoggedIn].email;
    userLoggedInPassword = user[userLoggedIn].password;
    userLoggedInBalance = user[userLoggedIn].balance;
    console.log(
      userLoggedInName,
      " ",
      userLoggedInEmail,
      " ",
      userLoggedInPassword
    );
  }

  return (
    <div>
      <Card
        style={{
          width: "28rem",
        }}
      >
        <CardTitle>Balance</CardTitle>
        {/* <CardSubtitle>{userLoggedInName}</CardSubtitle> */}
        <CardBody>
          As of {date} {month} {year}, your balance is: ${userLoggedInBalance}
        </CardBody>
      </Card>
    </div>
  );
}

export default Balance;

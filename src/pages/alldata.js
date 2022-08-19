import { useContext } from "react";
import { useUserContext, UserContext, UserProvider } from "./context";
import { Yell } from "./context";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

function Alldata() {
  return (
    <div>
      <UserAccountData />
    </div>
  );
}

function UserAccountData() {
  const { user, setUser, userLoggedIn, setUserLoggedIn } = useUserContext();

  const context = useContext(UserContext);
  console.log("inside all data");
  console.log(context);
  console.log("ctxt.user: ", context.user);

  return (
    <div>
      <div className="allDataHeader">All data</div>
      <br />
      {user.map((u, index) => {
        return (
          <Card key={index} className="alldataCard">
            <CardTitle>{u.name}</CardTitle>
            <CardBody>
              Email: {u.email}
              <br />
              Password: {u.password}
              <br />
              Balance: {u.balance}
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
}

export default Alldata;

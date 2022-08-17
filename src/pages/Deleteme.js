import { useState } from "react";
import { useUserContext, UserContext, UserProvider } from "./context";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

function Deleteme() {
  const { user, setUser, userLoggedIn, setUserLoggedIn } = useUserContext();
  return (
    <div>
      <h2>DELETE ME!!!</h2>
      <button onClick={() => setUserLoggedIn("YOU")}>SET USER LOGGED IN</button>
      <h2>{userLoggedIn}</h2>

      <button
        onClick={() => {
          setUser([...user, { name: "YOU", age: 12 }]);
          console.log(JSON.stringify(user));
        }}
      >
        SET USER
      </button>
      {user.map((u, index) => {
        return (
          <Card key={index}>
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

export default Deleteme;

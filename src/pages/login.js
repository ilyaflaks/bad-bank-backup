import BankForm from "./BankForm";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserContext, UserContext, UserProvider } from "./context";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

function Login() {
  const { user, setUser, userLoggedIn, setUserLoggedIn } = useUserContext();
  const [loginError, setLoginError] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [successButton, setSuccessButton] = useState("Log Out");
  //  let greetUser = "";

  const navigate = useNavigate();

  function navigateBack() {
    navigate("/", { replace: true });
  }

  console.log("userLoggedIn: " + userLoggedIn);
  console.log("corresponding user: " + JSON.stringify(user[userLoggedIn]));

  function handleLogin({ name, email, password }) {
    let match = user.filter((u) => email == u.email && password === u.password);
    // console.log("match array:");
    // console.log(match);
    // console.log(match[0]);
    if (match.length > 0) {
      const matchFunc = (element) => element == match[0];
      let index = user.findIndex(matchFunc);
      console.log("index of the match in user context: " + index);
      console.log("match!");
      // console.log(match[0].name);
      let userName = match[0].name;
      //      console.log("userName: " + userName);
      setSuccessMessage(`Welcome back ${userName}`);
      //    console.log("user[index]: " + user[index]);
      setUserLoggedIn(index);
    } else {
      // console.log("length: ", match.length);
      // console.log("account not found");
      // console.log("name ", name);
      // console.log("email ", email, element.email);
      // console.log("password ", password, element.password);

      setLoginError(true);
      setSuccessMessage("Account not found");
      setSuccessButton("Try Again");
    }
  }

  function logOut() {
    setUserLoggedIn(null);
    setSuccessMessage("We hope to see you soon!");
    setSuccessButton("Bye");
    setTimeout(navigateBack, 5000);
  }

  // let loggedInName = "";
  // let loggedInEmail = "";
  // let loggedInPassword = "";
  // if (userLoggedIn) {
  //   loggedInName = userLoggedIn.name;
  //   loggedInEmail = userLoggedIn.email;
  //   loggedInPassword = userLoggedIn.password;
  //   console.log("loggedInName " + loggedInName);
  //   console.log("loggedInEmail " + loggedInEmail);
  //   console.log("loggedInPassword " + loggedInPassword);
  // }

  return (
    <div>
      <BankForm
        bgcolor="primary"
        label="Log In"
        handle={handleLogin}
        successButton={successButton}
        successMessage={successMessage}
        loginError={loginError}
        buttonFunc={logOut}
        //secondButtonText="Log Out"
      />
      {/* <h3>User Logged in:</h3>
      {userLoggedIn ? (
        <div>
          {loggedInName} {loggedInEmail} {loggedInPassword}
        </div>
      ) : (
        <h3> </h3>
      )} */}
    </div>
  );
}

export default Login;

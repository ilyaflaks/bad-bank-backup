import BankForm from "../components/BankForm";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserContext, UserContext, UserProvider } from "./context";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import smartphoneapp from "../smartphoneapp.png";

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

  // console.log("userLoggedIn: " + userLoggedIn);
  // console.log("corresponding user: " + JSON.stringify(user[userLoggedIn]));

  function handleLogin({ name, email, password }) {
    let match = user.filter((u) => email == u.email && password === u.password);
    // console.log("match array:");
    // console.log(match);
    // console.log(match[0]);
    if (match.length > 0) {
      const matchFunc = (element) => element == match[0];
      let index = user.findIndex(matchFunc);
      // console.log("index of the match in user context: " + index);
      // console.log("match!");
      // console.log(match[0].name);
      let userName = match[0].name;
      //      console.log("userName: " + userName);
      setSuccessMessage(`Welcome back ${userName}`);
      //    console.log("user[index]: " + user[index]);
      setUserLoggedIn(index);
    } else {
      setLoginError(true);
      setSuccessMessage("Account not found");
      setSuccessButton("Try Again");
    }
  }

  function logOut() {
    setUserLoggedIn();
    setSuccessMessage("We hope to see you soon!");
    setSuccessButton("Bye");
    setTimeout(navigateBack, 5000);
  }

  return (
    <div className="loginPage">
      <BankForm
        bgcolor="primary"
        label="Log In"
        handle={handleLogin}
        successButton={successButton}
        successMessage={successMessage}
        loginError={loginError}
        buttonFunc={logOut}
      />
      <div>
        <img
          className="smartApp"
          alt="Photo of an app on a smart phone"
          src={smartphoneapp}
        />
      </div>
    </div>
  );
}

export default Login;

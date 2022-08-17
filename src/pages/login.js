import BankForm from "./BankForm";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserContext, UserContext, UserProvider } from "./context";

function Login() {
  const { user, setUser } = useUserContext();
  //const [greetUser, setGreetUser] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [successButton, setSuccessButton] = useState("Log Out");
  //  let greetUser = "";

  const navigate = useNavigate();

  function navigateBack(event) {
    event.preventDefault();
    navigate("/balance", { replace: true });
  }

  function handleLogin({ name, email, password }) {
    // console.log("name: " + name);
    // console.log("email: " + email);
    // console.log("password: " + password);

    // console.log("log in attempt");
    // console.log(user);
    // console.log(user[0].name);
    // console.log(user[0].email);
    // console.log(user[0].password);

    // user.forEach((element, index) => {
    //   if (email == element.email && password === element.password) {
    //     console.log("match ", index);
    //     setGreetUser(element.name);
    //     setSuccessMessage(`Thank you for logging in ${greetUser}`);
    //     return;
    //   } else {
    //     console.log("account not found");
    //     console.log("name ", name);
    //     console.log("email ", email, element.email);
    //     console.log("password ", password, element.password);

    //     setLoginError(true);
    //     setSuccessMessage("Account not found");
    //     setSuccessButton("Try Again");
    //   }
    // });
    let match = user.filter((u) => email == u.email && password === u.password);
    // console.log("index in context: " + user.findIndex(match));
    console.log("match array:");
    console.log(match);
    console.log(match[0]);
    if (match.length > 0) {
      const matchFunc = (element) => element == match[0];
      let index = user.findIndex(matchFunc);
      console.log("index of the match in user context: " + index);
      console.log("match!");
      console.log(match[0].name);
      let userName = match[0].name;
      console.log("userName: " + userName);
      //console.log(greetUser);
      // setGreetUser(userName); //NOT REALLY WORKING ATM. WHY?
      // console.log(greetUser);
      setSuccessMessage(`Thank you for logging in ${userName}`);
    } else {
      console.log("length: ", match.length);
      console.log("account not found");
      // console.log("name ", name);
      // console.log("email ", email, element.email);
      // console.log("password ", password, element.password);

      setLoginError(true);
      setSuccessMessage("Account not found");
      setSuccessButton("Try Again");
    }
  }

  return (
    <div>
      <BankForm
        bgcolor="primary"
        label="Log In"
        handle={handleLogin}
        successButton={successButton}
        successMessage={successMessage}
        loginError={loginError}
        //buttonFunc={navigateBack}
        //        secondButtonText="Log Out"
      />
    </div>
  );
}

export default Login;

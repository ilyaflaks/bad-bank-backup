import Transaction from "./Transaction";
import { useUserContext, UserContext } from "./context";
import { Yell } from "./context";
import { UserProvider } from "./context";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Deposit() {
  const { user, setUser, userLoggedIn, setUserLoggedIn } =
    useUserContext(UserContext);

  const navigate = useNavigate();

  function navigateBack() {
    navigate("/", { replace: true });
  }

  const [input, setInput] = useState(0);
  const [total, setTotal] = useState(0);
  const [isError, setIsError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (userLoggedIn >= 0) {
      setTotal(user[userLoggedIn].balance);
    } else {
      navigateBack();
    }
  }, []);

  function handleChange(e) {
    setIsError(false);
    setSuccess(false);
    let value = e.target.value;
    setInput(value);
  }

  function handleDeposit(e) {
    let usersName = user[userLoggedIn].name;
    let usersEmail = user[userLoggedIn].email;
    let usersPassword = user[userLoggedIn].password;
    let usersBalance = user[userLoggedIn].balance;
    const numRegex2 = /^[0-9.]+$/;
    const numRegex4 = /[a-zA-Z!@#\$%\^\&*\)\(+=_-]+$/g;

    if (
      parseFloat(input) > 0 &&
      numRegex2.test(input) &&
      !numRegex4.test(input)
    ) {
      console.log("passed deposit validation");
      usersBalance = parseFloat(
        parseFloat(usersBalance) + parseFloat(input)
      ).toFixed(2);

      let newObj = {
        name: usersName,
        email: usersEmail,
        password: usersPassword,
        balance: usersBalance,
      };

      console.log("newObj: ");
      console.log(JSON.stringify(newObj));

      let newArray = user;
      const matcherFunction = (element) =>
        element.name == usersName &&
        element.email == usersEmail &&
        element.password == usersPassword;
      let spliceIndex = newArray.findIndex(matcherFunction);
      console.log("spliceIndex: " + spliceIndex);
      newArray.splice(spliceIndex, 1, newObj);
      console.log("newArray:");
      console.log(JSON.stringify(newArray));
      setUser(newArray);
      console.log("user:");
      console.log(JSON.stringify(user));
      setSuccess(true);
    } else {
      setIsError(true);
      let message = "";
      if (parseFloat(input) < 0) {
        message = "- only positive numbers allowed";
      } else if (numRegex4.test(input)) {
        message = "- no letters or special characters allowed";
      }
      setErrorMessage(message);
    }
    setTotal(usersBalance);
  }

  return (
    <div>
      <Transaction
        label="Deposit"
        handleChange={handleChange}
        handleTransact={handleDeposit}
        balance={total}
        isError={isError}
        success={success}
        errorMessage={errorMessage}
      />
    </div>
  );
}

export default Deposit;

import Transaction from "./Transaction";
import { useUserContext, UserContext } from "./context";
import { Yell } from "./context";
import { UserProvider } from "./context";
import { useState, useEffect } from "react";

function Withdraw() {
  //const { user, setUser } = useUserContext(UserContext);
  const { user, setUser, userLoggedIn, setUserLoggedIn } =
    useUserContext(UserContext);
  const [input, setInput] = useState(0);
  const [total, setTotal] = useState(user[0].balance);
  const [isError, setIsError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  console.log("In Account. user is: ", user);
  console.log("total state: ", total);

  function handleChange(e) {
    setIsError(false);
    setSuccess(false);
    let value = e.target.value;
    setInput(value);
  }

  function handleDeposit(e) {
    //e.preventDefault();
    const numRegex2 = /^[0-9.]+$/;
    const numRegex4 = /[a-zA-Z!@#\$%\^\&*\)\(+=_]+$/g;

    if (
      parseFloat(input) > 0 &&
      numRegex2.test(input) &&
      !numRegex4.test(input) &&
      user[0].balance >= input
    ) {
      user[0].balance = parseFloat(
        parseFloat(user[0].balance) - parseFloat(input)
      ).toFixed(2);
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

    setTotal(user[0].balance);
  }

  return (
    <div>
      <Transaction
        label="Withdraw"
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

export default Withdraw;

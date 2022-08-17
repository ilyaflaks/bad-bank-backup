import Transaction from "./Transaction";
import { useUserContext, UserContext } from "./context";
import { UserProvider } from "./context";
import { useState, useEffect } from "react";

function Withdraw() {
  //const { user, setUser } = useUserContext(UserContext);
  const { user, setUser, userLoggedIn, setUserLoggedIn } =
    useUserContext(UserContext);
  const [input, setInput] = useState(0);
  const [total, setTotal] = useState(user[userLoggedIn].balance);
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

  //RENAME THIS TO HNDLEWITHDRAW

  function handleWithdrawal(e) {
    let usersName = user[userLoggedIn].name;
    let usersEmail = user[userLoggedIn].email;
    let usersPassword = user[userLoggedIn].password;
    let usersBalance = user[userLoggedIn].balance;

    // if (userLoggedIn) {
    //   usersName = userLoggedIn.name;
    //   usersEmail = userLoggedIn.email;
    //   usersPassword = userLoggedIn.password;
    //   usersBalance = userLoggedIn.balance;
    //   setTotal(usersBalance);
    // }

    const numRegex2 = /^[0-9.]+$/;
    const numRegex4 = /[a-zA-Z!@#\$%\^\&*\)\(+=_]+$/g;

    if (
      parseFloat(input) > 0 &&
      numRegex2.test(input) &&
      !numRegex4.test(input) &&
      total >= input
    ) {
      console.log("passed withdraw validation");
      // user[0].balance = parseFloat(
      //   parseFloat(user[0].balance) - parseFloat(input)
      // ).toFixed(2);
      usersBalance = parseFloat(
        parseFloat(usersBalance) - parseFloat(input)
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
      console.log("spliceIndex: " - spliceIndex);
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
        label="Withdraw"
        handleChange={handleChange}
        handleTransact={handleWithdrawal}
        balance={total}
        isError={isError}
        success={success}
        errorMessage={errorMessage}
      />
    </div>
  );
}

export default Withdraw;

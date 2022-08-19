import BankForm from "./BankForm";
import { useContext } from "react";
import { useUserContext, UserContext } from "./context";
import { UserProvider } from "./context";

import { useNavigate } from "react-router-dom";
import onfire from "../onfire.jpeg";

function CreateAccount() {
  return <Account />;
}

function Account() {
  const { user, setUser, userLoggedIn, setUserLoggedIn } = useUserContext();

  const navigate = useNavigate();

  function navigateBack() {
    navigate("/login", { replace: true });
  }
  function handle(data) {
    console.log(
      "inside handle, data.name: " + data.name + " data.email: " + data.email
    );

    const matcherFunction = (element) =>
      element.name == data.name && element.email == data.email;

    let spliceIndex = user.findIndex(matcherFunction);

    console.log("spliceIndex: " + spliceIndex);

    if (spliceIndex >= 0) {
      // console.log("user exists");
      alert("An account with these credentials already exists");
      navigateBack();
    } else {
      // console.log("new user");
      setUser([
        ...user,
        {
          name: data.name,
          email: data.email,
          password: data.password,
          balance: 100,
        },
      ]);
    }
    return true;
  }

  const successMessage =
    "Thank you for creating an account with BadBank! Here's $100 just for signing up. This is just on of the many benefits of doing business with BadBank.";

  return (
    <div className="createAccount">
      <BankForm
        bgcolor="primary"
        label="Create Account"
        handle={handle}
        successButton="Add another account"
        successMessage={successMessage}
        secondButtonText="Log In"
        bool="true"
      />
      <div>
        <img
          className="createAcctImg"
          alt="Photo of a pair of glasses resting on top of a lap top. Caption says 'We are on fire! 154,320 people signed up for account with BadBank in 2022. Become one of them' "
          src={onfire}
        />
      </div>
    </div>
  );
}

export default CreateAccount;

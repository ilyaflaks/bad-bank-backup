import BankForm from "./BankForm";
import { useContext } from "react";
import { useUserContext, UserContext } from "./context";
import { UserProvider } from "./context";

function CreateAccount() {
  return <Account />;
}

function Account() {
  const { user, setUser, userLoggedIn, setUserLoggedIn } = useUserContext();
  //console.log("In Account. user is: ", user);

  function handle(data) {
    //console.log("handle from createaccount called");
    setUser([
      ...user,
      {
        name: data.name,
        email: data.email,
        password: data.password,
        balance: 100,
      },
    ]);
    return true;
  }

  const successMessage =
    "Thank you for creating an account with BadBank! Here's $100 just for signing up. This is just on of the many benefits of doing business with BadBank.";

  return (
    <div>
      <BankForm
        bgcolor="primary"
        label="Create Account"
        handle={handle}
        successButton="Add another account"
        successMessage={successMessage}
        secondButtonText="Log In"
        bool="true"
      />
    </div>
  );
}

export default CreateAccount;

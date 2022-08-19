import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavLink,
  NavItem,
  Nav,
  DropdownMenu,
  NavbarToggler,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useUserContext, UserContext, UserProvider } from "../pages/context";

function NaviBar() {
  const { user, setUser, userLoggedIn, setUserLoggedIn } =
    useUserContext(UserContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  function mouseOver(e) {
    var x = e.clientX;
    var y = e.clientY;
    let buttonText = e.target.innerText;
    let message = "";
    switch (buttonText) {
      case "BadBank":
        message = "Home page";
        break;

      case "Create Account":
        message = "Click to create a new account";
        break;
      case "Log In":
        message = "Click to Log In to your account";
        break;
      case "Deposit":
        message = "Deposit funds to your account";
        break;
      case "Withdraw":
        message = "Withdraw funds from your account";
        break;
      case "Balance":
        message = "See the balance on your account";
        break;
      case "All Data":
        message = "See All of the Data";
    }

    const createAcct = document.getElementById("root");

    const tip = document.createElement("div");
    tip.classList.add("tip-class");
    const newContent = document.createTextNode(message);
    tip.appendChild(newContent);
    createAcct.appendChild(tip);
    tip.style.top = "45px";
    // tip.style.top = `${y + 15}px`;
    tip.style.left = `${x}px`;
  }

  function disabledMouseOver(e) {
    var x = e.clientX;
    let buttonText = e.target.innerText;
    let message = "";
    switch (buttonText) {
      case "Log In":
        message = "Already Logged In";
        break;
      case "Deposit":
        message = "Log In to deposit funds";
        break;
      case "Withdraw":
        message = "Log In to withdraw funds";
        break;
      case "Balance":
        message = "Log In to see the balance";
        break;
    }
    const createAcct = document.getElementById("root");

    const tip = document.createElement("div");
    tip.classList.add("tip-class");
    const newContent = document.createTextNode(message);
    tip.appendChild(newContent);
    createAcct.appendChild(tip);
    tip.style.top = "45px";
    tip.style.left = `${x}px`;
  }

  function clearTip() {
    const elementToClear = document.getElementsByClassName("tip-class");
    elementToClear[0].classList.add("tip-clear");
    elementToClear[0].classList.remove("tip-class");
  }

  return (
    <div>
      <Navbar light expand="md">
        <NavbarBrand
          tag={Link}
          to="/"
          onMouseOver={mouseOver}
          onMouseLeave={clearTip}
          className="navBarItem"
        >
          BadBank
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="navBarItem">
              <NavLink
                tag={Link}
                to="/createaccount"
                onMouseOver={mouseOver}
                onMouseLeave={clearTip}
                id="createaccount"
              >
                Create Account
              </NavLink>
            </NavItem>
            {userLoggedIn >= 0 ? (
              <NavItem className="disabledNav">
                <NavLink
                  onMouseOver={disabledMouseOver}
                  onMouseLeave={clearTip}
                >
                  Log In
                </NavLink>
              </NavItem>
            ) : (
              <NavItem className="navBarItem">
                <NavLink
                  tag={Link}
                  to="/login"
                  onMouseOver={mouseOver}
                  onMouseLeave={clearTip}
                >
                  Log In
                </NavLink>
              </NavItem>
            )}
            {userLoggedIn >= 0 ? (
              <NavItem className="navBarItem">
                <NavLink
                  tag={Link}
                  to="/deposit"
                  onMouseOver={mouseOver}
                  onMouseLeave={clearTip}
                >
                  Deposit
                </NavLink>
              </NavItem>
            ) : (
              <NavItem className="disabledNav">
                <NavLink
                  //  tag={Link}
                  //  to="/deposit"
                  onMouseOver={disabledMouseOver}
                  onMouseLeave={clearTip}
                  //  disabled
                >
                  Deposit
                </NavLink>
              </NavItem>
            )}
            {userLoggedIn >= 0 ? (
              <NavItem className="navBarItem">
                <NavLink
                  tag={Link}
                  to="/withdraw"
                  onMouseOver={mouseOver}
                  onMouseLeave={clearTip}
                >
                  Withdraw
                </NavLink>
              </NavItem>
            ) : (
              <NavItem className="disabledNav">
                <NavLink
                  // tag={Link}
                  // to="/withdraw"
                  onMouseOver={disabledMouseOver}
                  onMouseLeave={clearTip}
                  // disabled
                >
                  Withdraw
                </NavLink>
              </NavItem>
            )}
            {userLoggedIn >= 0 ? (
              <NavItem className="navBarItem">
                <NavLink
                  tag={Link}
                  to="/balance"
                  onMouseOver={mouseOver}
                  onMouseLeave={clearTip}
                >
                  Balance
                </NavLink>
              </NavItem>
            ) : (
              <NavItem className="disabledNav">
                <NavLink
                  // tag={Link}
                  // to="/balance"
                  onMouseOver={disabledMouseOver}
                  onMouseLeave={clearTip}
                  //disabled
                >
                  Balance
                </NavLink>
              </NavItem>
            )}
            <NavItem className="navBarItem">
              <NavLink
                tag={Link}
                to="/alldata"
                onMouseOver={mouseOver}
                onMouseLeave={clearTip}
              >
                All Data
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NaviBar;

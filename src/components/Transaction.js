import React from "react";
import { useEffect, useState, useContext } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

function Transaction({
  label,
  handleTransact,
  handleChange,
  balance,
  isError,
  success,
  errorMessage,
}) {
  let disabledButton = {
    backgroundColor: "#e2e2e2",
    cursor: "not-allowed",
  };
  const [buttonDisabled, setButtonDisabled] = React.useState(true);

  //console.log("error messg in Transaction: " + errorMessage);

  return (
    <Card
      className="transaction"
      // style={{
      //   width: "28rem",
      // }}
    >
      <Form onSubmit={handleTransact}>
        <FormGroup>
          <h2>{label}</h2>
          <CardSubtitle>
            Please enter only positive numbers <br /> Use " . " for a decimal
            point
          </CardSubtitle>
          <br />
          <Label for="amount">Current Balance: {balance}</Label>

          <Input
            id="amount"
            placeholder="Enter Amount"
            onChange={(e) => {
              handleChange(e);
              setButtonDisabled(false);
            }}
          />
        </FormGroup>
      </Form>
      {isError ? (
        <div>
          <h4
            style={{
              color: "red",
            }}
          >
            invalid input {errorMessage}
          </h4>
        </div>
      ) : (
        <p> </p>
      )}
      {success ? (
        <h4
          style={{
            color: "green",
          }}
        >
          success!
        </h4>
      ) : (
        <p> </p>
      )}
      {buttonDisabled ? (
        <Button type="submit" style={disabledButton} onClick={handleTransact}>
          Submit
        </Button>
      ) : (
        <Button type="submit" onClick={handleTransact}>
          Submit
        </Button>
      )}
    </Card>
  );
}

export default Transaction;

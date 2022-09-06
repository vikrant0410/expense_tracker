import React from "react";
// import Container from "react-bootstrap/Container";

import ExpenseDate from "./ExpenseDate";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ExpenseRow.css";

const ExpenseRow = (props) => {
  console.log(props, "this is exprow component")

  return (
    <div className="expense_main">
      <Row>
        <ExpenseDate finalDate={props.date} />
        <Col className="expense_main__name">{props.name}</Col>
        <Col className="expense_main__amount">${props.amount}</Col>
      </Row>
    </div>
  );
};

export default ExpenseRow;

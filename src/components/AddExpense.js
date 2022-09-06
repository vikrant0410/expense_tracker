import React, { useState } from "react";
import "./ExpenseDate.css"

const AddExpense = (props) => {
  const [newExpDataText, setnewExpDataText] = useState({
    expenseName: "",
   date: "",
    expenseAmount: "",
  });

  // props.pullFunc(changeText);

  const handleChange = (event) => {
    var { name, value } = event.target;
    setnewExpDataText((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  


  const handleSubmit = (event) => {
    event.preventDefault();
    props.pullFunc(newExpDataText);
};


  return (
    <div className="userData">
      <form onSubmit={handleSubmit}>
        <input className="ExData"
          type="text"
          value={newExpDataText.expName}
          onChange={handleChange}
          name="expenseName"
          placeholder="Expense Name"
        />
        <input className="ExData"
          name="expenseAmount"
          type="number"
          value={newExpDataText.expAmt}
          onChange={handleChange}
          placeholder="Expense Amount"
        />
        <input className="ExData"
          type="date"
          name="date"
          value={newExpDataText.expDate}
          onChange={handleChange}
          placeholder="Expense Date"
        />
        <button className="ExData" type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default AddExpense;

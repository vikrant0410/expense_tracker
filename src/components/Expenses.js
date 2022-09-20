import React from "react"
import ExpenseItem from "./ExpenseItem"
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter"
import "./Expenses.css"

const Expenses = (props) => {
    var data = props.expenses;
    console.log(data);

    return (
        <div className="expenses">
            <ExpensesFilter />
            {data.map((expense, index) => {
                return (
                    <ExpenseItem
                        key={index}
                        name={expense.expenseName}
                        amount={expense.expenseAmount}
                        date={expense.date}
                    />
                )
            })}
            {/* <ExpenseItem name={props.expenses[0].expenseName} amount={props.expenses[0].expenseAmount} date={props.expenses[0].date} />
        <ExpenseItem name={props.expenses[1].expenseName} amount={props.expenses[1].expenseAmount} date={props.expenses[1].date} />
        <ExpenseItem name={props.expenses[2].expenseName} amount={props.expenses[2].expenseAmount} date={props.expenses[2].date} /> */}

        </div >)
}

export default Expenses
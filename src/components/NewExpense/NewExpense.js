import React from "react"

import "./NewExpense.css"
import ExpenseForm from "../NewExpense/ExpenseForm"
const NewExpense =(props)=>{
   
    return (<div className="new-expense">
    <ExpenseForm pullFunc={props.pullFunc} />
</div>)
    
}

export default NewExpense;
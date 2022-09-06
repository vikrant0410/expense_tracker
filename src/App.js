import ExpenseRow from './components/ExpenseRow';
import data from "./expenseData.js"
import AddExpense from "./components/AddExpense";
import './App.css';
import { useState } from "react";





function App() {
//   const [ex1, ex2, ex3] = data

//   var newData = []

//   const handleData = (expData)=>{
//  newData.push(expData)

//   }
const [expData, setExpenseData] = useState(data);

const handleData = (expData) => {
  setExpenseData((prevValue) => {
    return [...prevValue, expData];
  });
};



  return (
    <div className="App">

<AddExpense pullFunc={handleData} />

{expData.map((expense, index) => {
  return (
    <ExpenseRow
      key={index}
      name={expense.expenseName}
      date={expense.date}
      amount={expense.expenseAmount}
    />
  );
})}
    
    </div>
  );
}

export default App;

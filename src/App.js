
import data from "./expenseData.js"
import Expenses from "./components/Expenses"
import './App.css';
import { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense.js";
import Card from "./components/Card"
import ExpensesFilter from "./components/ExpensesFilter/ExpensesFilter.js";





function App() {

  const [expData, setExpenseData] = useState(data);

  const handleData = (newData) => {
    setExpenseData((prevValue) => {
      return [...prevValue, newData];
    });
  };

  return (
    <div className="App">

      <Card>
        <NewExpense pullFunc={handleData} />
        <Expenses expenses={expData} />
      </Card>


    </div>
  );
}

export default App;

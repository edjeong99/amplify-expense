import logo from './logo.svg';
import './App.css';
import {  ExpenseCreateForm  } from './ui-components';
import { useEffect, useState } from 'react';
 function  App() {
  const [expenses, setExpenses] = useState();

  // List all items
  useEffect(() => { 
    const fetchExpenses = async () => {
      const allExpenses = await API.graphql({
        query: listExpenses
       });
     console.log(allExpenses);
     
    setExpenses(allExpenses)
    }
    });


  return (
    <div className="App">
      <header className="App-header">
        REACT  EXPENSE

        <ExpenseCreateForm />
      </header>
    </div>
  );
}

export default App;

import './App.css';

import { API, graphqlOperation } from 'aws-amplify'
import { createExpense } from './graphql/mutations'
import { listExpenses } from './graphql/queries'
import React, { useEffect, useState } from 'react'
import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const initialState = { item: '', category: '', amount:0 }

function App({ signOut, user }) { 

  const [formState, setFormState] = useState(initialState)
  const [expenses, setExpenses] = useState([])

  useEffect(() => {
    fetchExpenses()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchExpenses() {
    try {
      const expenseData = await API.graphql(graphqlOperation(listExpenses))
      const expensesResult = expenseData.data.listExpenses.items
      setExpenses(expensesResult)
      console.log("expenses")
      console.log(expensesResult)
    } catch (err) { console.log('error fetching expenses') }
  }

  async function addExpense() {
    try {
      if (!formState.item || !formState.category || !formState.amount) return
      const expense = { ...formState }
      setExpenses([...expenses, expense])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createExpense, {input: expense}))
    } catch (err) {
      console.log('error creating todo:', err)
    }
  }


  return (
    <div style={styles.container}>
       <Heading level={1}>Hello {user.username}</Heading>
    <Button onClick={signOut}>Sign out</Button>
   
    <h2>Amplify Expense</h2>
     <input 
      onChange={event => setInput('item', event.target.value)}
      style={styles.input}
      value={formState.item}
      placeholder="item"
    /> 
    <input
      onChange={event => setInput('category', event.target.value)}
      style={styles.input}
      value={formState.category}
      placeholder="category"
    /> 
    <input
      onChange={event => setInput('amount', event.target.value)}
      style={styles.input}
      value={formState.amount}
      placeholder="amount"
    /> 

    { <button style={styles.button} onClick={addExpense}>Create expense</button> }
    {
      expenses.map((expense, index) => (
        <div key={expense.id ? expense.id : index} style={styles.expense}>
          <p style={styles.expenseItem}>{expense.item}</p>
          <p style={styles.expenseCategory}>{expense.category}</p>
          <p style={styles.expenseAmount}>{expense.amount}</p>
        </div>
      ))
    }
  </div>
)

}
const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  expense: {  marginBottom: 15, display:'flex' },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  expenseItem: { fontSize: 20, fontWeight: 'bold' },
  expenseCategory: {  },
  expenseAmount: { color:'red', fontWeight: 'bold' },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}
export default withAuthenticator(App);

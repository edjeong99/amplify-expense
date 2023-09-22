import './App.css';

import { API, graphqlOperation } from 'aws-amplify'
import { createExpense } from './graphql/mutations'
import { listExpenses } from './graphql/queries'
import React, { useEffect, useState } from 'react'
import { withAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import AddExpense from './components/AddExpense'
import Header from './components/Header'
import {Container, Modal}  from '@mui/material'
import ExpenseList from './components/ExpenseList';
import ExpenseCreateForm from './ui-components/ExpenseCreateForm'


function App({ signOut, user }) { 
  const [expenses, setExpenses] = useState([])
const [showAddExpense, setShowAddExpense] = useState(false);

  useEffect(() => {
    fetchExpenses()
  }, [])

const handleShowAddExpense = () => {
  setShowAddExpense(prevState => !prevState);
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

  // async 
  function addExpense(expense) {
    // try {
      setExpenses([...expenses, expense])

    //   await API.graphql(graphqlOperation(createExpense, {input: expense}))
    // } catch (err) {
    //   console.log('error creating todo:', err)
    // }
  }

  function cleanup (){
   // Amplify.DataStore.clear();
   //DataStore.clear()
    signOut();
  }


  return (
    // <div style={styles.container}>
    <Container maxWidth="sm">
     <meta name="viewport" content="initial-scale=1, width=device-width" />
   <Header user={user} cleanup={cleanup} showAddExpense={handleShowAddExpense}/>
   <Modal
      open={showAddExpense}
      onClose={handleShowAddExpense}
      aria-labelledby="modal-modal-title" >
    
      <ExpenseCreateForm onSuccess={addExpense}/>
    </Modal>

    <ExpenseList expenses={expenses} />
   
    </Container>

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
// export default (App);
export default withAuthenticator(App);



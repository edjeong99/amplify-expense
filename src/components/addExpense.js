
import React, { useState } from 'react'
const initialState = { item: '', category: '', amount:0 }

const AddExpense = ({addExpense}) => {

    const [formState, setFormState] = useState(initialState)

    function setInput(key, value) {
        setFormState({ ...formState, [key]: value })
      }

    function handleAddExpense() {
          if (!formState.item || !formState.category || !formState.amount)
            return

         addExpense({ ...formState });
         setFormState(initialState)
      }

  return (
    <div> 
        <h2>Add Expense</h2>
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

    <button style={styles.button} onClick={handleAddExpense}>Add expense</button> 
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

  export default AddExpense
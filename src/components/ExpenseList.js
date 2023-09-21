import React from 'react'
import { DataGrid,GridRowsProp, GridColDef  } from '@mui/x-data-grid';




function ExpenseList({expenses}) {
    
   const data = expenses.map((expense, index) => (
    { id: index, col1: expense.item, col2: expense.category, col3: expense.amount}))
    const rows: GridRowsProp = data;

const columns: GridColDef[] = [
    { field: 'col1', headerName: 'item', width: 120 },
    { field: 'col2', headerName: 'category', width: 120 },
    { field: 'col3', headerName: 'amount', width: 120 },
  ];
  return (
    <div>
        <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
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
export default ExpenseList
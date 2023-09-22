import React, { useState } from "react";
import { DataGrid, GridRowsProp, GridColDef, GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from '@mui/icons-material/DeleteOutlined';

function ExpenseList({ expenses, deleteItem }) {
  // const [deletedRows, setDeletedRows] = useState([]);

  const handleDeleteClick = ({id}) => {
    console.log(id);
    deleteItem(id)
    // deleteItem(
    //   expenses.filter(
    //     (r) => deletedRows.filter((sr) => sr.id === r.id).length < 1
    //   )
    // );
    // setDeletedRows([]);
  };

  const data = expenses.map((expense) => ({
    id: expense.id,
    item: expense.item,
    category: expense.category,
    amount: expense.amount,
  }));
  const rows: GridRowsProp = data;

  const columns: GridColDef[] = [
    { field: "item", headerName: "item", width: 120},
    { field: "category", headerName: "category", width: 120 },
    { field: "amount", headerName: "amount", width: 120, align: "center", },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Delete',
      width: 100,
      cellClassName: 'actions',
      // getActions: ({ id }) => 
        
      //     <GridActionsCellItem
      //     icon={<DeleteIcon />}
      //     label="Delete"
      //     onClick={handleDeleteClick(id)}
      //     color="inherit"
      //   />
      renderCell: function render({ row }) {
        return <DeleteIcon  onClick={()=>handleDeleteClick(row)} />;
    },
    }
  ];




  return (
    <div>
      <div style={{ height: 300, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
                
        />
      </div>
    </div>
  );
}

export default ExpenseList;

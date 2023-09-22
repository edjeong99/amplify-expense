import "./App.css";
import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { deleteExpense } from "./graphql/mutations";
import { listExpenses } from "./graphql/queries";
import {  NewForm1 } from "./ui-components";
import { Container, Modal } from "@mui/material";
import Header from "./components/Header";
import ExpenseList from "./components/ExpenseList";
import SummaryCard from './components/SummaryCard'

function App({ signOut, user }) {
  const [budget, setBudget ] = useState(1000);
  const [expenseTotal, setExpenseTotal ] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [showAddExpense, setShowAddExpense] = useState(false);
  const [showChangeBudget, setShowChangeBudget] = useState(false);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleShowAddExpense = () => {
    setShowAddExpense((prevState) => !prevState);
  };
  const handleShowChangeBudget = () => {
    setShowChangeBudget((prevState) => !prevState);
  };


  async function fetchExpenses() {
    try {
      const expenseData = await API.graphql(graphqlOperation(listExpenses));
      const expensesResult = expenseData.data.listExpenses.items;
      setExpenses(expensesResult);
      console.log("expenses");
      console.log(expensesResult);
    } catch (err) {
      console.log("error fetching expenses");
    }
  }

  // async
  function addExpense(expense) {
    //CRUD is done by the component.
    setExpenses([...expenses, expense]);
  }

  function changeBudget(budget) {
    //CRUD is done by the component.
    setBudget(budget);
  }
    
  function cleanup() {
    // Amplify.DataStore.clear();
    //DataStore.clear()
    signOut();
  }
  const newForm1Overrides = {
    NewForm1: {
      style: {
        width: "60%",
        backgroundColor: "lightblue",
        position: "absolute",
        top: "20%",
        left: "20%",
      },
    },
    item: {
      style: {
        backgroundColor: "white",
      },
    },
    amount: {
      style: {
        backgroundColor: "white",
      },
    },
  };

  const deleteItem = async (id) => {
    if (expenses.filter((exp) => exp.id === id).length < 1) return;
    try {
      const deletedExpense = await API.graphql({
        query: deleteExpense,
        variables: {
          input: {
            id: id,
          },
        },
      });
      const newExpense = expenses.filter((exp) => exp.id !== id);
      setExpenses(newExpense);
      console.log(expenses);
    } catch (err) {
      console.log("error deleting expenses");
    }
  };

  return (
    // <div style={styles.container}>
    <Container maxWidth="sm">
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <Header
        user={user}
        cleanup={cleanup}
        showAddExpense={handleShowAddExpense}
      />
      <SummaryCard budget={budget} expenseTotal={expenseTotal} handleChangeBudget={handleShowChangeBudget}/>
      <Modal
        open={showChangeBudget}
        onClose={handleShowChangeBudget}
        aria-labelledby="modal-modal-title"
      >
        <NewForm1 onSuccess={changeBudget} overrides={newForm1Overrides} />
      </Modal>

      <Modal
        open={showAddExpense}
        onClose={handleShowAddExpense}
        aria-labelledby="modal-modal-title"
      >
        <NewForm1 onSuccess={addExpense} overrides={newForm1Overrides} />
      </Modal>

      <ExpenseList expenses={expenses} deleteItem={deleteItem} />
    </Container>
  );
}
const styles = {
  container: {
    width: 400,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  expense: { marginBottom: 15, display: "flex" },
  input: {
    border: "none",
    backgroundColor: "#ddd",
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
  },
  expenseItem: { fontSize: 20, fontWeight: "bold" },
  expenseCategory: {},
  expenseAmount: { color: "red", fontWeight: "bold" },
  button: {
    backgroundColor: "black",
    color: "white",
    outline: "none",
    fontSize: 18,
    padding: "12px 0px",
  },
};
export default App;
// export default withAuthenticator(App);

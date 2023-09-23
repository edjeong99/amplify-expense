import "./App.css";
import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { deleteExpense } from "./graphql/mutations";
import { listExpenses } from "./graphql/queries";
import { AddBudget, AddExpense, ExpenseCreateForm } from "./ui-components";
import { Container, Modal } from "@mui/material";
import Header from "./components/Header";
import ExpenseList from "./components/ExpenseList";
import SummaryCard from "./components/SummaryCard";
import { DataStore } from "@aws-amplify/datastore";
import { Budget, Expense } from "./models";

function App({ signOut, user }) {
  const [budget, setBudget] = useState(1000);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [showAddExpense, setShowAddExpense] = useState(false);
  const [showChangeBudget, setShowChangeBudget] = useState(false);

  let budgetId;

  useEffect(() => {
    fetchBudget();
    fetchExpenses();
  }, [expenseTotal]);

  const handleShowAddExpense = () => {
    setShowAddExpense((prevState) => !prevState);
  };
  const handleShowChangeBudget = () => {
    setShowChangeBudget((prevState) => !prevState);
  };

  async function fetchBudget() {
    try {
      const budget = await DataStore.query(Budget);
      console.log(budget[0]);
      if (budget.length > 0) {
        setBudget(budget[0].budget);
        budgetId = budget[0].id;
        console.log(budget[0].id + " ----" + budgetId);
      }
    } catch (err) {
      console.log("error budget expenses");
    }
  }
  async function fetchExpenses() {
    try {
      const expenseData = await DataStore.query(Expense);

      console.log(expenseData);
      setExpenses(expenseData);
      const totalExpense = expenseData
        .map((exp) => exp.amount)
        .reduce((acc, val) => (acc += val), 0)
        .toFixed(2);
      setExpenseTotal(totalExpense);
      console.log(totalExpense);
    } catch (err) {
      console.log("error fetching expenses");
    }
  }

  // async
  function addExpense(expense) {
    //CRUD is done by the component.
    setExpenseTotal((prevState) => prevState + expense.amount);
    setShowAddExpense(false);
  }

  async function changeBudget({ budget }) {
    //CRUD is done by the component.
    console.log(budget);

    try {
      const modelToDelete = await DataStore.query(Budget);
      console.log(modelToDelete);
      modelToDelete.map((m) => DataStore.delete(m));

      await DataStore.save(new Budget({ budget: +budget }));
      setBudget(budget);
      setShowChangeBudget(false);
    } catch (err) {
      console.log("error change budget ");
    }
  }
  async function resetExpense() {
    try {
      const modelToDelete = await DataStore.query(Expense);
      console.log(modelToDelete);
      modelToDelete.map((m) => DataStore.delete(m));
      setExpenseTotal(0);
    } catch (err) {
      console.log("error reset expense ");
    }
  }
  const ExpenseCreateFormOverrides = {
    AddExpense: {
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

  const addBudgetOverrides = {
    AddBudget: {
      style: {
        width: "60%",
        backgroundColor: "lightblue",
        position: "absolute",
        top: "20%",
        left: "20%",
      },
    },
    budget: {
      style: {
        backgroundColor: "white",
      },
    },
  };

  const deleteItem = async ({ id, amount }) => {
    if (expenses.filter((exp) => exp.id === id).length < 1) return;

    try {
      const modelToDelete = await DataStore.query(Expense, id);
      DataStore.delete(modelToDelete);
      const newExpense = expenses.filter((exp) => exp.id !== id);
      setExpenses(newExpense);
      setExpenseTotal((prevState) => prevState - amount);

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
        cleanup={signOut}
        resetExpense={resetExpense}
        showAddExpense={handleShowAddExpense}
      />
      <SummaryCard
        budget={budget}
        expenseTotal={expenseTotal}
        handleChangeBudget={handleShowChangeBudget}
      />
      <Modal
        open={showChangeBudget}
        onClose={handleShowChangeBudget}
        aria-labelledby="modal-modal-title"
      >
        <AddBudget onSubmit={changeBudget} overrides={addBudgetOverrides} />
      </Modal>

      <Modal
        open={showAddExpense}
        onClose={handleShowAddExpense}
        aria-labelledby="modal-modal-title"
      >
        <AddExpense
          onSuccess={addExpense}
          overrides={ExpenseCreateFormOverrides}
        />
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

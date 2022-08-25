import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "../Expenses/ExpenseForm";
import ErrorModal from "../ErrorModal";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState();

  const saveExpenseDataHandler = (enteredExpenseData) => {
    if (
      enteredExpenseData.title.length === 0 ||
      enteredExpenseData.amount.length === 0
    ) {
      setError({
        errorTitle: "Invalid input",
        errorMessage: "Please fill all fields",
      });
      return;
    }
    if (+enteredExpenseData.amount <= 0) {
      setError({
        errorTitle: "Invalid amount",
        errorMessage: "Expense amount should be greater then zero",
      });
      return;
    }

    if (enteredExpenseData.date.toString() === "Invalid Date") {
      setError({
        errorTitle: "Invalid Date",
        errorMessage: "Please enter valid date",
      });
      return;
    }

    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(!isEditing);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          errorTitle={error.errorTitle}
          errorMessage={error.errorMessage}
          onConfirm={errorHandler}
        />
      )}
      <div className="new-expense">
        {!isEditing && (
          <button type="button" onClick={startEditingHandler}>
            Add New Expense
          </button>
        )}
        {isEditing && (
          <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={startEditingHandler}
          />
        )}
      </div>
    </>
  );
};

export default NewExpense;

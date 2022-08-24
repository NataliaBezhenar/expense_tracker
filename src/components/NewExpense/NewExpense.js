import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "../Expenses/ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    if (
      enteredExpenseData.title.length === 0 ||
      enteredExpenseData.amount <= 0
    ) {
      console.log("not all data fields filled");
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

  return (
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
  );
};

export default NewExpense;

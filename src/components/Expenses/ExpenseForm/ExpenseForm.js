import { useRef, useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredDate, setEnteredDate] = useState(
    new Date().toLocaleDateString("en-CA")
  );
  const expenseTitleRef = useRef();
  const expenseAmountRef = useRef();

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredExpenseTitle = expenseTitleRef.current.value;
    const enteredExpenseAmount = expenseAmountRef.current.value;
    const expenseData = {
      title: enteredExpenseTitle,
      amount: +enteredExpenseAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
  };

  return (
    <form action="" onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            placeholder="Enter expense title"
            ref={expenseTitleRef}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input type="number" step="0.01" ref={expenseAmountRef} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input type="date" value={enteredDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

import { useState } from "react";
import NewExpense from "./components/NewExpense/";
import Expenses from "./components/Expenses/Expenses";

const INITIAL_EXPENSES = [
  {
    id: 222,
    title: "Storage Box rent",
    amount: 25.36,
    date: new Date(2021, 2, 22),
  },
  {
    title: "Electric kettle",
    amount: 125.26,
    date: new Date(2021, 1, 10),
    id: 123,
  },
  { id: 1, title: "Car insurance", amount: 54.31, date: new Date(2021, 4, 5) },
  { id: 2, title: "Products", amount: 39.87, date: new Date(2021, 2, 3) },
  {
    title: "Netflix subscription",
    amount: 130.2,
    date: new Date(2022, 1, 3),
    id: 3,
  },
  {
    title: "Books",
    amount: 86,
    date: new Date(2022, 2, 17),
    id: 4,
  },
  {
    title: "Health",
    amount: 250.5,
    date: new Date(2022, 3, 20),
    id: 5,
  },
  {
    title: "Studies",
    amount: 50.36,
    date: new Date(2022, 0, 15),
    id: 6,
  },
  { title: "Journey", amount: 350.9, date: new Date(2022, 4, 30), id: 7 },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

import { useState, useRef } from "react";
import ExpenseDate from "../ExpenseDate";
import Card from "../../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [newTitle, setNewTitle] = useState(props.title);
  const titleRef = useRef();
  const onTitleChange = () => {
    setNewTitle(titleRef.current.value);
  };

  return (
    <li className="expense-item__description">
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <input value={newTitle} ref={titleRef} onChange={onTitleChange} />
        <div className="expense-item__price">${props.amount}</div>
      </Card>
    </li>
  );
};

export default ExpenseItem;

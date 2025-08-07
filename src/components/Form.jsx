import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.flex}>
        <input
          className={styles.crazyInput}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          type="text"
          value={todo.name}
          placeholder="Enter Todo Item..."
        />
        <button className={styles.crazyButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}

import styles from "./todoItem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  }
  const completed = item.done ? styles.completed : "";
  return (
    <div className={styles.todoItem}>
      <div className={styles.itemName}>
        <span className={completed}>{item.name}</span>
        <span className={styles.flexbtn}>
          <button onClick={() => handleDelete(item)} className={styles.delBtn}>
            x
          </button>
          <button
            className={styles.delBtn}
            onClick={() => handleClick(item.name)}
          >
            ✔
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}

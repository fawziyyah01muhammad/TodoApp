import styles from "./footer.module.css";
export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className={styles.footer}>
      <h3>Completed Todos: {completedTodos}</h3>
      <h3>Total Todos: {totalTodos}</h3>
    </div>
  );
}

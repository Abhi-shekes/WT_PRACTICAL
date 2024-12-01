import React, { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const toggleTodo = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>To-Do List</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          style={styles.input}
        />
        <button onClick={addTodo} style={styles.addButton}>
          Add
        </button>
      </div>
      <ul style={styles.todoList}>
        {todos.map((todo, index) => (
          <li key={index} style={styles.todoItem}>
            <span
              onClick={() => toggleTodo(index)}
              style={{
                ...styles.todoText,
                textDecoration: todo.completed ? "line-through" : "none",
                color: todo.completed ? "#aaa" : "#333",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(index)} style={styles.deleteButton}>
              ✖
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Inline CSS styles
const styles = {
  container: {
    padding: "20px",
    maxWidth: "500px",
    margin: "50px auto",
    fontFamily: "Arial, sans-serif",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    color: "#333",
    fontSize: "24px",
    marginBottom: "20px",
  },
  inputContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
    marginRight: "10px",
  },
  addButton: {
    padding: "10px 20px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.2s",
  },
  addButtonHover: {
    backgroundColor: "#218838",
  },
  todoList: {
    listStyle: "none",
    padding: 0,
  },
  todoItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    borderBottom: "1px solid #ddd",
    borderRadius: "4px",
    marginBottom: "8px",
    backgroundColor: "#fff",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },
  todoText: {
    cursor: "pointer",
    fontSize: "16px",
    flexGrow: 1,
  },
  deleteButton: {
    padding: "5px 10px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "background-color 0.2s",
  },
};

export default App;

"use client";
import React from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import TODOHero from "./components/TODOHero";
import TODOList from "./components/TODOList";

const App = () => {
  const [todos, setTodos] = React.useState([
    { title: "Zadatak 1", id: crypto.randomUUID(), is_completed: false },
    { title: "Zadatak 2", id: crypto.randomUUID(), is_completed: true },
    { title: "Zadatak 3", id: crypto.randomUUID(), is_completed: false },
  ]);

  // Function to add a new todo
  const addTodo = (title) => {
    const newTodo = { title, id: crypto.randomUUID(), is_completed: false };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  // Function to toggle completion status
  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, is_completed: !todo.is_completed } : todo
      )
    );
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="wrapper">
      <Header />
      <TODOHero
        todos_completed={todos.filter((todo) => todo.is_completed).length}
        total_todos={todos.length}
      />
      <Form addTodo={addTodo} />
      <TODOList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;

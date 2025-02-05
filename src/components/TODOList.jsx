import React from "react";

function Item({ item, toggleTodo, deleteTodo }) {
  return (
    <li id={item?.id} className={`todo_item ${item.is_completed ? "completed" : ""}`}>
      {/* Toggle Completion */}
      <button className="todo_items_left" onClick={() => toggleTodo(item.id)}>
        <svg>
          <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998" />
        </svg>
        <p>{item?.title}</p>
      </button>
      
      <div className="todo_items_right">
        {/* Delete Task */}
        <button onClick={() => deleteTodo(item.id)}>
          <span className="visually-hidden">Delete</span>
          <svg>
            <path d="" />
          </svg>
        </button>
      </div>
    </li>
  );
}

function TODOList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ol className="todo_list">
      {todos && todos.length > 0 ? (
        todos.map((item) => (
          <Item key={item.id} item={item} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        ))
      ) : (
        <p>Seems lonely in here, what are you up to?</p>
      )}
    </ol>
  );
}

export default TODOList;
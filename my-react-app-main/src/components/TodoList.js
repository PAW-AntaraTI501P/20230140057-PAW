// src/components/TodoList.js

import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToggleCompleted, onDeleteTodo, onUpdateTodo }) => {
  if (todos.length === 0) {
    return <p>Tidak ada tugas yang ditemukan. Silakan tambahkan satu.</p>;
  }

  return (
    <div className="todo-list-container">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleCompleted={onToggleCompleted}
          onDeleteTodo={onDeleteTodo}
          onUpdateTodo={onUpdateTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
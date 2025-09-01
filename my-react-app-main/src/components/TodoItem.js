// src/components/TodoItem.js

import React, { useState } from "react";
import "../App.css"; // Pastikan Anda mengimpor file CSS

const TodoItem = ({ todo, onToggleCompleted, onDeleteTodo, onUpdateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.task);

  const handleSave = () => {
    if (editText.trim()) {
      onUpdateTodo(todo.id, editText);
      setIsEditing(false);
    }
  };

  if (isEditing) {
    return (
      <div className="todo-row">
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="edit-input"
        />
        <div className="todo-actions">
          <button onClick={handleSave} className="save-button">
            Simpan
          </button>
          <button onClick={() => setIsEditing(false)} className="cancel-button">
            Batal
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="todo-row">
      <h3 className={`todo-text ${todo.completed ? "completed" : ""}`}>
        {todo.task}
      </h3>
      <div className="todo-actions">
        <button onClick={() => setIsEditing(true)} className="update-button">
          Update
        </button>
        <button
          onClick={() => onToggleCompleted(todo.id, todo.completed)}
          className="complete-button"
        >
          {todo.completed ? "Belum Selesai" : "Selesai"}
        </button>
        <button onClick={() => onDeleteTodo(todo.id)} className="delete-button">
          Hapus
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
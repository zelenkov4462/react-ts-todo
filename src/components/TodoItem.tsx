import React, { FC } from "react";
import { ITodo } from "../../types/data";

interface TodoItemProps {
  todo: ITodo;
  num: number;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const TodoItem: FC<TodoItemProps> = ({ todo, num, removeTodo, toggleTodo }) => {
  const { id, title, complete } = todo;
  return (
    <div>
      <input
        type="checkbox"
        checked={complete}
        onChange={() => toggleTodo(id)}
      />
      {num}. {title}
      <button onClick={() => removeTodo(id)}>x</button>
    </div>
  );
};

export default TodoItem;

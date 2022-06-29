import React, { FC } from "react";
import { ITodo } from "../../types/data";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: ITodo[];
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const TodoList: FC<TodoListProps> = ({ todos, removeTodo, toggleTodo }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          key={todo.id}
          todo={todo}
          num={index + 1}
        />
      ))}
    </div>
  );
};

export default TodoList;

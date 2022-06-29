import React, { FC, useEffect, useRef, useState } from "react";
import { ITodo } from "../types/data";
import TodoList from "./components/TodoList";

const App: FC = () => {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const addNewTodo = () => {
    if (value) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: value,
          complete: false,
        },
      ]);
      setValue("");
    }
  };

  const removeTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          complete: !todo.complete,
        };
      })
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addNewTodo();
    }
  };
  return (
    <div>
      <div>
        <input
          value={value}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          ref={inputRef}
        />
        <button onClick={addNewTodo}>Click</button>
      </div>
      <TodoList removeTodo={removeTodo} toggleTodo={toggleTodo} todos={todos} />
    </div>
  );
};

export default App;

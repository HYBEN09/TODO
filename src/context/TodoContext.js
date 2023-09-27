import { createContext, useContext, useEffect, useState } from 'react';

const TodoContext = createContext(null);

export const useTodo = () => useContext(TodoContext);

export function TodoProvider({ children, todoService }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    todoService.get().then((todos) => {
      setTodos(todos || []);
    });
  }, [todoService]);

  const createTodo = (todo) => {
    todoService.create(todo).then((newTodo) => {
      setTodos((prev) => [...prev, newTodo]);
    });
  };

  const updateTodo = (id, updatedTodo) => {
    todoService.update(id, updatedTodo).then(() => {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, ...updatedTodo } : todo
        )
      );
    });
  };

  const deleteTodo = (id) => {
    todoService.delete(id).then(() => {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    });
  };

  return (
    <TodoContext.Provider value={{ todos, createTodo, updateTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

import { createContext, useContext, useEffect, useState } from 'react';

const TodoContext = createContext(null);

export const useTodo = () => useContext(TodoContext);

export function TodoProvider({ children, todoService }) {
  const [todos, setTodos] = useState([]);

  // 앱 초기화 시, 로컬 스토리지에서 투두 데이터 가져오기
  useEffect(() => {
    const todoData = localStorage.getItem('todos');
    if (todoData) {
      setTodos(JSON.parse(todoData));
    } else {
      setTodos([]);
    }
  }, []);

  const createTodo = (todo) => {
    todoService.create(todo).then((newTodo) => {
      setTodos((prev) => {
        const updatedTodos = [...prev, newTodo];
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
        return updatedTodos;
      });
    });
  };

  const updateTodo = (id, updatedTodo) => {
    todoService.update(id, updatedTodo).then(() => {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, todo: updatedTodo } : todo
        )
      );
    });
  };

  const deleteTodo = (id) => {
    todoService.delete(id).then(() => {
      setTodos((prev) => {
        const updatedTodos = prev.filter((todo) => todo.id !== id);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
        return updatedTodos;
      });
    });
  };

  return (
    <TodoContext.Provider value={{ todos, createTodo, updateTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

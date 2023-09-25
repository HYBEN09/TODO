import { useState } from 'react';
import { useTodo } from '../context/TodoContext';
import { TodoForm } from '../components/Todo/TodoForm';
import { TodoList } from '../components/Todo/TodoList';

function Todo() {
  const [newTodo, setNewTodo] = useState('');
  const { todos, createTodo, updateTodo, deleteTodo } = useTodo();

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      createTodo(newTodo);
      setNewTodo('');
    }
  };

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <div className="min-h-custom bg-sky-100 dark:bg-gray-800 flex justify-center items-center">
      <div className="container-box">
        <h2 className="title">TODO LIST</h2>
        <TodoForm
          newTodo={newTodo}
          handleAddTodo={handleAddTodo}
          handleChange={handleChange}
        />

        <TodoList
          todos={todos}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

export default Todo;

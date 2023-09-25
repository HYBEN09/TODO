import { TodoItem } from './TodoItem';

export function TodoList({ todos, updateTodo, deleteTodo }) {
  return (
    <ul>
      {todos?.map(({ id, todo }) => (
        <TodoItem
          key={id}
          id={id}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

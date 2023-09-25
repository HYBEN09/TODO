import Button from '../UI/Button';

export function TodoForm({ newTodo, handleAddTodo, handleChange }) {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTodo();
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="mb-4 flex items-center gap-5">
        <input
          type="text"
          value={newTodo}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          className="w-full p-2 border rounded-lg focus:ring focus:ring-indigo-200 dark:focus:ring-yellow-400 dark:text-black"
          placeholder="Add a new todo"
        />
        <Button
          type="button"
          onClick={handleAddTodo}
          className="bg-sky-500 text-white py-2 px-10 rounded-lg hover:bg-sky-600 focus:ring focus:ring-sky-200 dark:focus:ring-yellow-400"
        >
          create
        </Button>
      </div>
    </form>
  );
}

import { useState } from 'react';
import Button from '../components/UI/Button';
import { useTodo } from '../context/TodoContext';

function Todo() {
  const [newTodo, setNewTodo] = useState('');
  const [editingId, setEditingId] = useState(null); // Store the ID of the item being edited
  const [editedContent, setEditedContent] = useState(''); // Store the edited content

  const saveUserInput = (e) => setNewTodo(e.target.value);

  const { todos, createTodo, updateTodo, deleteTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(newTodo);
    setNewTodo('');
  };

  const handleModify = (id, content) => {
    setEditingId(id);
    setEditedContent(content);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditedContent('');
  };

  const handleSaveEdit = (id) => {
    updateTodo(id, editedContent);
    setEditingId(null);
    setEditedContent('');
  };

  const handleDelete = (id) => {
    deleteTodo(id);
  };

  return (
    <div className="min-h-custom bg-sky-100 dark:bg-gray-800 flex justify-center items-center">
      <div className="container-box">
        <h2 className="title">TODO LIST</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex items-center gap-5">
            <input
              type="text"
              value={newTodo}
              onChange={saveUserInput}
              className="w-full p-2 border rounded-lg focus:ring focus:ring-indigo-200 dark:focus:ring-yellow-400 dark:text-black"
              placeholder="Add a new todo"
            />
            <Button
              type="button"
              onClick={handleSubmit}
              className="bg-sky-500 text-white py-2 px-10 rounded-lg hover:bg-sky-600 focus:ring focus:ring-sky-200 dark:focus:ring-yellow-400"
            >
              create
            </Button>
          </div>
          <ul>
            {todos?.map(({ id, todo }) => (
              <li key={id} className="mb-2">
                {editingId === id ? (
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={editedContent}
                      onChange={(e) => setEditedContent(e.target.value)}
                      className="w-full p-2 border rounded-lg focus:ring focus:ring-indigo-200 dark:focus:ring-yellow-400"
                    />
                    <Button
                      type="button"
                      onClick={() => handleSaveEdit(id)}
                      className=" min-w-[70px]  bg-sky-500 text-white py-2 px-5 rounded-lg hover:bg-sky-600 focus:ring focus:ring-sky-200 dark:focus:ring-yellow-400"
                    >
                      저장
                    </Button>
                    <Button
                      type="button"
                      onClick={handleCancelEdit}
                      className="min-w-[70px] bg-gray-300 text-gray-800 py-2 px-5 rounded-lg hover:bg-gray-400 focus:ring focus:ring-indigo-200 dark:focus:ring-yellow-400"
                    >
                      취소
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <label className="w-[310px] py-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="text-gray-800 dark:text-gray-200">
                        {todo}
                      </span>
                    </label>
                    <Button
                      type="button"
                      onClick={() => handleModify(id, todo)}
                      className="bg-sky-500 text-white py-2 px-5 rounded-lg hover:bg-sky-600 focus:ring focus:ring-sky-200 dark:focus:ring-yellow-400"
                    >
                      수정
                    </Button>
                    <Button
                      type="button"
                      onClick={() => handleDelete(id)}
                      className="bg-sky-500 text-white py-2 px-5 rounded-lg hover:bg-sky-600 focus:ring focus:ring-sky-200 dark:focus:ring-yellow-400"
                    >
                      삭제
                    </Button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </form>
      </div>
    </div>
  );
}

export default Todo;

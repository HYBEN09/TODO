import { useState } from 'react';
import Button from '../UI/Button';

export function TodoItem({ id, todo, updateTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(todo);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    updateTodo(id, editedContent);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedContent(todo);
  };

  return (
    <li className="mb-2">
      {isEditing ? (
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring focus:ring-indigo-200 dark:focus:ring-yellow-400"
          />
          <Button
            type="button"
            onClick={handleSaveEdit}
            className="min-w-[70px] bg-sky-500 text-white py-2 px-5 rounded-lg hover:bg-sky-600 focus:ring focus:ring-sky-200 dark:focus:ring-yellow-400"
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
            <span className="text-gray-800 dark:text-gray-200">{todo}</span>
          </label>
          <Button
            type="button"
            onClick={handleEditClick}
            className="bg-sky-500 text-white py-2 px-5 rounded-lg hover:bg-sky-600 focus:ring focus:ring-sky-200 dark:focus:ring-yellow-400"
          >
            수정
          </Button>
          <Button
            type="button"
            onClick={() => deleteTodo(id)}
            className="bg-sky-500 text-white py-2 px-5 rounded-lg hover:bg-sky-600 focus:ring focus:ring-sky-200 dark:focus:ring-yellow-400"
          >
            삭제
          </Button>
        </div>
      )}
    </li>
  );
}

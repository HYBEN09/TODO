function Todo() {
  return (
    <div className="min-h-custom bg-sky-100 dark:bg-gray-800 flex justify-center items-center">
      <div className="container-box">
        <h2 className="title">TODO LIST</h2>

        <ul>
          <li>
            <label>
              <input type="checkbox" />
              <span>TODO 1</span>
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              <span>TODO 2</span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Todo;

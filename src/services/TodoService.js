export class LocalTodoService {
  constructor(todoStorage) {
    this.id = 0;
    this.todos = todoStorage.get() || [];
    this.todoStorage = todoStorage;
  }

  async get() {
    return this.todos;
  }

  async create(todo) {
    const newTodo = { id: ++this.id, todo, isComplete: false, userId: 1 };
    const newTodos = [...this.todos, newTodo];

    this.todos = newTodos;
    this.todoStorage.save(this.todos);

    return newTodo;
  }

  async update(id, updatedTodo) {
    let todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, ...updatedTodo } : todo
    );

    this.todoStorage.save(todos);
    this.todos = todos;
  }

  async delete(id) {
    let todos = this.todos.filter((todo) => todo.id !== id);
    this.todoStorage.save(todos);
    this.todos = todos;
  }
}

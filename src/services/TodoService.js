//* TodoService Interface
// get():Promise<Todo[]>
// create(todo:string):Promise<Todo>

//* Todo
// {
//   "id": number,
//   "todo": string,
//   "isCompleted": boolean,
//   "userId": number
// }

export class LocalTodoService {
  constructor(storage) {
    this.id = 0;
    this.todos = [];
    this.storage = storage;
  }

  async get() {
    return this.todos;
  }

  async create(todo) {
    const newTodo = { id: ++this.id, todo, isComplete: false, userId: 1 };
    const newTodos = [...this.todos, newTodo];

    this.todos = newTodos;

    return newTodo;
  }

  async update(id, updatedTodo) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, todo: updatedTodo } : todo
    );
  }

  async delete(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}

export class TodoServiceImpl {
  #httpClient;

  constructor(httpClient) {
    this.#httpClient = httpClient;
  }

  async get() {
    const response = await this.#httpClient.fetch('todos');

    return response.json();
  }

  async create(todo) {
    const response = await this.#httpClient.fetch('todos', {
      method: 'POST',
      body: JSON.stringify({
        todo,
      }),
    });

    return response.json();
  }
}

export class TodoStorage {
  #todo;

  constructor() {
    this.#todo = 'todos';
  }

  save(todos) {
    localStorage.setItem(this.#todo, JSON.stringify(todos));
  }

  get() {
    const storedTodos = localStorage.getItem(this.#todo);
    return storedTodos ? JSON.parse(storedTodos) : [];
  }

  delete() {
    localStorage.removeItem(this.#todo);
  }
}

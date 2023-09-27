export class TokenStorage {
  #key;

  constructor() {
    this.#key = 'ACCESS_TOKEN';
  }

  save(token) {
    localStorage.setItem(this.#key, token);
  }

  get() {
    return localStorage.getItem(this.#key);
  }

  delete() {
    localStorage.removeItem(this.#key);
  }
}

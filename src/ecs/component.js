export default class Component {
  #id;

  constructor() {
    this.#id = crypto.randomUUID();
  }

  get id() {
    return this.#id;
  }
}

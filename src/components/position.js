import Component from "../ecs/component.js";

export default class Position extends Component {
  #x;
  #y;

  constructor(x = 0, y = 0) {
    super();

    this.#x = x;
    this.#y = y;
  }

  get x() {
    return this.#x;
  }

  get y() {
    return this.#y;
  }

  set x(value) {
    this.#x = value;
  }

  set y(value) {
    this.#y = value;
  }

  get position() {
    return { x: this.#x, y: this.#y };
  }
}

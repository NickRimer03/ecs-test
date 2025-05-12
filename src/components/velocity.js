import Component from "../ecs/component.js";

export default class Velocity extends Component {
  #vx;
  #vy;

  constructor(vx = 0, vy = 0) {
    super();

    this.#vx = vx;
    this.#vy = vy;
  }

  get vx() {
    return this.#vx;
  }

  get vy() {
    return this.#vy;
  }

  set vx(value) {
    this.#vx = value;
  }

  set vy(value) {
    this.#vy = value;
  }

  get velocity() {
    return { vx: this.#vx, vy: this.#vy };
  }
}

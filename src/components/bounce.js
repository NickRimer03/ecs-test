import Component from "../ecs/component.js";

export default class Bounce extends Component {
  #radius;

  constructor(radius = 0) {
    super();

    this.#radius = radius;
  }

  get radius() {
    return this.#radius;
  }
}

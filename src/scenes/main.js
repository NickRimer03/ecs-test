import Stats from "stats-js";
import Bounce from "../components/bounce.js";
import Position from "../components/position.js";
import Velocity from "../components/velocity.js";
import Engine from "../ecs/engine.js";
import Bouncing from "../systems/bouncing.js";
import Movement from "../systems/movement.js";
import Utils from "../utils.js";

export default class Main extends Phaser.Scene {
  #engine;
  #stats;
  #balls;

  create() {
    this.#stats = new Stats();
    this.#stats.showPanel(0);
    document.body.appendChild(this.#stats.dom);

    const movement = new Movement();
    const bouncing = new Bouncing();

    this.#engine = new Engine();
    this.#engine.addSystem(movement).addSystem(bouncing);

    this.#balls = [];
    for (let i = 0; i < 100; i += 1) {
      const x = Utils.getRandomArbitrary(0, 800);
      const y = Utils.getRandomArbitrary(0, 600);
      const vx = Utils.getRandomArbitrary(-0.05, 0.05);
      const vy = Utils.getRandomArbitrary(-0.05, 0.05);
      const r = Utils.getRandomArbitrary(5, 50);
      const color = Utils.getRandomArbitrary(0x000000, 0xffffff);
      const alpha = Utils.getRandomArbitrary(0.4, 1);

      const entity = this.#engine
        .createEntity()
        .addComponent(new Position(x, y))
        .addComponent(new Velocity(vx, vy))
        .addComponent(new Bounce(r));

      const circle = this.add.circle(x, y, r, color, alpha);
      circle.setData("entity", entity);

      this.#balls.push(circle);
    }

    this.#engine.start();
  }

  update(time, delta) {
    this.#stats.begin();

    this.#engine.update(time, delta);

    for (const ball of this.#balls) {
      const { x, y } = ball.getData("entity").getComponent(Position).position;

      ball.setPosition(x, y);
    }

    this.#stats.end();
  }
}

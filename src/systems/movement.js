import Position from "../components/position.js";
import Velocity from "../components/velocity.js";
import System from "../ecs/system.js";

export default class Movement extends System {
  filter(entity) {
    return entity.hasComponent(Position) && entity.hasComponent(Velocity);
  }

  update(time, delta) {
    for (const entity of this.entities) {
      const position = entity.getComponent(Position);
      const { vx, vy } = entity.getComponent(Velocity).velocity;

      position.x += vx * delta;
      position.y += vy * delta;
    }
  }
}

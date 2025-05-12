import Bounce from "../components/bounce.js";
import Position from "../components/position.js";
import Velocity from "../components/velocity.js";
import System from "../ecs/system.js";

/**
 * BounceSystem: reverses velocity when an entity hits scene boundaries
 */
export default class Bouncing extends System {
  /**
   * @param {Entity} entity
   */
  filter(entity) {
    return (
      entity.hasComponent(Position) && entity.hasComponent(Velocity) && entity.hasComponent(Bounce)
    );
  }

  /**
   * @param {number} time
   * @param {number} delta
   */
  update(time, delta) {
    const [width, height] = [800, 600];

    for (const e of this.entities) {
      const pos = e.getComponent(Position);
      const vel = e.getComponent(Velocity);
      const { radius } = e.getComponent(Bounce);

      if (pos.x - radius <= 0 && vel.vx < 0) vel.vx *= -1;
      if (pos.x + radius >= width && vel.vx > 0) vel.vx *= -1;
      if (pos.y - radius <= 0 && vel.vy < 0) vel.vy *= -1;
      if (pos.y + radius >= height && vel.vy > 0) vel.vy *= -1;
    }
  }
}

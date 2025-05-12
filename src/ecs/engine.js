import { Entity } from "./entity.js";

/**
 * Engine: manages entities, systems, and the main loop.
 */
export default class Engine {
  #entities = [];
  #systems = [];
  #running = false;

  /**
   * Create and register a new entity.
   * @returns {Entity} A newly created entity with a unique ID.
   */
  createEntity() {
    const entity = new Entity();
    this.#entities.push(entity);

    return entity;
  }

  /**
   * Add a system to the engine.
   * @param {System} system - A system instance to process entities.
   * @returns {Engine} this - For chaining.
   */
  addSystem(system) {
    this.#systems.push(system);

    return this;
  }

  /**
   * Start the main game loop
   */
  start() {
    this.#running = true;
  }

  /**
   * Stop the main game loop.
   */
  stop() {
    this.#running = false;
  }

  /**
   * Internal: update all systems with filtered entities and delta time.
   * @param {number} time - The current time.
   * @param {number} delta - Time elapsed since last frame (in ms).
   * @private
   */
  update(time, delta) {
    for (const system of this.#systems) {
      system.entities = this.#entities.filter((e) => system.filter(e));
      system.update(time, delta);
    }
  }
}

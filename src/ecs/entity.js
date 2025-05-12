/**
 * Entity: a unique identifier with attached components.
 */
export class Entity {
  #id;
  #components;

  constructor() {
    /** @type {String} */ this.#id = crypto.randomUUID();
    /** @type {Map<String, Object>} */ this.#components = new Map();
  }

  /**
   * Get the entity ID.
   * @return {String}
   */
  get id() {
    return this.#id;
  }

  /**
   * Attach a component instance to this entity.
   * @template T
   * @param {T} component - Component instance (class-based).
   * @returns {Entity} this
   */
  addComponent(component) {
    this.#components.set(component.constructor.name, component);

    return this;
  }

  /**
   * Check if an entity has a component.
   * @template T
   * @param {T} component
   * @returns {boolean}
   */
  hasComponent(component) {
    return this.#components.has(component.name);
  }

  /**
   * Get a component by its class.
   * @template T
   * @param {T} component - Class constructor of a component.
   * @returns {T|undefined}
   */
  getComponent(component) {
    return this.#components.get(component.name);
  }
}

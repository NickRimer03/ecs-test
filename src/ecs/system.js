/**
 * System: processing logic over entities matching a filter.
 */
export default class System {
  constructor() {
    /** @type {Entity[]} */ this.entities = [];
  }

  /**
   * Filter function: override to select entities.
   * @param {Entity} entity
   * @returns {boolean}
   */
  filter(entity) {
    return false;
  }

  /**
   * Update logic: override to process entities.
   * @param {number} time - The current time
   * @param {number} delta - The delta time in ms since the last frame
   */
  update(time, delta) {
    // to be implemented by subclass
  }
}

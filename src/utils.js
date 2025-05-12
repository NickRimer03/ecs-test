export default class Utils {
  static getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
}

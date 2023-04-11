export default class Composition {
  constructor(a, b) {
    this.a = a;
    this.b = b
    return this.render();
  }

  render() {
    this.composition = this.a + this.b
  }
}
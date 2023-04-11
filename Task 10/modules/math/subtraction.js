export default class Substraction {
  constructor(a, b) {
    this.a = a;
    this.b=b;
    return this.render();
  }

  render() {
    this.substraction = this.a - this.b;
    }
result(){
    return this.substraction
  }
}
export default class Multiplication {
  constructor(a, b) {
    this.a = a;
    this.b=b;
    return this.render();
  }

  render() {
    this.multiplication =this.a * this.b;
}
  result(){
    return this.multiplication
  }
}
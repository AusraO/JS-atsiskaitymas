export default class Division {
  constructor(a, b) {
    this.a = a;
    this.b=b
    return this.render();
  }

  render() {
    this.division =this.a / this.b;
}
  result(){
    return this.division
  }
}
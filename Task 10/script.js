import Composition from "./modules/math/composition.js";
import Substraction from "./modules/math/subtraction.js";
import Multiplication from "./modules/math/multiplication.js";
import Division from "./modules/math/division.js";
import { one, two, three, four, five} from "./modules/numbers/numbers.js";


/* ------------------------------ TASK 10 ---------------------------------------------------
Naudodami modulius sutvarkykite užduoties "Task 10" esančius failus taip, kad veiktų žemiau pateiktos funkcijos.
-------------------------------------------------------------------------------------------- */

let a = new Composition(one, four);
let b = new Division(four, two);
let c = new Substraction(three, two);
let d = new Multiplication(five, two);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
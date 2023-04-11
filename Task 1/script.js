/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

function svorioSkaiciavimas(event) {

  event.preventDefault();
  let svorisKg = event.target.elements.search.value;

  let svorisSvarais = svorisKg * 2.2046
  let svorisGramais = svorisKg / 0.0010000
  let svorisUncijomis = svorisKg * 35.274

  document.querySelector('#output').innerHTML =
    "Weight in lb = " + svorisSvarais +
    "<span> Weight in g = " + svorisGramais + '</span>' +
    "<span>Weight in oz = " + svorisUncijomis + '</span>'
}

document
  .querySelector('form')
  .addEventListener('submit', svorioSkaiciavimas)


/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const button = document.querySelector('#btn__element');
const countingSpace = document.querySelector('#btn__state');
let clickCounter = 0


button.addEventListener('click', () => {
    clickCounter++;
  countingSpace.textContent = clickCounter;
 
});


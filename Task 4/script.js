import CarCards from "./carsCards.js";
/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
fetch(ENDPOINT)
    .then(res => res.json())
    .then(cars => {
        const allCars = document.querySelector('#output')
        console.log(cars)
        cars.forEach(car => {
            console.log(car.brand)
            const newcarCards = new CarCards(car.brand, car.models)
            allCars.appendChild(newcarCards)
        })
    })



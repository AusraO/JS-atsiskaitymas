import UserCards from './card.js';
/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */



const ENDPOINT = 'https://api.github.com/users';
const button = document.querySelector('#btn');
const message = document.querySelector('#message');

button.addEventListener('click', () => {
    message.style.display = 'none'
    fetch(ENDPOINT)
        .then(res => res.json())
        .then(users => {
            const allUsers = document.querySelector('#output')
            users.forEach(user => {
                console.log(user.login, user.avatar_url)
                const newUserCard = new UserCards(user)
                allUsers.appendChild(newUserCard)
            })
        })
});
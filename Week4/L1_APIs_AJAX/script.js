/*
Additional Reading: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
https://www.w3schools.com/jsref/event_preventdefault.asp
*/

console.log('Script Linked Successfully! 🎉')

const pokeAPI = 'https://pokeapi.co/api/v2/pokemon/';

// Getting the value that is inputed into the search form.
const pokeName = document.querySelector('#pokeName');

const pokeDisplay = document.querySelector('#pokeList');

/* 
Promises -> An action of an asynchronous operation that will either succeed or fail.
Like the term 'Promise' there is no guarantee the data will succeed, but it guarantees an attempt is made/fulfilled before continuing the rest of the code.

Promises have 3 statuses:
Pending (Loading/Neutral)
Fulfilled (Success)
Rejected (Failed)

There are two ways to add asynchronous functions into our code for fetching our APIs...
*/

function getPokeData(event) {
    // preventdefault prevents the form from trying to leave the page.
    event.preventDefault();
    // https://pokeapi.co/api/v2/pokemon/mawile
    fetch(pokeAPI + pokeName.value)
        .then(response => response.json())
        .then(pokeData => {
            console.log(pokeData);
            pokeDisplay.innerHTML += `
            <div class="pokeBox">
                <p> Name : ${pokeData.name} </p>
                <p> Normal Ver. : <img src='${pokeData.sprites.front_default}' alt='${pokeData.name}'> </p>
                <p> Shiny Ver. : <img src='${pokeData.sprites.front_shiny}' alt='${pokeData.name}'> </p>
            </div>
            `
        })
        .catch(err => console.log(err))
}

async function getPokeData2(event) {
    event.preventDefault();
    let response = await fetch(pokeAPI + pokeName.value);
    let pokeData = await response.json();

    pokeDisplay.innerHTML += `
    <div class="pokeBox">
        <p> Name : ${pokeData.name} </p>
        <p> Normal Ver. : <img src='${pokeData.sprites.front_default}' alt='${pokeData.name}'> </p>
        <p> Shiny Ver. : <img src='${pokeData.sprites.front_shiny}' alt='${pokeData.name}'> </p>
    </div>
    `

}

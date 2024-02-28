/* 
Promises -> An action of an asynchronous operation that will either succeed or fail.
Like the term 'Promise' there is no guarantee the data will be succeed, but it guarantees an attempt is made/fulfilled before continuing the rest of the code.

Promises have 3 statuses:
Pending (Loading/Neutral)
Fulfilled (Success)
Rejected (Failed)

*/

async function getPokeData() {

    var response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    var pokeData = await response.json();
    console.log(pokeData)
    return pokeData;
}

// getPokeData()

fetch("https://pokeapi.co/api/v2/pokemon/ditto") // Promise is generated with fetch.
    .then((res) => { res.json() })                     // .then( ... ) is the next step after fetch is resolved and it succeeded.
    .then(pokeData => console.log(pokeData))
    .catch(err => console.log(err))             // .catch( ... ) when an error occurs, catch executes.

async function getPokeData2(event) {
    event.preventDefault();
    let response = await fetch(pokeAPI + pokeName.value);
    let pokeData = await response.json();

    pokeDisplay.innerHTML += `
                <div class="pokeBox">
                    <p> Name : ${pokeData.name} </p>
                    <p> Normal Ver: <img src="${pokeData.sprites.front_default}" alt="${pokeData.name}"> </p>
                    <p> Shiny Ver: <img src="${pokeData.sprites.front_shiny}" alt="${pokeData.name}"> </p>
                </div>
                `
    console.log(pokeData)
    return pokeData;
}


/*

Additional Reading: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
https://www.w3schools.com/jsref/event_preventdefault.asp

*/

function searchPokemon(e) { // e == event/action

    e.preventDefault(); // Prevents the standard action of the form being submitted. Instead it executes the script below!

    let searchForm = document.getElementById('searchForm');
    let form = new FormData(searchForm);        // JS way of building a request.form like in Flask!
    fetch("http://localhost:5000/get_pokemon", { method: 'POST', body: form }) // Promise is generated with fetch.
        .then(res => res.json())                     // .then( ... ) is the next step after fetch is resolved and it succeeded. Convert response to JSON.
        .then(pokeData => {
            console.log(pokeData)
            showPokemon(pokeData)
        })
        .catch(err => console.log(err))

}

function showPokemon(pokeJSON) {
    let pokePinfo = document.getElementById('pokeInfo');
    pokePinfo.innerHTML += `
    <p> Name : ${pokeJSON.name} </p>
    <p> Normal Ver:</p> <img src='${pokeJSON.sprites.front_default}'> 
    <p> Shiny Ver: </p> <img src='${pokeJSON.sprites.front_shiny}'>
    `

}
let currentPokemon = [];
let allPokemon;
let allPokemonNames = [];
let allPokemonTypes = [];

async function init() {

    await loadAllPokemon();
    loadAllPokemonNames();
    showLoadingScreen();
    await loadPokemon();
    await loadAllPokemonTypes();
    endLoadingScreen();
}
async function loadAllPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0';
    let response = await fetch(url);
    allPokemon = await response.json();

    console.log('Loaded Pokemon', allPokemon);
}


function loadAllPokemonNames() {
    for (let i = 0; i < allPokemon['results'].length; i++) {
        allPokemonNames.push(allPokemon['results'][i]['name']);
    }
}

function loadAllPokemonTypes() {
    for (let i = 0; i < allPokemon['results'].length; i++) {
        allPokemonTypes.push(currentPokemon[i]['types']['0']['type']['name']);
        renderPokemonInfo(i);
    }
}

function openPokemonCard(i) {

    if (allPokemonTypes[i] == "grass") {
        document.getElementById('fullScreenCard').style.display = "flex";
        document.getElementById('fullScreenCard').innerHTML = `
        <div class="fullscreen_card_small" style="background-color: lightgreen"><img src="${currentPokemon[i]['sprites']['other']['official-artwork']['front_default']}" alt="">
                <div class="line"></div>
                    <div class="card_buttons">
                        <button type="button" class="btn btn-primary">Type</button>
                        <button type="button" class="btn btn-primary">Stats</button>
                        <button type="button" class="btn btn-primary">Start Abilitys</button>
                    </div>
                      <div class="show_types" id="showTypes">${currentPokemon[i]['types']['0']['type']['name']} ${currentPokemon[i]['types']['1']['type']['name']}</div>
            </div>
        `
    }

    if (allPokemonTypes[i] == "fire") {
        document.getElementById('fullScreenCard').style.display = "flex";
        document.getElementById('fullScreenCard').innerHTML = `
        <div class="fullscreen_card_small" style="background-color: #F3B34C"><img src="${currentPokemon[i]['sprites']['other']['official-artwork']['front_default']}" alt="">
                <div class="line"></div>
                    <div class="card_buttons">
                        <button type="button" class="btn btn-primary">Type</button>
                        <button type="button" class="btn btn-primary">Stats</button>
                        <button type="button" class="btn btn-primary">Start Abilitys</button>
                    </div>
                <div class="show_types" id="showTypes">${currentPokemon[i]['types']['0']['type']['name']} ${currentPokemon[i]['types']['1']['type']['name']}</div>
            </div>
        `
    }

    if (allPokemonTypes[i] == "water") {
        document.getElementById('fullScreenCard').style.display = "flex";
        document.getElementById('fullScreenCard').innerHTML = `
        <div class="fullscreen_card_small" style="background-color: lightblue"><img src="${currentPokemon[i]['sprites']['other']['official-artwork']['front_default']}" alt="">
                <div class="line"></div>
                    <div class="card_buttons">
                        <button type="button" class="btn btn-primary">Type</button>
                        <button type="button" class="btn btn-primary">Stats</button>
                        <button type="button" class="btn btn-primary">Start Abilitys</button>
                    </div>
                
                <div class="show_types" id="showTypes">${currentPokemon[i]['types']['0']['type']['name']} ${currentPokemon[i]['types']['1']['type']['name']}</div>
            </div>
        `
    }

    if (allPokemonTypes[i] == "bug") {
        document.getElementById('fullScreenCard').style.display = "flex";
        document.getElementById('fullScreenCard').innerHTML = `
        <div class="fullscreen_card_small" style="background-color: lightgreen"><img src="${currentPokemon[i]['sprites']['other']['official-artwork']['front_default']}" alt="">
                <div class="line"></div>
                    <div class="card_buttons">
                        <button type="button" class="btn btn-primary">Type</button>
                        <button type="button" class="btn btn-primary">Stats</button>
                        <button type="button" class="btn btn-primary">Start Abilitys</button>
                    </div>
                
                <div class="show_types" id="showTypes">${currentPokemon[i]['types']['0']['type']['name']} ${currentPokemon[i]['types']['1']['type']['name']}</div>
            </div>
        `
    }

    if (allPokemonTypes[i] == "normal") {
        document.getElementById('fullScreenCard').style.display = "flex";
        document.getElementById('fullScreenCard').innerHTML = `
        <div class="fullscreen_card_small" style="background-color: lightgray"><img src="${currentPokemon[i]['sprites']['other']['official-artwork']['front_default']}" alt="">
                <div class="line"></div>
                    <div class="card_buttons">
                        <button type="button" class="btn btn-primary">Type</button>
                        <button type="button" class="btn btn-primary">Stats</button>
                        <button type="button" class="btn btn-primary">Start Abilitys</button>
                    </div>
                
                <div class="show_types" id="showTypes">${currentPokemon[i]['types']['0']['type']['name']} ${currentPokemon[i]['types']['1']['type']['name']}</div>
            </div>
        `
    }


}

function closePokemonCard() {
    document.getElementById('fullScreenCard').style.display = "none";
}

async function loadPokemon() {
    for (let i = 0; i < allPokemonNames.length; i++) {
        let pokemon = allPokemonNames[i];

        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        let response = await fetch(url);
        currentPokemon[i] = await response.json();

        console.log('Loaded Pokemon', currentPokemon);


    }


}

function renderPokemonInfo(i) {
    if (allPokemonTypes[i] == "grass") {
        addGrassType(i);
    }

    if (allPokemonTypes[i] == "fire") {
        addFireType(i);
    }

    if (allPokemonTypes[i] == "water") {
        addWaterType(i);
    }

    if (allPokemonTypes[i] == "bug") {
        addBugType(i);
    }

    if (allPokemonTypes[i] == "normal") {
        addNormalType(i);
    }




    /*         document.getElementById('PokemonName').innerHTML += currentPokemon[i]['name'];
            document.getElementById('pokemon_img').src += currentPokemon[i]['sprites']['other']['official-artwork']['front_default']; */
}

function addGrassType(i) {
    document.getElementById('bodyMainCards').innerHTML += `
    <div onclick="openPokemonCard(${(i)})" class="main_card" id="main_card" style="background-color: lightgreen">
    <div class="pokemon_card" id="pokemonCard">
    <h2 id="PokemonName">${currentPokemon[i]['name']}</h2>
    <img class="pokemon_img" id="pokemon_img" src="${currentPokemon[i]['sprites']['other']['official-artwork']['front_default']}" alt=""> 
    </div>
    </div>
    `
}

function addFireType(i) {
    document.getElementById('bodyMainCards').innerHTML += `
    <div  onclick="openPokemonCard(${(i)})" class="main_card" id="main_card" style="background-color: #F3B34C">
    <div class="pokemon_card" id="pokemonCard">
    <h2 id="PokemonName">${currentPokemon[i]['name']}</h2>
    <img class="pokemon_img" id="pokemon_img" src="${currentPokemon[i]['sprites']['other']['official-artwork']['front_default']}" alt=""> 
    </div>
    </div>
    `
}

function addWaterType(i) {
    document.getElementById('bodyMainCards').innerHTML += `
    <div  onclick="openPokemonCard(${(i)})" class="main_card" id="main_card" style="background-color: lightblue">
    <div class="pokemon_card" id="pokemonCard">
    <h2 id="PokemonName">${currentPokemon[i]['name']}</h2>
    <img class="pokemon_img" id="pokemon_img" src="${currentPokemon[i]['sprites']['other']['official-artwork']['front_default']}" alt=""> 
    </div>
    </div>
    `
}

function addBugType(i) {
    document.getElementById('bodyMainCards').innerHTML += `
    <div  onclick="openPokemonCard(${(i)})" class="main_card" id="main_card" style="background-color: lightgreen">
    <div class="pokemon_card" id="pokemonCard">
    <h2 id="PokemonName">${currentPokemon[i]['name']}</h2>
    <img class="pokemon_img" id="pokemon_img" src="${currentPokemon[i]['sprites']['other']['official-artwork']['front_default']}" alt=""> 
    </div>
    </div>
    `
}

function addNormalType(i) {
    document.getElementById('bodyMainCards').innerHTML += `
    <div  onclick="openPokemonCard(${(i)})" class="main_card" id="main_card" style="background-color: gray">
    <div class="pokemon_card" id="pokemonCard">
    <h2 id="PokemonName">${currentPokemon[i]['name']}</h2>
    <img class="pokemon_img" id="pokemon_img" src="${currentPokemon[i]['sprites']['other']['official-artwork']['front_default']}" alt=""> 
    </div>
    </div>
    `
}

function showLoadingScreen() {
    document.getElementById('loading').style.display = "flex";
}

function endLoadingScreen() {
    document.getElementById('loading').style.display = "none";
}
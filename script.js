let currentPokemon = [];
let allPokemon;
let allPokemonNames = [];
let allPokemonTypes = [];
let backgroundColorCards = "";

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


function changePokemonCardBackground(i) {

    if (allPokemonTypes[i] == "grass") {
        backgroundColorCards = 'style="background-color: lightgreen"';
    }

    if (allPokemonTypes[i] == "fire") {
        backgroundColorCards = 'style="background-color: #F3B34C"';
    }
    if (allPokemonTypes[i] == "water") {
        backgroundColorCards = 'style="background-color: lightblue"';
    }
    if (allPokemonTypes[i] == "bug") {
        backgroundColorCards = 'style="background-color: lightgreen"';
    }

    if (allPokemonTypes[i] == "normal") {
        backgroundColorCards = 'style="background-color: lightgrey"';
    }
}

function openPokemonCard(i) {

    changePokemonCardBackground(i);

    if (currentPokemon[i]['types'].length > 1) {

        renderPokemoncardWithMultipleTypes(i)

    } else {
        renderPokemoncardWithOneType(i);
    }

}

function renderPokemoncardWithMultipleTypes(i) {
    document.getElementById('fullScreenCard').style.display = "flex";
    document.getElementById('fullScreenCard').innerHTML = `
    <div id="fullscreenCardSmall" class="fullscreen_card_small" ${backgroundColorCards}>
    <h2>${currentPokemon[i]['name']}</h2>
    <img src="${currentPokemon[i]['sprites']['other']['official-artwork']['front_default']}" alt="">
    <div class="line"></div>
    <div class="card_buttons">
        <button onclick="showType(event)" type="button" class="btn btn-primary">Type</button>
        <button onclick="showStats(event)" type="button" class="btn btn-primary">Stats</button>
        <button onclick="showAbilitys(event)" type="button" class="btn btn-primary">Start Abilitys</button>
    </div>

    <div id="typesection" class="types_section">
        <h2> Type/s: </h2>
        <div class="show_types" id="showTypes">

            <button type="button" class="btn btn-success">${currentPokemon[i]['types']['0']['type']['name']}</button>
            <button type="button" class="btn btn-success">${currentPokemon[i]['types']['1']['type']['name']}</button>
        </div>
    </div>
    <div id="abilitysection" class="abilitys_section">
        <h2> Abilities: </h2>
        <div class="show_abilitys" id="showTypes">
            <button type="button" class="btn btn-success">${currentPokemon[i]['abilities']['0']['ability']['name']}</button>
            <button type="button" class="btn btn-success">${currentPokemon[i]['abilities']['1']['ability']['name']}</button>
        </div>
    </div>

    <div id="statssection" class="stats_section">
        <h2> Stats: </h2>
        <div class="show_stats" id="showTypes">
            <button type="button" class="btn btn-success">Base Stat: ${currentPokemon[i]['stats']['0']['base_stat']}</button>
        </div>
    </div>

    </div>
    `

    showType(event);
}

function renderPokemoncardWithOneType(i) {
    document.getElementById('fullScreenCard').style.display = "flex";
    document.getElementById('fullScreenCard').innerHTML = `
    <div id="fullscreenCardSmall" class="fullscreen_card_small" ${backgroundColorCards}>
    <h2>${currentPokemon[i]['name']}</h2>
    <img src="${currentPokemon[i]['sprites']['other']['official-artwork']['front_default']}" alt="">
    <div class="line"></div>
    <div class="card_buttons">
        <button onclick="showType(event)" type="button" class="btn btn-primary">Type</button>
        <button onclick="showStats(event)" type="button" class="btn btn-primary">Stats</button>
        <button onclick="showAbilitys(event)" type="button" class="btn btn-primary">Start Abilitys</button>
    </div>

    <div id="typesection" class="types_section">
        <h2> Type/s: </h2>
        <div class="show_types" id="showTypes">
            <button type="button" class="btn btn-success">${currentPokemon[i]['types']['0']['type']['name']}</button>
        </div>
    </div>


    <div id="abilitysection" class="abilitys_section">
        <h2> Abilities: </h2>
        <div class="show_abilitys" id="showTypes">
        <button type="button" class="btn btn-success">${currentPokemon[i]['abilities']['0']['ability']['name']}</button>
        <button type="button" class="btn btn-success">${currentPokemon[i]['abilities']['1']['ability']['name']}</button>
        </div>
    </div>


    <div id="statssection" class="stats_section">
        <h2> Stats: </h2>
        <div class="show_stats" id="showTypes">
        <button type="button" class="btn btn-success">Base Stat: ${currentPokemon[i]['stats']['0']['base_stat']}</button>
        </div>
    </div>
  </div>
`

showType(event);

}

function showStats(event) {
    document.getElementById('statssection').style.display = "block";
    document.getElementById('typesection').style.display = "none";
    document.getElementById('abilitysection').style.display = "none";
    event.stopPropagation();
}

function showType(event) {
    document.getElementById('statssection').style.display = "none";
    document.getElementById('typesection').style.display = "block";
    document.getElementById('abilitysection').style.display = "none";
    event.stopPropagation();
}

function showAbilitys(event) {
    document.getElementById('statssection').style.display = "none";
    document.getElementById('typesection').style.display = "none";
    document.getElementById('abilitysection').style.display = "block";
    event.stopPropagation();
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
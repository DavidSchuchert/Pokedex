let currentPokemon = [];
let allPokemon;
let allPokemonNames = [];
let allPokemonTypes = [];
let backgroundColorCards = "";
let pokemonLoadAmmount = 20;
let typebgcolor1 = "";
let typebgcolor2 = "";

async function init() {

    await loadAllPokemon();
    loadAllPokemonNames();
    showLoadingScreen();
    await loadPokemon();
    await loadAllPokemonTypes();
    endLoadingScreen();
}
async function loadAllPokemon() {
    let url = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${pokemonLoadAmmount}`;
    let response = await fetch(url);
    allPokemon = await response.json();

    console.log('Loaded Pokemon', allPokemon);
    document.getElementById('bodyMainCards').innerHTML = '';
}
function loadMorePkmn() {
    pokemonLoadAmmount = pokemonLoadAmmount += 20;
    currentPokemon = [];
    allPokemon = [];
    allPokemonNames = [];
    allPokemonTypes = [];
    backgroundColorCards = "";
    init();
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
        backgroundColorCards = 'style="background-image: url(./img/field.webp);"';
    }

    if (allPokemonTypes[i] == "fire") {
        backgroundColorCards = 'style="background-image: url(./img/fire.jpg);"';
    }
    if (allPokemonTypes[i] == "water") {
        backgroundColorCards = 'style="background-image: url(./img/water.avif);"';
    }
    if (allPokemonTypes[i] == "bug") {
        backgroundColorCards = 'style="background-image: url(./img/bug.jpeg);"';
    }

    if (allPokemonTypes[i] == "normal") {
        backgroundColorCards = 'style="background-image: url(./img/normal.jpeg);"';
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

function createChart(i) {
    const ctx = document.getElementById('myChart');

    let hp = currentPokemon[i]['stats']['0']['base_stat'];
    let attack = currentPokemon[i]['stats']['1']['base_stat'];
    let defense = currentPokemon[i]['stats']['2']['base_stat'];
    let specialattack = currentPokemon[i]['stats']['3']['base_stat'];
    let specialdefense = currentPokemon[i]['stats']['4']['base_stat'];
    let speed = currentPokemon[i]['stats']['5']['base_stat'];





    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['hp', 'attack', 'defense', 'special-attack', 'special-defense', 'speed'],
            datasets: [{
                label: 'Base stats',
                data: [hp, attack, defense, specialattack, specialdefense, speed],
                backgroundColor: 'rgba(255, 0, 0, 0.52)', // Hintergrundfarbe des Charts
                borderColor: 'rgba(101, 15, 181, 0.3)', // Farbe der Linie
                borderWidth: 0.5, // Dicke der Linie
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                r: {
                    angleLines: {
                        display: false
                    },
                    suggestedMin: 1,
                    pointLabels: {
                        font: {
                            size: 10,
                            weight: 700
                        }
                    },
                    ticks: {
                        display: false
                    }
                }
            }
        }
    });
}
function createColoredTypeButton(i){


if (currentPokemon[i]['types']['0']['type']['name'] == 'grass'){
    typebgcolor1 = "green !important";
}
if (currentPokemon[i]['types']['0']['type']['name'] == 'fire'){
    typebgcolor1 = "red !important";
}
if (currentPokemon[i]['types']['0']['type']['name'] == 'water'){
    typebgcolor1 = "blue !important";
}
if (currentPokemon[i]['types']['0']['type']['name'] == 'normal'){
    typebgcolor1 = "grey !important";
}
if (currentPokemon[i]['types']['0']['type']['name'] == 'bug'){
    typebgcolor1 = "lightgreen !important";
}
if (currentPokemon[i]['types']['0']['type']['name'] == 'flying'){
    typebgcolor1 = "lightblue !important";
}
if (currentPokemon[i]['types']['0']['type']['name'] == 'poison'){
    typebgcolor1 = "#C8A2C8 !important";
}
if (currentPokemon[i]['types']['1']['type']['name'] == 'grass'){
    typebgcolor2 = "green !important";
}
if (currentPokemon[i]['types']['1']['type']['name'] == 'fire'){
    typebgcolor2 = "red !important";
}
if (currentPokemon[i]['types']['1']['type']['name'] == 'water'){
    typebgcolor2 = "blue !important";
}
if (currentPokemon[i]['types']['1']['type']['name'] == 'normal'){
    typebgcolor2 = "grey !important";
}
if (currentPokemon[i]['types']['1']['type']['name'] == 'bug'){
    typebgcolor2 = "lightgreen !important";
}
if (currentPokemon[i]['types']['1']['type']['name'] == 'flying'){
    typebgcolor2 = "lightblue !important";
}
if (currentPokemon[i]['types']['1']['type']['name'] == 'poison'){
    typebgcolor2 = "#C8A2C8 !important";
}

}
function createColoredTypeButtonsimple(i){


    if (currentPokemon[i]['types']['0']['type']['name'] == 'grass'){
        typebgcolor1 = "green !important";
    }
    if (currentPokemon[i]['types']['0']['type']['name'] == 'fire'){
        typebgcolor1 = "red !important";
    }
    if (currentPokemon[i]['types']['0']['type']['name'] == 'water'){
        typebgcolor1 = "blue !important";
    }
    if (currentPokemon[i]['types']['0']['type']['name'] == 'normal'){
        typebgcolor1 = "grey !important";
    }
    if (currentPokemon[i]['types']['0']['type']['name'] == 'bug'){
        typebgcolor1 = "lightgreen !important";
    }
    if (currentPokemon[i]['types']['0']['type']['name'] == 'flying'){
        typebgcolor1 = "lightblue !important";
    }
    if (currentPokemon[i]['types']['0']['type']['name'] == 'poison'){
        typebgcolor1 = "#C8A2C8 !important";
    }
    
    }
function renderPokemoncardWithMultipleTypes(i) {
createColoredTypeButton(i);

    document.getElementById('fullScreenCard').style.display = "flex";
    document.getElementById('fullScreenCard').innerHTML = `
    <div id="fullscreenCardSmall" class="fullscreen_card_small" ${backgroundColorCards}>
    <div class="pkmnNameAndImg"> <h2>${currentPokemon[i]['name']}</h2>
    <img src="${currentPokemon[i]['sprites']['other']['official-artwork']['front_default']}" alt=""></div>
    <div class="line"></div>
    <div class="pkmninfo">
    <div id="typesection" class="types_section">
        <div class="show_types" id="showTypes">

            Types: <p><span class="badge bg-secondary" style="background-color:${typebgcolor1}">${currentPokemon[i]['types']['0']['type']['name']}</span> & <span class="badge bg-secondary" style="background-color:${typebgcolor2}"> ${currentPokemon[i]['types']['1']['type']['name']}</span></p>
        </div>
    </div>
    <div id="abilitysection" class="abilitys_section">
        <div class="show_abilitys" id="showTypes">
            Start Abilities: <p>${currentPokemon[i]['abilities']['0']['ability']['name']} & ${currentPokemon[i]['abilities']['1']['ability']['name']}</p>
        </div>
    </div>

    <div id="statssection" class="stats_section">
        <div class="show_stats" id="showTypes">
Base Stats:
        <canvas id="myChart"></canvas>
        </div>
    </div>
</div>
    </div>
    `
    createChart(i);
}

function renderPokemoncardWithOneType(i) {
    createColoredTypeButtonsimple(i);
    document.getElementById('fullScreenCard').style.display = "flex";
    document.getElementById('fullScreenCard').innerHTML = `
    <div id="fullscreenCardSmall" class="fullscreen_card_small" ${backgroundColorCards}>
    <div class="pkmnNameAndImg"> <h2>${currentPokemon[i]['name']}</h2>
    <img src="${currentPokemon[i]['sprites']['other']['official-artwork']['front_default']}" alt=""></div>
    <div class="line"></div>
    <div class="pkmninfo">
    <div id="typesection" class="types_section">
        <div class="show_types" id="showTypes">

            Types: <p><span class="badge bg-secondary" style="background-color:${typebgcolor1}">${currentPokemon[i]['types']['0']['type']['name']}</span></p>
        </div>
    </div>
    <div id="abilitysection" class="abilitys_section">
        <div class="show_abilitys" id="showTypes">
            Start Abilities: <p>${currentPokemon[i]['abilities']['0']['ability']['name']} & ${currentPokemon[i]['abilities']['1']['ability']['name']}</p>
        </div>
    </div>

    <div id="statssection" class="stats_section">
        <div class="show_stats" id="showTypes">
Base Stats:
        <canvas id="myChart"></canvas>
        </div>
    </div>
</div>
    </div>
    `
    createChart(i);
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
    <div onclick="openPokemonCard(${(i)})" class="main_card" id="main_card" style="background-color: #4cc94c">
    <div class="pokemon_card" id="pokemonCard">
    <h2 id="PokemonName"> #${[i + 1]}  ${currentPokemon[i]['name']}</h2>
    <img class="pokemon_img" id="pokemon_img" src="${currentPokemon[i]['sprites']['other']['official-artwork']['front_default']}" alt=""> 
    </div>
    </div>
    `
}

function addFireType(i) {
    document.getElementById('bodyMainCards').innerHTML += `
    <div  onclick="openPokemonCard(${(i)})" class="main_card" id="main_card" style="background-color: #F3B34C">
    <div class="pokemon_card" id="pokemonCard">
    <h2 id="PokemonName"> #${[i + 1]}  ${currentPokemon[i]['name']}</h2>
    <img class="pokemon_img" id="pokemon_img" src="${currentPokemon[i]['sprites']['other']['official-artwork']['front_default']}" alt=""> 
    </div>
    </div>
    `
}

function addWaterType(i) {
    document.getElementById('bodyMainCards').innerHTML += `
    <div  onclick="openPokemonCard(${(i)})" class="main_card" id="main_card" style="background-color: lightblue">
    <div class="pokemon_card" id="pokemonCard">
    <h2 id="PokemonName"> #${[i + 1]}  ${currentPokemon[i]['name']}</h2>
    <img class="pokemon_img" id="pokemon_img" src="${currentPokemon[i]['sprites']['other']['official-artwork']['front_default']}" alt=""> 
    </div>
    </div>
    `
}

function addBugType(i) {
    document.getElementById('bodyMainCards').innerHTML += `
    <div  onclick="openPokemonCard(${(i)})" class="main_card" id="main_card" style="background-color: lightgreen">
    <div class="pokemon_card" id="pokemonCard">
    <h2 id="PokemonName"> #${[i + 1]}  ${currentPokemon[i]['name']}</h2>
    <img class="pokemon_img" id="pokemon_img" src="${currentPokemon[i]['sprites']['other']['official-artwork']['front_default']}" alt=""> 
    </div>
    </div>
    `
}

function addNormalType(i) {
    document.getElementById('bodyMainCards').innerHTML += `
    <div  onclick="openPokemonCard(${(i)})" class="main_card" id="main_card" style="background-color: gray">
    <div class="pokemon_card" id="pokemonCard">
    <h2 id="PokemonName"> #${[i + 1]}  ${currentPokemon[i]['name']}</h2>
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



let hovering = false;

function startHoverEffect() {
    if (!hovering) {
        const card = document.querySelector('.main_card');
        card.style.transform = 'perspective(400px) rotateY(365deg) scale(1.09)';
        card.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.7)';
        hovering = true;
    }
}

function endHoverEffect() {
    if (hovering) {
        const card = document.querySelector('.main_card');
        card.style.transform = '';
        card.style.boxShadow = '';
        hovering = false;
    }
}
let pokemonArr = [];
const extraData = new Map();

extraData.set("bulbasaur", {rarity: 4, minTime: 2.9})
.set("ivysaur", {rarity: 3, minTime: 2.8})
.set("venusaur", {rarity: 1, minTime: 2.5})
.set("charmander", {rarity: 4, minTime: 2.9})
.set("charmeleon", {rarity: 3, minTime: 2.8})
.set("charizard", {rarity: 1, minTime: 2.5})
.set("squirtle", {rarity: 4, minTime: 2.9})
.set("wartortle", {rarity: 3, minTime: 2.8})
.set("blastoise", {rarity: 1, minTime: 2.5})
.set("caterpie", {rarity: 75, minTime: 12})
.set("metapod", {rarity: 40, minTime: 9})
.set("butterfree", {rarity: 30, minTime: 6})
.set("weedle", {rarity: 75, minTime: 12})
.set("kakuna", {rarity: 40, minTime: 9})
.set("beedrill", {rarity: 30, minTime: 6})
.set("pidgey", {rarity: 75, minTime: 12})
.set("pidgeotto", {rarity: 30, minTime: 6})
.set("pidgeot", {rarity: 10, minTime: 3.5})
.set("rattata", {rarity: 75, minTime: 12})
.set("raticate", {rarity: 30, minTime: 6})
.set("spearow", {rarity: 40, minTime: 9})
.set("fearow", {rarity: 20, minTime: 4})
.set("ekans", {rarity: 40, minTime: 9})
.set("arbok", {rarity: 20, minTime: 4})
.set("pikachu", {rarity: 15, minTime: 3.5})
.set("raichu", {rarity: 5, minTime: 3.0})
.set("sandshrew", {rarity: 40, minTime: 9})
.set("sandslash", {rarity: 10, minTime: 3.5})
.set("nidoran-f", {rarity: 35, minTime: 6})
.set("nidorina", {rarity: 25, minTime: 4 })
.set("nidoqueen", {rarity: 5, minTime: 3.0})
.set("nidoran-m", {rarity: 35, minTime: 6})
.set("nidorino", {rarity: 25, minTime: 4})
.set("nidoking", {rarity: 5, minTime: 3.0})
.set("clefairy", {rarity: 35, minTime: 6})
.set("clefable", {rarity: 25, minTime: 4})
.set("vulpix", {rarity: 15, minTime: 3.5})
.set("ninetales", {rarity: 3, minTime: 2.8})
.set("jigglypuff", {rarity: 40, minTime: 9})
.set("wigglytuff", {rarity: 25, minTime: 4})
.set("zubat", {rarity: 80, minTime: 15})
.set("golbat", {rarity: 40, minTime: 9})
.set("oddish", {rarity: 40, minTime: 9})
.set("gloom", {rarity: 30, minTime: 6})
.set("vileplume", {rarity: 5, minTime: 3.0})
.set("paras", {rarity: 30, minTime: 6})
.set("parasect", {rarity: 20, minTime: 4})
.set("venonat", {rarity: 30, minTime: 6})
.set("venomoth", {rarity: 20, minTime: 4})
.set("diglett", {rarity: 40, minTime: 9})
.set("dugtrio", {rarity: 25, minTime: 4})
.set("meowth", {rarity: 40, minTime: 9})
.set("persian", {rarity: 30, minTime: 6})
.set("psyduck", {rarity: 30, minTime: 6})
.set("golduck", {rarity: 15, minTime: 3.5})
.set("mankey", {rarity: 30, minTime: 6})
.set("primeape", {rarity: 15, minTime: 3.5})
.set("growlithe", {rarity: 15, minTime: 3.5})
.set("arcanine", {rarity: 2, minTime: 2.7})
.set("poliwag", {rarity: 35, minTime: 6})
.set("poliwhirl", {rarity: 25, minTime: 4})
.set("poliwrath", {rarity: 4, minTime: 2.9})
.set("abra", {rarity: 30, minTime: 6})
.set("kadabra", {rarity: 20, minTime: 4})
.set("alakazam", {rarity: 4, minTime: 2.9})
.set("machop", {rarity: 30, minTime: 6})
.set("machoke", {rarity: 20, minTime: 4})
.set("machamp", {rarity: 4, minTime: 2.9})
.set("bellsprout", {rarity: 35, minTime: 6})
.set("weepinbell", {rarity: 25, minTime: 4})
.set("victreebel", {rarity: 5, minTime: 3.0})
.set("tentacool", {rarity: 35, minTime: 6})
.set("tentacruel", {rarity: 7, minTime: 3.2})
.set("geodude", {rarity: 40, minTime: 9})
.set("graveler", {rarity: 25, minTime: 4})
.set("golem", {rarity: 6, minTime: 3.1})
.set("ponyta", {rarity: 15, minTime: 3.5})
.set("rapidash", {rarity: 5, minTime: 3.0})
.set("slowpoke", {rarity: 30, minTime: 6})
.set("slowbro", {rarity: 8, minTime: 3.3})
.set("magnemite", {rarity: 30, minTime: 6})
.set("magneton", {rarity: 8, minTime: 3.3})
.set("farfetchd", {rarity: 15, minTime: 3.5})
.set("doduo", {rarity: 35, minTime: 6})
.set("dodrio", {rarity: 10, minTime: 3.5})
.set("seel", {rarity: 25, minTime: 4})
.set("dewgong", {rarity: 8, minTime: 3.3})
.set("grimer", {rarity: 35, minTime: 6})
.set("muk", {rarity: 8, minTime: 3.3})
.set("shellder", {rarity: 25, minTime: 4})
.set("cloyster", {rarity: 9, minTime: 3.3})
.set("gastly", {rarity: 20, minTime: 4})
.set("haunter", {rarity: 10, minTime: 3.5})
.set("gengar", {rarity: 2, minTime: 2.7})
.set("onix", {rarity: 10, minTime: 3.5})
.set("drowzee", {rarity: 30, minTime: 6})
.set("hypno", {rarity: 10, minTime: 3.5})
.set("krabby", {rarity: 25, minTime: 4})
.set("kingler", {rarity: 9, minTime: 3.3})
.set("voltorb", {rarity: 20, minTime: 4})
.set("electrode", {rarity: 9, minTime: 3.3})
.set("exeggcute", {rarity: 18, minTime: 3.5})
.set("exeggutor", {rarity: 3, minTime: 2.8})
.set("cubone", {rarity: 35, minTime: 6})
.set("marowak", {rarity: 9, minTime: 3.3})
.set("hitmonlee", {rarity: 6, minTime: 3.1})
.set("hitmonchan", {rarity: 6, minTime: 3.1})
.set("lickitung", {rarity: 8, minTime: 3.3})
.set("koffing", {rarity: 25, minTime: 4})
.set("weezing", {rarity: 7, minTime: 3.2})
.set("rhyhorn", {rarity: 20, minTime: 4})
.set("rhydon", {rarity: 6, minTime: 3.1})
.set("chansey", {rarity: 2, minTime: 2.7})
.set("tangela", {rarity: 9, minTime: 3.3})
.set("kangaskhan", {rarity: 4, minTime: 2.9})
.set("horsea", {rarity: 17, minTime: 3.5})
.set("seadra", {rarity: 8, minTime: 3.3})
.set("goldeen", {rarity: 35, minTime: 6})
.set("seaking", {rarity: 10, minTime: 3.5})
.set("staryu", {rarity: 15, minTime: 3.5})
.set("starmie", {rarity: 3, minTime: 2.8})
.set("mr-mime", {rarity: 8, minTime: 3.3})
.set("scyther", {rarity: 5, minTime: 3.0})
.set("jynx", {rarity: 5, minTime: 3.0})
.set("electabuzz", {rarity: 5, minTime: 3.0})
.set("magmar", {rarity: 5, minTime: 3.0})
.set("pinsir", {rarity: 4, minTime: 2.9})
.set("tauros", {rarity: 4, minTime: 2.9})
.set("magikarp", {rarity: 80, minTime: 15})
.set("gyarados", {rarity: 2, minTime: 2.7})
.set("lapras", {rarity: 2, minTime: 2.7})
.set("ditto", {rarity: 10, minTime: 3.5})
.set("eevee", {rarity: 3, minTime: 2.8})
.set("vaporeon", {rarity: 1, minTime: 2.5})
.set("jolteon", {rarity: 1, minTime: 2.5})
.set("flareon", {rarity: 1, minTime: 2.5})
.set("porygon", {rarity: 7, minTime: 3.2})
.set("omanyte", {rarity: 7, minTime: 3.2})
.set("omastar", {rarity: 4, minTime: 2.9})
.set("kabuto", {rarity: 7, minTime: 3.2})
.set("kabutops", {rarity: 4, minTime: 2.9})
.set("aerodactyl", {rarity: 2, minTime: 2.7})
.set("snorlax", {rarity: 1, minTime: 2.5})
.set("articuno", {rarity: 1, minTime: 2.4})
.set("zapdos", {rarity: 1, minTime: 2.4})
.set("moltres", {rarity: 1, minTime: 2.4})
.set("dratini", {rarity: 7, minTime: 3.2})
.set("dragonair", {rarity: 5, minTime: 3.0})
.set("dragonite", {rarity: 1, minTime: 2.5})
.set("mewtwo", {rarity: 1, minTime: 2.4})
.set("mew", {rarity: 1, minTime: 2.4});

const fetchPokemon = () => {
  let promises = [];
  for (let i = 1; i <= 151; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then((res) => res.json()));
    }  

  Promise.all(promises).then((results) => {
     pokemonArr = results.map((data) => ({
      name: data.name,
      src: data.sprites.versions["generation-v"]["black-white"].front_default,
      id: data.id
    }));
    console.log(pokemonArr);
    // renderImg(pokemonArr);
    displayPokedex(pokemonArr);
    displayBoughtPokemon();
    changeToolTipColour();
    // makeNamePokemonColors();
  });  
}

fetchPokemon();

const capitalizeName = function(obj) {
  let result = obj.name.charAt(0).toUpperCase() + obj.name.slice(1);
  return result;  
}

const createDiv = function(obj) {
  let div = document.createElement("div");
  div.classList.add("grid-item");
  div.id = obj.name;
  document.getElementById("grid").appendChild(div)
}

const createToolTip = function(obj) {
  let div = document.createElement("div");
  div.innerHTML = `<span name=${obj.name + obj.id}>${capitalizeName(obj)}</span> <p class="tool-tip-rarity">Rarity: ${extraData.get(obj.name).rarity}</p> <p class="tool-tip-time">Time: ${extraData.get(obj.name).minTime}s</p>`;
  div.classList.add("tool-tip-text");
  document.getElementById(obj.name).appendChild(div);
}

const changeToolTipColour = function() {
  let spansArr = document.querySelectorAll("span");
  console.log(spansArr[0].attributes[0].value);
  spansArr.forEach(span => {
    if (localStorage.getItem(span.attributes[0].value)) {
      span.classList.add("purple-tool-tip-name");
    }
  })
}

const createImg = function(obj) {
  let img = document.createElement("img");
  img.src = obj.src;
  img.classList.add("missing-pokemon", "pokedex-image");
  img.setAttribute("name", obj.name + obj.id);
  document.getElementById(obj.name).appendChild(img);  
}

const createNameText = function(obj) {
  let pTag = document.createElement("p");
  let pokemonName = document.createTextNode(obj.name);
  pTag.appendChild(pokemonName);
  pTag.classList.add("name-text");
  pTag.setAttribute("name", obj.name + obj.id);
  pTag.innerHTML = capitalizeName(obj);
  document.getElementById(obj.name).appendChild(pTag);
}

const createNumberText = function(obj) {
  let pTag = document.createElement("p");
  let pokemonNumber = document.createTextNode("#" + obj.id);
  pTag.classList.add("dex-number");
  pTag.appendChild(pokemonNumber);
  document.getElementById(obj.name).appendChild(pTag);
}

const displayPokedex = function(arr) {
  arr.forEach(pokemon => {
    createDiv(pokemon);
    createToolTip(pokemon);
    createImg(pokemon);
    createNameText(pokemon);
    createNumberText(pokemon);
  });
}

const displayBoughtPokemon = function() {
  let galleryPokemon = document.querySelectorAll(".pokedex-image");
  console.log(galleryPokemon);
  galleryPokemon.forEach(pokemon => {
    let pokemonName = pokemon.name;
    console.log(pokemonName);
    if (localStorage.getItem(pokemon.name)) {
      pokemon.src = localStorage.getItem(pokemon.name);
      pokemon.classList.remove("missing-pokemon");
    }
  })
}

// const makeNamePokemonColors = function() {
//   let namesArr = document.querySelectorAll(".name-text");
//   console.log(namesArr);
//   console.log(namesArr[0].attributes[1]);
//   namesArr.forEach(pokeName => {
//     if (localStorage.getItem(pokeName.attributes[1].value)) {
//       pokeName.classList.add("purchased-pokemon");
//     }
//   })
// }
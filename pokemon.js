let pokemonArr = []; 
const numberFormatter = Intl.NumberFormat('en-US');
const extraData = new Map();

TODO: // reconfigure the if statement section that checks rarity and time, can put time value required in extra data

extraData.set("bulbasaur", {rarity: 4, minTime: 2.9, minPrice: 13000, maxPrice: 16000, price: randomRange(13000, 16000)})
.set("ivysaur", {rarity: 3, minTime: 2.5, minPrice: 16000, maxPrice: 20000, price: randomRange(16000, 20000)})
.set("venusaur", {rarity: 1, minTime: 2.1, minPrice: 45000, maxPrice: 60000, price: randomRange(45000, 60000)})
.set("charmander", {rarity: 4, minTime: 2.9, minPrice: 13000, maxPrice: 16000, price: randomRange(13000, 16000)})
.set("charmeleon", {rarity: 3, minTime: 2.5, minPrice: 16000, maxPrice: 20000, price: randomRange(16000, 20000)})
.set("charizard", {rarity: 1, minTime: 2.1, minPrice: 45000, maxPrice: 60000, price: randomRange(45000, 60000)})
.set("squirtle", {rarity: 4, minTime: 2.9, minPrice: 13000, maxPrice: 16000, price: randomRange(13000, 16000)})
.set("wartortle", {rarity: 3, minTime: 2.5, minPrice: 16000, maxPrice: 20000, price: randomRange(16000, 20000)})
.set("blastoise", {rarity: 1, minTime: 2.1, minPrice: 45000, maxPrice: 60000, price: randomRange(45000, 60000)})
.set("caterpie", {rarity: 50, minTime: 12, minPrice: 2000, maxPrice: 3200, price: randomRange(2000, 3200)})
.set("metapod", {rarity: 40, minTime: 9, minPrice: 4000, maxPrice: 5500, price: randomRange(4000, 5500)})
.set("butterfree", {rarity: 30, minTime: 6, minPrice: 6000, maxPrice: 8500, price: randomRange(6000, 8500)})
.set("weedle", {rarity: 50, minTime: 12, minPrice: 2000, maxPrice: 3200, price: randomRange(2000, 3200)})
.set("kakuna", {rarity: 40, minTime: 9, minPrice: 4000, maxPrice: 5500, price: randomRange(4000, 5500)})
.set("beedrill", {rarity: 30, minTime: 6, minPrice: 6000, maxPrice: 8500, price: randomRange(6000, 8500)})
.set("pidgey", {rarity: 50, minTime: 12, minPrice: 2000, maxPrice: 3200, price: randomRange(2000, 3200)})
.set("pidgeotto", {rarity: 30, minTime: 6, minPrice: 5000, maxPrice: 7000, price: randomRange(5000, 7000)})
.set("pidgeot", {rarity: 10, minTime: 3.5, minPrice: 8000, maxPrice: 11000, price: randomRange(8000, 11000)})
.set("rattata", {rarity: 50, minTime: 12, minPrice: 2000, maxPrice: 3200, price: randomRange(2000, 3200)})
.set("raticate", {rarity: 30, minTime: 6, minPrice: 4000, maxPrice: 6500, price: randomRange(4000, 6500)})
.set("spearow", {rarity: 40, minTime: 9, minPrice: 3300, maxPrice: 4800, price: randomRange(3300, 4800)})
.set("fearow", {rarity: 20, minTime: 4, minPrice: 6800, maxPrice: 8800, price: randomRange(6800, 8800)})
.set("ekans", {rarity: 40, minTime: 9, minPrice: 3300, maxPrice: 4800, price: randomRange(3300, 4800)})
.set("arbok", {rarity: 20, minTime: 4, minPrice: 6800, maxPrice: 8800, price: randomRange(6800, 8800)})
.set("pikachu", {rarity: 15, minTime: 3.5, minPrice: 9000, maxPrice: 12500, price: randomRange(9000, 12500)})
.set("raichu", {rarity: 6, minTime: 3.1, minPrice: 13000, maxPrice: 15000, price: randomRange(13000, 15000)})
.set("sandshrew", {rarity: 40, minTime: 9, minPrice: 3400, maxPrice: 4700, price: randomRange(3400, 4700)})
.set("sandslash", {rarity: 10, minTime: 3.5, minPrice: 6800, maxPrice: 8800, price: randomRange(6800, 8800)})
.set("nidoran-f", {rarity: 35, minTime: 6, minPrice: 3000, maxPrice: 4400, price: randomRange(3000, 4400)})
.set("nidorina", {rarity: 25, minTime: 4, minPrice: 5000, maxPrice: 7700, price: randomRange(5000, 7700)})
.set("nidoqueen", {rarity: 6, minTime: 3.1, minPrice: 9500, maxPrice: 13600, price: randomRange(9500, 13000)})
.set("nidoran-m", {rarity: 35, minTime: 6, minPrice: 3000, maxPrice: 4400, price: randomRange(3000, 4400)})
.set("nidorino", {rarity: 25, minTime: 4, minPrice: 5000, maxPrice: 7700, price: randomRange(5000, 7700)})
.set("nidoking", {rarity: 6, minTime: 3.1, minPrice: 9500, maxPrice: 13600, price: randomRange(9500, 13600)})
.set("clefairy", {rarity: 35, minTime: 6, minPrice: 3000, maxPrice: 5300, price: randomRange(3000, 5300)})
.set("clefable", {rarity: 25, minTime: 4, minPrice: 8400, maxPrice: 11000, price: randomRange(8400, 11000)})
.set("vulpix", {rarity: 15, minTime: 3.5, minPrice: 8000, maxPrice: 11900, price: randomRange(8000, 11900)})
.set("ninetales", {rarity: 3, minTime: 2.5, minPrice: 25000, maxPrice: 28500, price: randomRange(25000, 28500)})
.set("jigglypuff", {rarity: 40, minTime: 9, minPrice: 3000, maxPrice: 5300, price: randomRange(3000, 5300)})
.set("wigglytuff", {rarity: 25, minTime: 4, minPrice: 8400, maxPrice: 11000, price: randomRange(8400, 11000)})
.set("zubat", {rarity: 60, minTime: 15, minPrice: 1000, maxPrice: 1600, price: randomRange(1000, 1600)})
.set("golbat", {rarity: 40, minTime: 9, minPrice: 5000, maxPrice: 6000, price: randomRange(5000, 6000)})
.set("oddish", {rarity: 40, minTime: 9, minPrice: 3800, maxPrice: 4600, price: randomRange(3800, 4600)})
.set("gloom", {rarity: 30, minTime: 6, minPrice: 5800, maxPrice: 7300, price: randomRange(5800, 7300)})
.set("vileplume", {rarity: 5, minTime: 2.9, minPrice: 9800, maxPrice: 12400, price: randomRange(9800, 12400)})
.set("paras", {rarity: 30, minTime: 6, minPrice: 2400, maxPrice: 3100, price: randomRange(2400, 3100)})
.set("parasect", {rarity: 20, minTime: 4, minPrice: 5800, maxPrice: 8000, price: randomRange(5800, 8000)})
.set("venonat", {rarity: 30, minTime: 6, minPrice: 2800, maxPrice: 3400, price: randomRange(2800, 3400)})
.set("venomoth", {rarity: 20, minTime: 4, minPrice: 7400, maxPrice: 9600, price: randomRange(7400, 9600)})
.set("diglett", {rarity: 40, minTime: 9, minPrice: 2800, maxPrice: 3500, price: randomRange(2800, 3500)})
.set("dugtrio", {rarity: 25, minTime: 4, minPrice: 7000, maxPrice: 9000, price: randomRange(7000, 9000)})
.set("meowth", {rarity: 40, minTime: 9, minPrice: 3800, maxPrice: 4800, price: randomRange(3800, 4800)})
.set("persian", {rarity: 30, minTime: 6, minPrice: 6800, maxPrice: 8500, price: randomRange(6800, 8500)})
.set("psyduck", {rarity: 30, minTime: 6, minPrice: 4800, maxPrice: 5700, price: randomRange(4800, 5700)})
.set("golduck", {rarity: 15, minTime: 3.5, minPrice: 7000, maxPrice: 10400, price: randomRange(7000, 10400)})
.set("mankey", {rarity: 30, minTime: 6, minPrice: 4000, maxPrice: 5900, price: randomRange(4000, 5900)})
.set("primeape", {rarity: 15, minTime: 3.5, minPrice: 8500, maxPrice: 12500, price: randomRange(8500, 12500)})
.set("growlithe", {rarity: 15, minTime: 3.5, minPrice: 8000, maxPrice: 11900, price: randomRange(8000, 11900)})
.set("arcanine", {rarity: 2, minTime: 2.5, minPrice: 30000, maxPrice: 40000, price: randomRange(30000, 40000)})
.set("poliwag", {rarity: 35, minTime: 6, minPrice: 3500, maxPrice: 4400, price: randomRange(3500, 4400)})
.set("poliwhirl", {rarity: 25, minTime: 4, minPrice: 5000, maxPrice: 6900, price: randomRange(5000, 6900)})
.set("poliwrath", {rarity: 6, minTime: 3.1, minPrice: 9900, maxPrice: 13300, price: randomRange(9900, 13300)})
.set("abra", {rarity: 30, minTime: 6, minPrice: 4800, maxPrice: 5800, price: randomRange(4800, 5800)})
.set("kadabra", {rarity: 20, minTime: 4, minPrice: 6000, maxPrice: 8000, price: randomRange(6000, 8000)})
.set("alakazam", {rarity: 4, minTime: 2.9, minPrice: 14000, maxPrice: 17700, price: randomRange(14000, 17700)})
.set("machop", {rarity: 30, minTime: 6, minPrice: 4000, maxPrice: 4600, price: randomRange(4000, 4600)})
.set("machoke", {rarity: 20, minTime: 4, minPrice: 6500, maxPrice: 9000, price: randomRange(6500, 9000)})
.set("machamp", {rarity: 4, minTime: 2.9, minPrice: 11800, maxPrice: 16600, price: randomRange(11800, 16600)})
.set("bellsprout", {rarity: 35, minTime: 6, minPrice: 2800, maxPrice: 3500, price: randomRange(2800, 3500)})
.set("weepinbell", {rarity: 25, minTime: 4, minPrice: 4900, maxPrice: 6000, price: randomRange(4900, 6000)})
.set("victreebel", {rarity: 5, minTime: 2.9, minPrice: 9400, maxPrice: 13400, price: randomRange(9400, 13400)})
.set("tentacool", {rarity: 35, minTime: 6, minPrice: 3300, maxPrice: 5000, price: randomRange(3300, 5000)})
.set("tentacruel", {rarity: 7, minTime: 3.1, minPrice: 8800, maxPrice: 12400, price: randomRange(8800, 12400)})
.set("geodude", {rarity: 40, minTime: 9, minPrice: 3100, maxPrice: 4100, price: randomRange(3100, 4100)})
.set("graveler", {rarity: 25, minTime: 4, minPrice: 5400, maxPrice: 7000, price: randomRange(5400, 7000)})
.set("golem", {rarity: 7, minTime: 3.1, minPrice: 8900, maxPrice: 13000, price: randomRange(8900, 13000)})
.set("ponyta", {rarity: 15, minTime: 3.5, minPrice: 7800, maxPrice: 10800, price: randomRange(7800, 10800)})
.set("rapidash", {rarity: 5, minTime: 2.9, minPrice: 11800, maxPrice: 14600, price: randomRange(11800, 14600)})
.set("slowpoke", {rarity: 30, minTime: 6, minPrice: 4800, maxPrice: 5700, price: randomRange(4800, 5700)})
.set("slowbro", {rarity: 8, minTime: 3.3, minPrice: 10000, maxPrice: 12900, price: randomRange(10000, 12900)})
.set("magnemite", {rarity: 30, minTime: 6, minPrice: 3800, maxPrice: 4300, price: randomRange(3800, 4300)})
.set("magneton", {rarity: 8, minTime: 3.3, minPrice: 8500, maxPrice: 10100, price: randomRange(8500, 10100)})
.set("farfetchd", {rarity: 15, minTime: 3.5, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("doduo", {rarity: 35, minTime: 6, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("dodrio", {rarity: 10, minTime: 3.5, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("seel", {rarity: 25, minTime: 4, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("dewgong", {rarity: 8, minTime: 3.3, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("grimer", {rarity: 35, minTime: 6, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("muk", {rarity: 8, minTime: 3.3, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("shellder", {rarity: 25, minTime: 4, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("cloyster", {rarity: 9, minTime: 3.3, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("gastly", {rarity: 20, minTime: 4, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("haunter", {rarity: 10, minTime: 3.5, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("gengar", {rarity: 2, minTime: 2.5, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("onix", {rarity: 10, minTime: 3.5, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("drowzee", {rarity: 30, minTime: 6, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("hypno", {rarity: 10, minTime: 3.5, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("krabby", {rarity: 25, minTime: 4, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("kingler", {rarity: 9, minTime: 3.3, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("voltorb", {rarity: 20, minTime: 4, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("electrode", {rarity: 9, minTime: 3.3, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("exeggcute", {rarity: 18, minTime: 3.5, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("exeggutor", {rarity: 3, minTime: 2.5, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("cubone", {rarity: 35, minTime: 6, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("marowak", {rarity: 9, minTime: 3.3, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("hitmonlee", {rarity: 7, minTime: 3.1, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("hitmonchan", {rarity: 7, minTime: 3.1, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("lickitung", {rarity: 8, minTime: 3.3, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("koffing", {rarity: 25, minTime: 4, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("weezing", {rarity: 7, minTime: 3.1, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("rhyhorn", {rarity: 20, minTime: 4, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("rhydon", {rarity: 7, minTime: 3.1, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("chansey", {rarity: 2, minTime: 2.5, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("tangela", {rarity: 9, minTime: 3.3, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("kangaskhan", {rarity: 4, minTime: 2.9, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("horsea", {rarity: 17, minTime: 3.5, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("seadra", {rarity: 8, minTime: 3.3, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("goldeen", {rarity: 35, minTime: 6, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("seaking", {rarity: 10, minTime: 3.5, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("staryu", {rarity: 15, minTime: 3.5, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("starmie", {rarity: 3, minTime: 2.5, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("mr-mime", {rarity: 8, minTime: 3.3, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("scyther", {rarity: 5, minTime: 2.9, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("jynx", {rarity: 5, minTime: 2.9, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("electabuzz", {rarity: 5, minTime: 2.9, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("magmar", {rarity: 5, minTime: 2.9, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("pinsir", {rarity: 4, minTime: 2.9, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("tauros", {rarity: 4, minTime: 2.9, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("magikarp", {rarity: 60, minTime: 15, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("gyarados", {rarity: 2, minTime: 2.5, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("lapras", {rarity: 2, minTime: 2.5, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("ditto", {rarity: 10, minTime: 3.5, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("eevee", {rarity: 3, minTime: 2.5, minPrice: 8500, maxPrice: 12000, price: randomRange(8500, 12000)})
.set("vaporeon", {rarity: 1, minTime: 2.1, minPrice: 45000, maxPrice: 60000, price: randomRange(45000, 60000)})
.set("jolteon", {rarity: 1, minTime: 2.1, minPrice: 45000, maxPrice: 60000, price: randomRange(45000, 60000)})
.set("flareon", {rarity: 1, minTime: 2.1, minPrice: 45000, maxPrice: 60000, price: randomRange(45000, 60000)})
.set("porygon", {rarity: 7, minTime: 3.1, minPrice: 7000, maxPrice: 9500, price: randomRange(7000, 9500)})
.set("omanyte", {rarity: 7, minTime: 3.1, minPrice: 6700, maxPrice: 10000, price: randomRange(6700, 10000)})
.set("omastar", {rarity: 4, minTime: 2.9, minPrice: 13800, maxPrice: 17500, price: randomRange(13800, 17500)})
.set("kabuto", {rarity: 7, minTime: 3.1, minPrice: 6700, maxPrice: 10000, price: randomRange(6700, 10000)})
.set("kabutops", {rarity: 4, minTime: 2.9, minPrice: 13800, maxPrice: 17500, price: randomRange(13800, 17500)})
.set("aerodactyl", {rarity: 2, minTime: 2.5, minPrice: 28800, maxPrice: 37600, price: randomRange(28800, 37600)})
.set("snorlax", {rarity: 1, minTime: 2.1, minPrice: 45000, maxPrice: 60000, price: randomRange(45000, 60000)})
.set("articuno", {rarity: 1, minTime: 2.1, minPrice: 90000, maxPrice: 125000, price: randomRange(90000, 125000)})
.set("zapdos", {rarity: 1, minTime: 2.1, minPrice: 90000, maxPrice: 125000, price: randomRange(90000, 125000)})
.set("moltres", {rarity: 1, minTime: 2.1, minPrice: 90000, maxPrice: 125000, price: randomRange(90000, 125000)})
.set("dratini", {rarity: 8, minTime: 3.3, minPrice: 5800, maxPrice: 8900, price: randomRange(5800, 8900)})
.set("dragonair", {rarity: 5, minTime: 2.9, minPrice: 9800, maxPrice: 14400, price: randomRange(9800, 14400)})
.set("dragonite", {rarity: 1, minTime: 2.1, minPrice: 45000, maxPrice: 60000, price: randomRange(45000, 60000)})
.set("mewtwo", {rarity: 1, minTime: 2.1, minPrice: 90000, maxPrice: 125000, price: randomRange(90000, 125000)})
.set("mew", {rarity: 1, minTime: 2.1, minPrice: 90000, maxPrice: 125000, price: randomRange(90000, 125000)});

const fetchPokemon = () => {
  let promises = [];
  for (let i = 1; i <= 151; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then((res) => res.json()));
    }  

  Promise.all(promises).then((results) => {
     pokemonArr = results.map((data) => ({
      name: data.name,
          src: data.sprites.versions["generation-v"]["black-white"].animated.front_default,
          id: data.id,
          selected: false,
          onscreen: false
    }));
    // selectPokemon(pokemonArr);
    // renderImg(pokemonArr);
    // displayOnScreen(pokemonArr);
    setInterval(mainGame, 10000);
    // mainGame();
    console.log(pokemonArr);
    


    
  });  
}

fetchPokemon();
  
function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

const displayCoins = function(coins) {
  document.getElementById("player-coins").innerHTML = numberFormatter.format(coins);
}

const suffleArray = function(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }  
}

const createDiv = function(obj) {
  let div = document.createElement("div");
  div.className = "grid-item";
  div.id = obj.id;
  document.getElementById("poke-grid").appendChild(div);   
};

const createImg = function(obj) {
  let poke = document.createElement("img");
  poke.src = obj.src;
  poke.classList.add("grey-image");
  document.getElementById(obj.id).appendChild(poke);
}

const createNameText = function(obj) {
  let pElement = document.createElement("p");
  let pokemonName = document.createTextNode(obj.name);
  pElement.appendChild(pokemonName);
  // pElement.className = "item-name";
  document.getElementById(obj.id).appendChild(pElement);   
};

const createPriceText = function(obj) {
  let pElement = document.createElement("p");
  let formatPrice = numberFormatter.format(extraData.get(obj.name).price);
  let pokemonPrice = document.createTextNode(`$${formatPrice}`);
  pElement.classList.add("price-text");
  pElement.appendChild(pokemonPrice);  
  document.getElementById(obj.id).appendChild(pElement);
}

const resetMapData = function(obj) {
  let dataObj = extraData.get(obj.name);
  let minPriceValue = dataObj.minPrice;
  let maxPriceValue = dataObj.maxPrice;
  dataObj.price = randomRange(minPriceValue, maxPriceValue);
  extraData.set(obj.name, dataObj);
}

const createInput = function(obj) {
  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("pokeName", obj.name);
  let price = extraData.get(obj.name).price;
  input.setAttribute("price", price);
  input.classList.add("inputField")
  document.getElementById(obj.id).appendChild(input);
}

const createButton = function(obj) {
  let button = document.createElement("button");
  button.innerHTML = "Buy";
  button.setAttribute("pokeName", obj.name);
  button.classList.add("buttonStyle");
  let div = document.getElementById(obj.id);
  console.log(div);
  document.getElementById(obj.id).appendChild(button);
  let startTime = timeStart();
  let minTime = extraData.get(obj.name).minTime;
  resetMapData(obj);
  button.addEventListener("click", (event) => {
    let buttonClicked = event.target.attributes[0].value;
    let inputs = document.querySelectorAll(".inputField");
    let endTime = timeEnd();
    let timeToPurchase = purchaseTime(startTime, endTime);
    inputs.forEach((input) => {
      if (buttonClicked === input.attributes[1].value) {
        let inputValue = Number(input.value);
        let price = Number(input.attributes[2].value);
        let playerCoins = Number(localStorage.getItem("coins"));
        console.log(price);
        console.log(inputValue);
        if (playerCoins < inputValue) {
          alert("insufficient funds");
        }
        if (timeToPurchase > minTime) {
          div.remove();
          alert(`Too slow! ${obj.name} is sold out!`);  
        } else if (inputValue === price || inputValue > price && inputValue <= Math.ceil(1.5 * price)) {
          updateChanges(playerCoins, buttonClicked, div, inputValue);
          alert(`Congratulations! ${obj.name} has been added to your collection!`);
        } else if (inputValue < price && inputValue >= Math.ceil(price * 0.95)){
          let num = Math.ceil(Math.random() * 100);
          if (num <= 95) {
            updateChanges(playerCoins, buttonClicked, div, inputValue);
            alert(`Congratulations! ${obj.name} has been added to your collection!`);  
          } else {
            alert("offer toooooo low");
            input.value = ""; 
          }
        } else if (inputValue < price && inputValue >=  Math.ceil(price * 0.90)){
          let num = Math.ceil(Math.random() * 100);
          if (num <= 90) {
            updateChanges(playerCoins, buttonClicked, div, inputValue);
            alert(`Congratulations! ${obj.name} has been added to your collection!`);  
          } else {
            alert("offer toooooo low");
            input.value = ""; 
          } 
        } else if (inputValue < price && inputValue >=  Math.ceil(price * 0.85)){
          let num = Math.ceil(Math.random() * 100);
          if (num <= 85) {
            updateChanges(playerCoins, buttonClicked, div, inputValue);
            alert(`Congratulations! ${obj.name} has been added to your collection!`);  
          } else {
            alert("offer toooooo low");
            input.value = ""; 
          }
        } else if (inputValue < price && inputValue >=  Math.ceil(price * 0.80)){
          let num = Math.ceil(Math.random() * 100);
          if (num <= 80) {
            updateChanges(playerCoins, buttonClicked, div, inputValue);
            alert(`Congratulations! ${obj.name} has been added to your collection!`);  
          } else {
            alert("offer toooooo low");
            input.value = ""; 
          }
        } else if (inputValue < price && inputValue >=  Math.ceil(price * 0.75)){
          let num = Math.ceil(Math.random() * 100);
          if (num <= 75) {
            updateChanges(playerCoins, buttonClicked, div, inputValue);
            alert(`Congratulations! ${obj.name} has been added to your collection!`);  
          } else {
            alert("offer toooooo low");
            input.value = ""; 
          }
        } else if (inputValue > Math.ceil(1.5 * price)) {
          alert("thats too much!");
          input.value = "";
        } else if (inputValue < price) {
          alert("offer way toooooo low");
          input.value = ""; 
        }
      }
    })
  })
}

const selectPokemon = function (arr) {
  for (let i = 0; i <= 150; i++){
    let num = Math.ceil(Math.random() * 100)
    if (num <= 50) {
      arr[i].selected = true;
    }
  }
}

const displayOnScreen = function(arr) {
  let count = 0;
  suffleArray(arr);
  arr.forEach(pokemonObj => {
    if (pokemonObj.selected === true) {
      let num = Math.ceil(Math.random() * 100);
      let rarity = extraData.get(pokemonObj.name).rarity;
      pokemonObj.selected = false;
      if (num <= rarity && count < 8) {
        createDiv(pokemonObj);
        createImg(pokemonObj);
        createNameText(pokemonObj);
        createPriceText(pokemonObj);
        createInput(pokemonObj);
        createButton(pokemonObj);
        count++;
      }
    }
  })
}

const removePokemon = function() {
  let pokemonOnScreen = document.querySelectorAll(".grid-item");
  console.log(pokemonOnScreen);
  pokemonOnScreen.forEach(pokemon => {
    pokemon.remove();
  })
}

const boughtPokemon = function(str) {
  pokemonArr.forEach(pokemon => {
    if (pokemon.name === str) {
      if(!localStorage.getItem(str)) {
        localStorage.setItem(str + pokemon.id, pokemon.src);
      }
    }
  })
}

const mainGame = function() {
  selectPokemon(pokemonArr);
  displayOnScreen(pokemonArr);
  setTimeout(removePokemon, 7000);
}

const timeStart = function() {
  let start = Date.now();
  return start;
}

const timeEnd = function() {
  let end = Date.now();
  return end;
}

const purchaseTime = function(start, end) {
  let timeSpent = (end-start)/1000;
  console.log(timeSpent);
  return timeSpent;
}

const updateChanges = function(coins, buttonName, divToRemove, inputVal) {
  coins = coins - inputVal;
  localStorage.setItem("coins", coins);
  displayCoins(coins);
  boughtPokemon(buttonName);
  divToRemove.remove();
}
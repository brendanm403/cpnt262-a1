let pokemonArr = []; 
const numberFormatter = Intl.NumberFormat('en-US');
const extraData = new Map();

extraData.set("bulbasaur", {rarity: 4, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("ivysaur", {rarity: 3, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("venusaur", {rarity: 1, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("charmander", {rarity: 4, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("charmeleon", {rarity: 3, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("charizard", {rarity: 1, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("squirtle", {rarity: 4, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("wartortle", {rarity: 3, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("blastoise", {rarity: 1, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("caterpie", {rarity: 50, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("metapod", {rarity: 40, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("butterfree", {rarity: 30, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("weedle", {rarity: 50, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("kakuna", {rarity: 40, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("beedrill", {rarity: 30, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("pidgey", {rarity: 50, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("pidgeotto", {rarity: 30, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("pidgeot", {rarity: 10, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("rattata", {rarity: 50, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("raticate", {rarity: 30, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("spearow", {rarity: 40, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("fearow", {rarity: 20, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("ekans", {rarity: 40, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("arbok", {rarity: 20, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("pikachu", {rarity: 15, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("raichu", {rarity: 6, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("sandshrew", {rarity: 40, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("sandslash", {rarity: 10, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("nidoran-f", {rarity: 35, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("nidorina", {rarity: 25, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("nidoqueen", {rarity: 6, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("nidoran-m", {rarity: 35, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("nidorino", {rarity: 25, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("nidoking", {rarity: 6, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("clefairy", {rarity: 35, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("clefable", {rarity: 25, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("vulpix", {rarity: 15, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("ninetales", {rarity: 3, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("jigglypuff", {rarity: 40, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("wigglytuff", {rarity: 25, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("zubat", {rarity: 60, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("golbat", {rarity: 40, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("oddish", {rarity: 40, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("gloom", {rarity: 30, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("vileplume", {rarity: 5, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("paras", {rarity: 30, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("parasect", {rarity: 20, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("venonat", {rarity: 30, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("venomoth", {rarity: 20, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("diglett", {rarity: 40, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("dugtrio", {rarity: 25, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("meowth", {rarity: 40, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("persian", {rarity: 30, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("psyduck", {rarity: 30, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("golduck", {rarity: 15, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("mankey", {rarity: 30, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("primeape", {rarity: 15, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("growlithe", {rarity: 15, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("arcanine", {rarity: 2, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("poliwag", {rarity: 35, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("poliwhirl", {rarity: 25, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("poliwrath", {rarity: 6, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("abra", {rarity: 30, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("kadabra", {rarity: 20, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("alakazam", {rarity: 4, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("machop", {rarity: 30, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("machoke", {rarity: 20, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("machamp", {rarity: 4, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("bellsprout", {rarity: 35, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("weepinbell", {rarity: 25, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("victreebel", {rarity: 5, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("tentacool", {rarity: 35, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("tentacruel", {rarity: 7, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("geodude", {rarity: 40, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("graveler", {rarity: 25, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("golem", {rarity: 7, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("ponyta", {rarity: 15, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("rapidash", {rarity: 5, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("slowpoke", {rarity: 30, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("slowbro", {rarity: 8, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("magnemite", {rarity: 30, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("magneton", {rarity: 8, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("farfetchd", {rarity: 15, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("doduo", {rarity: 35, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("dodrio", {rarity: 10, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("seel", {rarity: 25, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("dewgong", {rarity: 8, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("grimer", {rarity: 35, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("muk", {rarity: 8, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("shellder", {rarity: 25, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("cloyster", {rarity: 9, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("gastly", {rarity: 20, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("haunter", {rarity: 10, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("gengar", {rarity: 2, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("onix", {rarity: 10, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("drowzee", {rarity: 30, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("hypno", {rarity: 10, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("krabby", {rarity: 25, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("kingler", {rarity: 9, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("voltorb", {rarity: 20, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("electrode", {rarity: 9, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("exeggcute", {rarity: 18, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("exeggutor", {rarity: 3, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("cubone", {rarity: 35, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("marowak", {rarity: 9, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("hitmonlee", {rarity: 7, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("hitmonchan", {rarity: 7, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("lickitung", {rarity: 8, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("koffing", {rarity: 25, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("weezing", {rarity: 7, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("rhyhorn", {rarity: 20, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("rhydon", {rarity: 7, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("chansey", {rarity: 2, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("tangela", {rarity: 9, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("kangaskhan", {rarity: 4, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("horsea", {rarity: 17, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("seadra", {rarity: 8, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("goldeen", {rarity: 35, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("seaking", {rarity: 10, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("staryu", {rarity: 15, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("starmie", {rarity: 3, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("mr-mime", {rarity: 8, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("scyther", {rarity: 5, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("jynx", {rarity: 5, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("electabuzz", {rarity: 5, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("magmar", {rarity: 5, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("pinsir", {rarity: 4, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("tauros", {rarity: 4, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("magikarp", {rarity: 60, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("gyarados", {rarity: 2, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("lapras", {rarity: 2, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("ditto", {rarity: 10, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("eevee", {rarity: 3, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("vaporeon", {rarity: 1, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("jolteon", {rarity: 1, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("flareon", {rarity: 1, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("porygon", {rarity: 7, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("omanyte", {rarity: 7, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("omastar", {rarity: 4, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("kabuto", {rarity: 7, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("kabutops", {rarity: 4, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("aerodactyl", {rarity: 2, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("snorlax", {rarity: 1, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("articuno", {rarity: 1, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("zapdos", {rarity: 1, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("moltres", {rarity: 1, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("dratini", {rarity: 8, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("dragonair", {rarity: 5, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("dragonite", {rarity: 1, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("mewtwo", {rarity: 1, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)})
.set("mew", {rarity: 1, minPrice: 800, maxPrice: 1100, price: randomRange(800, 1100)});

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
    // setInterval(mainGame, 13000);
    mainGame();
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
  let pokemonRarity = extraData.get(obj.name).rarity;
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
        } else if (inputValue === price || inputValue > price && inputValue <= Math.ceil(1.5 * price)) {
            if (pokemonRarity >= 30 && timeToPurchase < 8) {
              updateChanges(playerCoins, buttonClicked, div, inputValue);
              alert("u got it");
            } else if(pokemonRarity >= 20 && pokemonRarity < 30 && timeToPurchase < 6) {
              updateChanges(playerCoins, buttonClicked, div, inputValue);
              alert("u got it");
            } else {
              div.remove();
              alert(`Too slow! ${obj.name} is sold out!`);
            }
        } else if (inputValue > Math.ceil(1.5 * price)) {
          alert("thats too much!");
        } else if (inputValue < price && inputValue >= price * 0.75) {
          let num = Math.ceil(Math.random() * 100);
          if (num <= 75) {
            playerCoins = playerCoins - inputValue;
            localStorage.setItem("coins", playerCoins);
            displayCoins(playerCoins);
            boughtPokemon(buttonClicked);
            alert("u got it");
          } else {
            alert("Offer too low");
          }
        } else if (inputValue < price * 0.75) {
          alert("offer toooooo low");
        }
      }
    })
    // console.log(buttonClicked);
    // console.log(inputs);
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
  // setTimeout(removePokemon, 7000);
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
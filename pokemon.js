let pokemonArr = []; 
const numberFormatter = Intl.NumberFormat('en-US');
const extraData = new Map();
extraData.set("bulbasaur", {rarity: 4, price: 13000}).set("ivysaur", {rarity: 3, price: 18000}).set("venusaur", {rarity: 1, price: 50000}).set("charmander", {rarity: 4, price: 13000}).set("charmeleon", {rarity: 3, price: 18000}).set("charizard", {rarity: 1, price: 50000}).set("squirtle", {rarity: 4, price: 13000}).set("wartortle", {rarity: 3, price: 18000}).set("blastoise", {rarity: 1, price: 50000}).set("caterpie", {rarity: 50, price: 1000}).set("metapod", {rarity: 40, price: 2000}).set("butterfree", {rarity: 30, price: 5000}).set("weedle", {rarity: 50, price: 1000}).set("kakuna", {rarity: 40, price: 2500}).set("beedrill", {rarity: 30, price: 5000}).set("pidgey", {rarity: 50, price: 1000}).set("pidgeotto", {rarity: 30, price: 4000}).set("pidgeot", {rarity: 10, price: 8000}).set("rattata", {rarity: 50, price: 1000}).set("raticate", {rarity: 30, price: 5000}).set("spearow", {rarity: 40, price: 3000}).set("fearow", {rarity: 20, price: 6000}).set("ekans", {rarity: 40, price: 3000}).set("arbok", {rarity: 20, price: 6000}).set("pikachu", {rarity: 15, price: 10000}).set("raichu", {rarity: 6, price: 15000}).set("sandshrew", {rarity: 40, price: 3000}).set("sandslash", {rarity: 10, price: 6000}).set("nidoran-f", {rarity: 35, price: 3000}).set("nidorina", {rarity: 25, price: 6000}).set("nidoqueen", {rarity: 6, price: 12000}).set("nidoran-m", {rarity: 35, price: 3500}).set("nidorino", {rarity: 25, price: 6000}).set("nidoking", {rarity: 6, price: 12000}).set("clefairy", {rarity: 35, price: 4000}).set("clefable", {rarity: 25, price: 8000}).set("vulpix", {rarity: 15, price: 10000}).set("ninetales", {rarity: 3, price: 25000}).set("jigglypuff", {rarity: 40, price: 4000}).set("wigglytuff", {rarity: 25, price: 8000}).set("zubat", {rarity: 60, price: 500}).set("golbat", {rarity: 40, price: 5500}).set("oddish", {rarity: 40, price: 2000}).set("gloom", {rarity: 30, price: 4500}).set("vileplume", {rarity: 5, price: 10000}).set("paras", {rarity: 30, price: 3000}).set("parasect", {rarity: 20, price: 7000}).set("venonat", {rarity: 30, price: 3000}).set("venomoth", {rarity: 20, price: 6000}).set("diglett", {rarity: 40, price: 4000}).set("dugtrio", {rarity: 25, price: 8000}).set("meowth", {rarity: 40, price: 2000}).set("persian", {rarity: 30, price: 7000}).set("psyduck", {rarity: 30, price: 3500}).set("golduck", {rarity: 15, price: 8500}).set("mankey", {rarity: 30, price: 5000}).set("primeape", {rarity: 15, price: 7000}).set("growlithe", {rarity: 15, price: 8000}).set("arcanine", {rarity: 2, price: 35000}).set("poliwag", {rarity: 35, price: 4000}).set("poliwhirl", {rarity: 25, price: 6000}).set("poliwrath", {rarity: 6, price: 10000}).set("abra", {rarity: 30, price: 3000}).set("kadabra", {rarity: 20, price: 8000}).set("alakazam", {rarity: 4, price: 17000}).set("machop", {rarity: 30, price: 5000}).set("machoke", {rarity: 20, price: 7000}).set("machamp", {rarity: 4, price: 14000}).set("bellsprout", {rarity: 35, price: 2500}).set("weepinbell", {rarity: 25, price: 5000}).set("victreebel", {rarity: 5, price: 10000}).set("tentacool", {rarity: 35, price: 4000}).set("tentacruel", {rarity: 7, price: 8000}).set("geodude", {rarity: 40, price: 2000}).set("graveler", {rarity: 25, price: 5000}).set("golem", {rarity: 7, price: 9000}).set("ponyta", {rarity: 15, price: 6000}).set("rapidash", {rarity: 5, price: 13000}).set("slowpoke", {rarity: 30, price: 2500}).set("slowbro", {rarity: 8, price: 7500}).set("magnemite", {rarity: 30, price: 3500}).set("magneton", {rarity: 8, price: 9500}).set("farfetchd", {rarity: 15, price: 6500}).set("doduo", {rarity: 35, price: 2500}).set("dodrio", {rarity: 10, price: 7500}).set("seel", {rarity: 25, price: 4000}).set("dewgong", {rarity: 8, price: 9000}).set("grimer", {rarity: 35, price: 2000}).set("muk", {rarity: 8, price: 6000}).set("shellder", {rarity: 25, price: 3000}).set("cloyster", {rarity: 9, price: 9500}).set("gastly", {rarity: 20, price: 5000}).set("haunter", {rarity: 10, price: 10000}).set("gengar", {rarity: 2, price: 25000}).set("onix", {rarity: 10, price: 8000}).set("drowzee", {rarity: 30, price: 4500}).set("hypno", {rarity: 10, price: 6500}).set("krabby", {rarity: 25, price: 3000}).set("kingler", {rarity: 9, price: 7000}).set("voltorb", {rarity: 20, price: 5500}).set("electrode", {rarity: 9, price: 9000}).set("exeggcute", {rarity: 18, price: 4000}).set("exeggutor", {rarity: 3, price: 21000}).set("cubone", {rarity: 35, price: 3000}).set("marowak", {rarity: 9, price: 7500}).set("hitmonlee", {rarity: 7, price: 8000}).set("hitmonchan", {rarity: 7, price: 8000}).set("lickitung", {rarity: 8, price: 13500}).set("koffing", {rarity: 25, price: 4500}).set("weezing", {rarity: 7, price: 10000}).set("rhyhorn", {rarity: 20, price: 6500}).set("rhydon", {rarity: 7, price: 10000}).set("chansey", {rarity: 2, price: 35000}).set("tangela", {rarity: 9, price: 7000}).set("kangaskhan", {rarity: 4, price: 16000}).set("horsea", {rarity: 17, price: 5000}).set("seadra", {rarity: 8, price: 9000}).set("goldeen", {rarity: 35, price: 2500}).set("seaking", {rarity: 10, price: 8000}).set("staryu", {rarity: 15, price: 4000}).set("starmie", {rarity: 3, price: 18000}).set("mr-mime", {rarity: 8, price: 7500}).set("scyther", {rarity: 5, price: 12000}).set("jynx", {rarity: 5, price: 12000}).set("electabuzz", {rarity: 5, price: 12000}).set("magmar", {rarity: 5, price: 12000}).set("pinsir", {rarity: 4, price: 14000}).set("tauros", {rarity: 4, price: 14000}).set("magikarp", {rarity: 60, price: 1500}).set("gyarados", {rarity: 2, price: 25000}).set("lapras", {rarity: 2, price: 27000}).set("ditto", {rarity: 10, price: 6000}).set("eevee", {rarity: 3, price: 5500}).set("vaporeon", {rarity: 1, price: 40000}).set("jolteon", {rarity: 1, price: 40000}).set("flareon", {rarity: 1, price: 40000}).set("porygon", {rarity: 7, price: 9000}).set("omanyte", {rarity: 7, price: 7000}).set("omastar", {rarity: 4, price: 10000}).set("kabuto", {rarity: 7, price: 7000}).set("kabutops", {rarity: 4, price: 10000}).set("aerodactyl", {rarity: 2, price: 25000}).set("snorlax", {rarity: 1, price: 30000}).set("articuno", {rarity: 1, price: 100000}).set("zapdos", {rarity: 1, price: 100000}).set("moltres", {rarity: 1, price: 100000}).set("dratini", {rarity: 8, price: 6500}).set("dragonair", {rarity: 5, price: 10500}).set("dragonite", {rarity: 1, price: 50000}).set("mewtwo", {rarity: 1, price: 100000}).set("mew", {rarity: 1, price: 100000});

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
  
// function checkId(arr) {
//   arr.forEach(element => {
//     console.log(element.src);
//   });
// }

// function renderImg(arr) {
//  arr.forEach(element => { 
//   let poke = document.createElement("img");
//   poke.src = element.src;
//   document.body.appendChild(poke); 
//  }); 
 
// }

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
  document.getElementById(obj.id).appendChild(button);
  button.addEventListener("click", (event) => {
    let buttonClicked = event.target.attributes[0].value;
    let inputs = document.querySelectorAll(".inputField");
    inputs.forEach((input) => {
      if (buttonClicked === input.attributes[1].value) {
        let inputValue = Number(input.value);
        let price = Number(input.attributes[2].value);
        console.log(price);
        console.log(inputValue);
        if (inputValue === price || inputValue > price && inputValue <= Math.ceil(1.5 * price)) {
          alert("u got it");
        } else if (inputValue > Math.ceil(1.5 * price)) {
          alert("thats too much!");
        } else if (inputValue < price && inputValue >= price * 0.75) {
          let num = Math.ceil(Math.random() * 100);
          if (num <= 75) {
            alert("u got it");
          } else {
            alert("Offer too low");
          }
        } else if (inputValue < price * 0.75) {
          alert("offer toooooo low");
        }
      }
    })
    console.log(buttonClicked);
    console.log(inputs);
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

const mainGame = function() {
  selectPokemon(pokemonArr);
  displayOnScreen(pokemonArr);
  setTimeout(removePokemon, 2800);
}
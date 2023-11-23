let pokemonArr = [];

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
  });  
}

fetchPokemon();

const createDiv = function(obj) {
  let div = document.createElement("div");
  div.classList.add("grid-item");
  div.id = obj.name;
  document.getElementById("grid").appendChild(div)
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
  document.getElementById(obj.name).appendChild(pTag);
}

const createNumberText = function(obj) {
  let pTag = document.createElement("p");
  let pokemonNumber = document.createTextNode(obj.id);
  pTag.classList.add("dex-number");
  pTag.appendChild(pokemonNumber);
  document.getElementById(obj.name).appendChild(pTag);
}

const displayPokedex = function(arr) {
  arr.forEach(pokemon => {
    createDiv(pokemon);
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
    if (localStorage.getItem(pokemon.name)) {
      pokemon.src = localStorage.getItem(pokemon.name);
      pokemon.classList.remove("missing-pokemon");
    }
  })
  // galleryPokemon.forEach(pokemon => {
  //   pokemon.src = localStorage.getItem("pidgeotto");
  //   pokemon.classList.remove("missing-pokemon");  
  // });
  // galleryPokemon.src = localStorage.getItem("pidgeotto");
  // galleryPokemon.classList.remove("missing-pokemon");
}
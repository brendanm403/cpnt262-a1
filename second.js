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
    renderImg(pokemonArr);
    setLocalStorageItem();
  });  
}

fetchPokemon();

const renderImg = function(arr) {
  arr.forEach(element => {
    let img = document.createElement("img");
    img.src = element.src;
    img.classList.add("missing-pokemon", "grid-item");
    document.getElementById("grid").appendChild(img);  
  });
}

const setLocalStorageItem = function() {
  localStorage.setItem("pidgeotto", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/17.gif");
  let galleryPokemon = document.querySelectorAll(".grid-item")[16];
  // galleryPokemon.forEach(pokemon => {
  //   pokemon.src = localStorage.getItem("pidgeotto");
  //   pokemon.classList.remove("missing-pokemon");  
  // });
  galleryPokemon.src = localStorage.getItem("pidgeotto");
  galleryPokemon.classList.remove("missing-pokemon");
}
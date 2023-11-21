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
  });  
}

fetchPokemon();
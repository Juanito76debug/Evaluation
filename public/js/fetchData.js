window.addEventListener("DOMContentLoaded", () => {
  const pokeP = document.getElementById("pokeInfo");
  const pokeDiv = document.getElementById("pokemon-info");
  const pokeAbilityBtn = document.getElementById("ability");

  const invoquePokemon = () => {
    const pokeBtn = document.getElementById("pokemon");
    pokeBtn.addEventListener("click", fetchPokemon);
    pokeDiv.appendChild(pokeP);
  };

  const pokemonAbility = () => {
    pokeAbilityBtn.addEventListener("click", fetchAbilities);
    pokeDiv.appendChild(pokeAbility);
  };

  (function startAll() {
    invoquePokemon();
    pokemonAbility();
  })();
});

export default fetchData;

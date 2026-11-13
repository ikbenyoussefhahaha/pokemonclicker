window.PokemonClicker.save = function () {
  const data = {
    points: this.points,
    clickPower: this.clickPower,
    allMultiplier: this.allMultiplier,
    pokemonMultipliers: this.pokemonMultipliers,
    pokemon: this.pokemon,
    upgrades: this.upgrades
  };

  localStorage.setItem("pokemonClickerSave", JSON.stringify(data));

  const button = document.querySelector("#saveButton");
  button.textContent = "Opgeslagen!";
  setTimeout(() => {
    button.textContent = "Opslaan";
  }, 1200);
};

window.PokemonClicker.load = function () {
  const saved = localStorage.getItem("pokemonClickerSave");
  if (!saved) return;

  try {
    const data = JSON.parse(saved);

    this.points = Number(data.points) || 0;
    this.clickPower = Number(data.clickPower) || 1;
    this.allMultiplier = Number(data.allMultiplier) || 1;
    this.pokemonMultipliers = data.pokemonMultipliers || {};

    this.pokemon.forEach((pokemon) => {
      const oldPokemon = data.pokemon?.find((item) => item.id === pokemon.id);
      if (oldPokemon) Object.assign(pokemon, oldPokemon);
    });

    this.upgrades.forEach((upgrade) => {
      const oldUpgrade = data.upgrades?.find((item) => item.id === upgrade.id);
      if (oldUpgrade) Object.assign(upgrade, oldUpgrade);
    });
  } catch (error) {
    console.error("Opslag laden is niet gelukt:", error);
  }
};

window.PokemonClicker.reset = function () {
  localStorage.removeItem("pokemonClickerSave");
  location.reload();
};
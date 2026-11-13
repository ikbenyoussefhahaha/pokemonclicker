window.PokemonClicker.updateScreen = function () {
  document.querySelector("#points").textContent = this.format(this.points);
  document.querySelector("#rate").textContent =
    `${this.getRate().toFixed(1).replace(".", ",")} punten per seconde`;
  document.querySelector("#clickPower").textContent =
    `${this.clickPower} punten per klik`;

  const activePokemon =
    this.pokemon.find((pokemon) => pokemon.id === this.activePokemon) ||
    this.pokemon.find((pokemon) => pokemon.id === "pikachu");

  if (activePokemon) {
    document.querySelector("#images").src =
      `images/${activePokemon.id}.png`;
  }

  this.showShop();
  this.showUpgrades();
  this.showInventory();
};

window.PokemonClicker.showInventory = function () {
  const inventory = document.querySelector("#inventory");
  const owned = this.pokemon.filter((pokemon) => pokemon.count > 0);

  inventory.innerHTML = owned.length
    ? owned.map((pokemon) => `${pokemon.name}: ${pokemon.count}`).join("<br>")
    : "Je hebt nog geen Pokémon.";

  const total = this.pokemon.reduce((sum, pokemon) => sum + pokemon.count, 0);
  document.querySelector("#unlocks").textContent =
    total >= 8 ? "Alle Pokémon zijn vrijgespeeld!" : "Blijf Pokémon verzamelen!";
};
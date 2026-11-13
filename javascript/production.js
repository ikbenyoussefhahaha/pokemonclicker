window.PokemonClicker.getRate = function () {
  return this.pokemon.reduce((total, pokemon) => {
    const multiplier = this.pokemonMultipliers[pokemon.id] || 1;
    return total + pokemon.count * pokemon.rate * multiplier * this.allMultiplier;
  }, 0);
};

window.PokemonClicker.startProduction = function () {
  setInterval(() => {
    this.points += this.getRate();
    this.updateScreen();
  }, 1000);
};
window.PokemonClicker = {
  points: 0,
  clickPower: 1,
  allMultiplier: 1,
  pokemonMultipliers: {},

  pokemon: [
    { id: "pikachu", name: "Pikachu", cost: 15, rate: 0.1, count: 0 },
    { id: "eevee", name: "Eevee", cost: 100, rate: 1, count: 0 },
    { id: "charmander", name: "Charmander", cost: 500, rate: 5, count: 0 },
    { id: "squirtle", name: "Squirtle", cost: 2500, rate: 20, count: 0 },
    { id: "bulbasaur", name: "Bulbasaur", cost: 12000, rate: 80, count: 0 },
    { id: "pidgey", name: "Pidgey", cost: 60000, rate: 300, count: 0 },
    { id: "snorlax", name: "Snorlax", cost: 300000, rate: 1200, count: 0 },
    { id: "dragonite", name: "Dragonite", cost: 1500000, rate: 5000, count: 0 }
  ],

  upgrades: [
    { id: "click1", name: "Sterke klik", description: "+1 punt per klik", cost: 50, type: "click", amount: 1, bought: false },
    { id: "pika", name: "Pikachu-power", description: "Pikachu produceert 2x zo snel", cost: 100, type: "pokemon", target: "pikachu", multiplier: 2, bought: false },
    { id: "team", name: "Teamwork", description: "Alle Pokémon produceren 1,5x zo snel", cost: 1000, type: "all", multiplier: 1.5, bought: false },
    { id: "click5", name: "Superklik", description: "+5 punten per klik", cost: 5000, type: "click", amount: 5, bought: false },
    { id: "pokedex", name: "Pokédex bonus", description: "Alle Pokémon produceren 2x zo snel", cost: 50000, type: "all", multiplier: 2, bought: false }
  ],

  format(number) {
    return Math.floor(number).toLocaleString("nl-NL");
  }
};
window.PokemonClicker.showShop = function () {
  const shop = document.querySelector("#shop");
  shop.innerHTML = "";

  this.pokemon.forEach((pokemon) => {
    const item = document.createElement("article");
    item.className = "shop-item";

    item.innerHTML = `
      <h3>${pokemon.name}</h3>
      <p>Bezit: ${pokemon.count}</p>
      <p>${pokemon.rate} punten per seconde per Pokémon</p>
      <button class="buy-button" ${this.points < pokemon.cost ? "disabled" : ""}>
        Koop voor ${this.format(pokemon.cost)} punten
      </button>
    `;

    item.querySelector("button").addEventListener("click", () => {
      this.buyPokemon(pokemon.id);
    });

    shop.appendChild(item);
  });
};

window.PokemonClicker.buyPokemon = function (id) {
  const pokemon = this.pokemon.find((item) => item.id === id);

  if (!pokemon || this.points < pokemon.cost) return;

  this.points -= pokemon.cost;
  pokemon.count++;
  this.activePokemon = pokemon.id;
  pokemon.cost = Math.ceil(pokemon.cost * 1.15);

  this.updateScreen();
};
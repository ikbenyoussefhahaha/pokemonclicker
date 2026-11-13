class Upgrade {
  constructor(data) {
    Object.assign(this, data);
  }

  apply(game) {
    if (this.type === "click") {
      game.clickPower += this.amount;
    } else if (this.type === "all") {
      game.allMultiplier *= this.multiplier;
    } else if (this.type === "pokemon") {
      const oldMultiplier = game.pokemonMultipliers[this.target] || 1;
      game.pokemonMultipliers[this.target] = oldMultiplier * this.multiplier;
    }
  }
}

class ClickUpgrade extends Upgrade {}
class ProductionUpgrade extends Upgrade {}

window.PokemonClicker.showUpgrades = function () {
  const container = document.querySelector("#upgrades");
  container.innerHTML = "";

  this.upgrades.forEach((data) => {
    const item = document.createElement("article");
    item.className = "shop-item";

    item.innerHTML = `
      <h3>${data.name}${data.bought ? " ✓" : ""}</h3>
      <p>${data.description}</p>
      <button class="buy-button" ${data.bought || this.points < data.cost ? "disabled" : ""}>
        ${data.bought ? "Gekocht" : `Koop voor ${this.format(data.cost)} punten`}
      </button>
    `;

    item.querySelector("button").addEventListener("click", () => {
      this.buyUpgrade(data.id);
    });

    container.appendChild(item);
  });
};

window.PokemonClicker.buyUpgrade = function (id) {
  const data = this.upgrades.find((item) => item.id === id);

  if (!data || data.bought || this.points < data.cost) return;

  this.points -= data.cost;

  const upgrade =
    data.type === "click"
      ? new ClickUpgrade(data)
      : new ProductionUpgrade(data);

  upgrade.apply(this);
  data.bought = true;
  this.updateScreen();
};
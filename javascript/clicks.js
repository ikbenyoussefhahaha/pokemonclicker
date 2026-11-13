window.PokemonClicker.bindButtons = function () {
  document.querySelector("#pokemonButton").addEventListener("click", (event) => {
    this.points += this.clickPower;

    const effect = document.createElement("span");
    effect.className = "floating-point";
    effect.textContent = `+${this.clickPower}`;
    effect.style.left = `${event.clientX}px`;
    effect.style.top = `${event.clientY}px`;
    document.body.appendChild(effect);
    setTimeout(() => effect.remove(), 850

    this.updateScreen();
  });

  document.querySelector("#saveButton").addEventListener("click", () => {
    this.save();
  });

  document.querySelector("#resetButton").addEventListener("click", () => {
    if (confirm("Weet je zeker dat je opnieuw wilt beginnen?")) {
      this.reset();
    }
  });

  document.querySelector("#skinButton").addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
  });
}; 
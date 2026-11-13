window.PokemonClicker.startEvents = function () {
  setInterval(() => {
    if (Math.random() > 0.2) return;

    const eventArea = document.querySelector("#eventArea");
    eventArea.textContent = "✨ Gouden Pokémon! Klik hier voor een bonus! ✨";
    eventArea.classList.add("golden");

    const timeout = setTimeout(() => {
      eventArea.textContent = "Er is momenteel geen event actief.";
      eventArea.classList.remove("golden");
      eventArea.onclick = null;
    }, 10000);

    eventArea.onclick = () => {
      this.points += Math.max(25, this.getRate() * 30);
      clearTimeout(timeout);
      eventArea.textContent = "Je ving de gouden Pokémon en kreeg een bonus!";
      eventArea.classList.remove("golden");
      eventArea.onclick = null;
      this.updateScreen();
    };
  }, 15000);
};
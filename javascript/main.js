document.addEventListener("DOMContentLoaded", () => {
  const game = window.PokemonClicker;

  game.load();
  game.bindButtons();
  game.updateScreen();
  game.startProduction();
  game.startEvents();

  setInterval(() => game.save(), 30000);
});
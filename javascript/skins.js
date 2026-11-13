window.PokemonClicker.toggleSkin = function () {
  this.skin = this.skin === "light" ? "dark" : "light";

  document.body.classList.toggle(
    "dark-theme",
    this.skin === "dark"
  );

  this.save();
};

window.PokemonClicker.applySkin = function () {
  document.body.classList.toggle(
    "dark-theme",
    this.skin === "dark"
  );
};
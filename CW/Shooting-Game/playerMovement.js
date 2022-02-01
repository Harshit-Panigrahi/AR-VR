AFRAME.registerComponent("footsteps", {
  init: function() {
    this.walk();
  },
  walk: function () {
    window.addEventListener("keydown", (e)=>{
      if (
        e.key === "w" ||
        e.key === "a" ||
        e.key === "s" ||
        e.key === "d" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowRight" ||
        e.key === "ArrowUp" ||
        e.key === "ArrowDown"
      ) {
        let sound2El = document.querySelector("#sound2");
        sound2El.components.sound.playSound();
      }
    })
  }
})

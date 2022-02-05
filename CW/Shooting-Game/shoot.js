AFRAME.registerComponent("bullets", {
  init: function () {
    this.shootBullet();
  },
  shootBullet: function () {
    window.addEventListener("keydown", (e) => {
      if (e.code == "Space") {
        this.createBullet();
      }
    });
  },
  createBullet: function () {
    let bulletEl = document.createElement("a-sphere");
    bulletEl.setAttribute("radius", "0.1");
    bulletEl.setAttribute("color", "black");
    bulletEl.setAttribute("shader", "flat");

    let camPos = document.querySelector("#camera").getAttribute("position");
    bulletEl.setAttribute("position", camPos);

    let direction = new THREE.Vector3();
    document.querySelector("#camera").object3D.getWorldDirection(direction);
    bulletEl.setAttribute("velocity", direction.multiplyScalar(-15));
    bulletEl.setAttribute("dynamic-body", {
      shape: "sphere",
      mass: "0",
    });
    
    let sceneEl = document.querySelector("#scene");
    sceneEl.appendChild(bulletEl);
    this.shootSound();

    // Remove bullet
    setTimeout(() => {
      bulletEl.remove();
    }, 10000);
  },
  shootSound: function() {
    let sound1 = document.querySelector("#sound1");
    sound1.components.sound.playSound();
  },
});

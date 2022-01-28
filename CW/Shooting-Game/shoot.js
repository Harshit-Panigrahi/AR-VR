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
    window.addEventListener("mousedown", () => {
      this.createBullet();
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

    let sceneEl = document.querySelector("#scene");
    sceneEl.appendChild(bulletEl);

    setTimeout(()=>{
      bulletEl.remove();
    }, 5000)
  },
});

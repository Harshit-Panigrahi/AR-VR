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
    bulletEl.setAttribute("dynamic-body", {
      shape: "sphere",
      mass: "0",
    });
    bulletEl.addEventListener("collide", this.collideBullet);
    
    let sceneEl = document.querySelector("#scene");
    sceneEl.appendChild(bulletEl);

    // Delete bullet
    setTimeout(() => {
      bulletEl.remove();
      el.removeEventListener("collide", this.shoot);
    }, 5000);
  },
  collideBullet: function (e) {
    let elHit = e.detail.body.el;
    let impulse = new CANNON.Vec3(-5, -5, -5);
    let worldpoint = new CANNON.Vec3().copy(elHit.getAttribute("position"))
    applyImpulse(impulse, worldpoint);
  },
});

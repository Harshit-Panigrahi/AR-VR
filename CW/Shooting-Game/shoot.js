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
    bulletEl.addEventListener("collide", this.removeBullet);
    
    let sceneEl = document.querySelector("#scene");
    sceneEl.appendChild(bulletEl);
  },
  removeBullet: function (e) {
    let el = e.detail.target.el;
    let elHit = e.detail.body.el;

    console.log("The target is:", el);
    console.log("The bullet hit:", elHit);
    if (elHit.id.includes("box")) {
      elHit.setAttribute("material", {
        opacity: "0.5",
        transparent: "true",
      })
    }
    // Cannon.js is the physics engine over which the AFRAME 3D physics component is based
    // applyImpulse(impulse, Worldpoint)
    let impulse = new CANNON.Vec3(-2, 2, 1);
    let worldpoint = new CANNON.Vec3().copy(elHit.getAttribute("position"))
    applyImpulse(impulse, worldpoint);

    el.removeEventListener("collide", this.shoot);

    let sceneEl = document.querySelector("#scene");
    if(el.parent == sceneEl) {
      sceneEl.removeChild(el);
    }
  },
});

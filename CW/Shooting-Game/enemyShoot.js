AFRAME.registerComponent("enemy-bullets", {
  init: function () {
    setInterval(this.shootEnemyBullet, 5000);
  },
  shootEnemyBullet: function () {
    //get all enemies using className
    let els = document.querySelectorAll(".enemy");

    for (let i = 0; i < els.length; i++) {
      //enemyBullet entity
      let enemyBullet = document.createElement("a-entity");

      enemyBullet.setAttribute("geometry", {
        primitive: "sphere",
        radius: 0.1,
      });

      enemyBullet.setAttribute("material", "color", "#282B29");

      let position = els[i].getAttribute("position");
      enemyBullet.setAttribute("position", {
        x: position.x + 1.5,
        y: position.y + 3.5,
        z: position.z,
      });

      let scene = document.querySelector("#scene");
      scene.appendChild(enemyBullet);

      // Three.js Vector Variables
      pos1 = new THREE.Vector3();
      pos2 = new THREE.Vector3();

      // Get enemy and player position using Three.js methods
      let player = document.querySelector("#weapon").object3D;
      let enemy = els[i].object3D;
      player.getWorldPosition(pos1);
      enemy.getWorldPosition(pos2);

      // set the velocity and it's direction
      let dir = new THREE.Vector3();
      dir.subVectors(pos1, pos2).normalize();
      enemyBullet.setAttribute("velocity", dir.multiplyScalar(10));

      // Set dynamic-body attribute
      enemyBullet.setAttribute("dynamic-body", {
        shape: "sphere",
        mass: "0",
      });

      // Get text attribute
      let lifeCountEl = document.querySelector("#countLife");
      let playerLife = parseInt(lifeCountEl.getAttribute("text").value);

      //collide event on enemy bullets
      enemyBullet.addEventListener("collide", function (e) {
        if (e.detail.body.el.id === "weapon" && playerLife > 0) {
          playerLife--;
          lifeCountEl.setAttribute("text", {
            value: playerLife,
          });
        } else if (playerLife <= 0) {
          overEl = document.querySelector("#over");
          overEl.setAttribute("visible", true);
          els.forEach((el) => {
            let sceneEl = document.querySelector("#scene");
            sceneEl.removeChild(el);
          });
        }
      });
    }
  },
});

AFRAME.registerComponent("bullets", {
  init: function() {
    this.shootBullet()
  },
  shootBullet: function() {
    window.addEventListener("keydown", e => {
      if (e.key == 'e') {
        let bullet = document.createElement("a-entity");
        bullet.setAttribute("geometry", {
          primitive: "sphere",
          radius: "0.1",
        })
        bullet.setAttribute("material", {
          color: "black",
        })
        let cameraEl = document.querySelector("#camera").object3D;
        let direction = new THREE.Vector3();
        cameraEl.getWorldDirection(direction);

        bullet.setAttribute("velocity", direction.multiplyScalar(-5))
        
        let val = bullet.getAttribute("velocity")
        console.log(direction.multiplyScalar(-10));
        
        let sceneEl = document.querySelector("#scene");
        sceneEl.appendChild(bullet);
      }
    })
  }
})
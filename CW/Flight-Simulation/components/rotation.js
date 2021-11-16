AFRAME.registerComponent("terrain-rotation", {
  schema: {
    rotateY: { type: "number", default: 0 }
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key == "ArrowRight") {
        this.data.rotateY = 0.2;
      } if (e.key == "ArrowLeft") {
        this.data.rotateY = -0.2;
      }
    })
    window.addEventListener("keyup", () => {
      this.data.rotateY = 0;
    })
  },
  tick: function () {
    var mapRotation = this.el.getAttribute("rotation");
    mapRotation.y += this.data.rotateY;
    this.el.setAttribute("rotation", {
      x: mapRotation.x,
      y: mapRotation.y,
      z: mapRotation.z
    })
  }
})

AFRAME.registerComponent("flight", {
  schema: {
    rotateZ: { type: "number", default: 0 },
    position: { type: "number", default: 0}
  },
  init: function () {
    this.data.rotateZ = this.el.getAttribute("rotation");
    this.data.position = this.el.getAttribute("position");
    var planeRotation = this.data.rotateZ;
    var planePosition = this.data.position;

    window.addEventListener("keydown", (e) => {
      if (e.key == "ArrowUp") {
        if(planeRotation.z < 10){
          planeRotation.z += 0.5;
          this.el.setAttribute("rotation", planeRotation)
        }
        if(planePosition.y <2){
          planePosition.y += 0.1;
          this.setAttribute("position", planePosition)
        }
      }
      if (e.key == "ArrowRight") {
        if(planeRotation.x < 10){
          planeRotation.x += 0.1;
          this.el.setAttribute("rotation", planeRotation)
        }
      }
      if (e.key == "ArrowDown") {
        if(planeRotation.z > -10){
          planeRotation.z -= 0.5;
          this.el.setAttribute("rotation", planeRotation)
        }
        if(planePosition.y > -2){
          planePosition.y -= 0.1;
          this.setAttribute("position", planePosition)
        }
      }
      if (e.key == "ArrowLeft") {
        if(planeRotation.x > -10){
          planeRotation.x -= 0.1;
          this.el.setAttribute("rotation", planeRotation)
        }
      }
    })
  },
})
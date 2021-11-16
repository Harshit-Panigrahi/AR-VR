AFRAME.registerComponent("bird", {
  schema: {

  },
  init: function() {
    for (var i = 1; i < 20; i++){
      var birdID = `bird${i}`
      var birdPosX = (Math.random()*2000)-150
      var birdPosY = (Math.random()*5) - 1
      var birdPosZ = (Math.random()*1000)-200
      var position = {x: birdPosX, y: birdPosY, z: birdPosZ}
      this.createBirds(birdID, position)
    }
  },
  createBirds: function(id, position) {
    var terrainE1 = document.querySelector("#terrain");
    var birdE1 = document.createElement("a-entity")
    birdE1.setAttribute("gltf-model", "./models/bird/scene.gltf")
    birdE1.setAttribute("scale", {x: 100, y: 100, z: 100})
    birdE1.setAttribute("position", position)
    birdE1.setAttribute("id", id)
    birdE1.setAttribute("animation-mixer", {})
    terrainE1.appendChild(birdE1)
  }
})
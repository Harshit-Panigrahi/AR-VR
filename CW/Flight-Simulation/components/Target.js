AFRAME.registerComponent("target-ring", {
  schema: {

  },
  init: function () {
    for(var i = 1; i <= 20; i++) {
      var ringid = `ring${i}`;
      var posX = (Math.random()*3000 + (-1000))
      var posY = (Math.random()*2 + (-1))
      var posZ = (Math.random()*3000 + (-1000))

      var position = {x: posX, y: posY, z: posZ}
      this.createRings(ringid, position)
    }
  },
  createRings: function (id, position) {
    var terrainE1 = document.querySelector("#terrain")
    var ringE1 = document.createElement("a-entity")

    ringE1.setAttribute("id", id);
    ringE1.setAttribute("position", position)
    ringE1.setAttribute("material", "color", "yellow");
    ringE1.setAttribute("geometry", { primitive: "torus", radius: 8 })

    terrainE1.appendChild(ringE1);
  }
})
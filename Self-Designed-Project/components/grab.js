AFRAME.registerComponent("grab", {
  init: function () {
    $(this.el).click((e) => {
      if (!document.getElementById("grab").firstChild) {
        let newShape = this.el.cloneNode();
        $(this.el).remove();
        $(newShape).attr("position", "0 0 0");
        $(newShape).attr("scale", scale);
        $(newShape).attr("rotation", rotation);
        $(newShape).attr("color", color);
        $("#grab").append(newShape);
      } else {
        let el = document.getElementById("grab").firstChild;
        let pos = new THREE.Vector3();
        el.object3D.getWorldPosition(pos);
        let newShape = el.cloneNode();
        el.remove();
        $(newShape).attr("position", `${pos.x} ${pos.y} ${pos.z}`);
        $(newShape).attr("scale", scale);
        $(newShape).attr("rotation", rotation);
        $(newShape).attr("color", color);
        $("a-scene").append(newShape);
      }
    });
  },
});

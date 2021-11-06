AFRAME.registerComponent('movingbox', {
  schema: {
    moveX: {
      type: "number",
      default: 1
    },
  },
  tick: function() {
    this.data.moveX = this.data.moveX + 0.1;
    var p = this.el.getAttribute('position');
    p.x = this.data.moveX;
    this.el.setAttribute('position', { x: p.x, y: p.y, z: p.z });
    console.log(p.x)
  }
})
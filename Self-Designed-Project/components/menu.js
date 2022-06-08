let menuVis = false;
let canvasEl;

AFRAME.registerComponent("menu", {
  shapeCount: 0,
  init: function () {
    canvasEl = document.querySelector("canvas");
    $(window).keypress((e) => {
      if(e.which == 109){
        this.toggleMenu();
      }
    })
  },
  tick: function () {
    if ($("#flight-switch").prop("checked")) {
      $("a-camera").attr("wasd-controls", "fly: true");
    } else {
      $("a-camera").attr("wasd-controls", "fly: false");
    }
    let camPos = $("a-camera").attr("position");
    $("#pos-pre").html(`Position: ${Math.round(camPos.x*10)/10}, ${Math.round(camPos.y*10)/10}, ${Math.round(camPos.z*10)/10}`);
  },
  toggleMenu: function () {
    if (!menuVis) {
      menuVis = true;
      $("#shape-menu").show();
      document.exitPointerLock();
    } else {
      menuVis = false;
      $("#shape-menu").hide();
      canvasEl.requestPointerLock();
    }
  },
});

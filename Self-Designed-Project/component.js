let menuVis = false;
let canvasEl;

AFRAME.registerComponent("controls", {
  init: function () {
    this.toggleMenu();
  },
  tick: function () {
    this.toggleflight();
  },
  toggleflight: () => {
    if ($("#flight-switch").prop("checked")) {
      $("a-camera").attr("wasd-controls", "fly: true");
      $("#flight-mode").html("Flight mode: Enabled");
    } else {
      $("a-camera").attr("wasd-controls", "fly: false");
      $("#flight-mode").html("Flight mode: Disabled");
    }
  },
  toggleMenu: () => {
    canvasEl = document.querySelector("canvas");
    $(window).keypress(function (e) {
      if (e.which == 109) {
        if (!menuVis) {
          $("#shape-menu").show();
          menuVis = true;
          document.exitPointerLock();
        } else {
          $("#shape-menu").hide();
          menuVis = false;
          canvasEl.requestPointerLock();
        }
      }
    });
  },
  
});

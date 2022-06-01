let menuVis = false;
let shape = "cube";
let canvasEl;
let color;

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

AFRAME.registerComponent("controls", {
  init: function () {
    this.toggleMenu();
    this.placeShape();
  },
  tick: function () {
    this.toggleflight();
    this.getColor();
    this.getShape();
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
  getColor: () => {
    let colorPicker = document.getElementById("color-picker");
    color = $(colorPicker).val();
  },
  getShape: () => {
    $(".shape").click(function (e) {
      $(".shape").attr("selected", false);
      $(this).attr("selected", true);
      shape = $(this).attr("alt");
    });
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
  placeShape: () => {
    const scene = document.querySelector("a-scene");
    const camera = document.querySelector("a-camera");
    window.addEventListener("click", (e) => {
      raycaster.setFromCamera(pointer, camera);
      const intersects = raycaster.intersectObjects(scene.children);
      console.log(intersects);
    });
  },
});

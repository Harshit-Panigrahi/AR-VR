let menuVis = false;
let shape = "box";
let canvasEl;
let color;

AFRAME.registerComponent("controls", {
  shapeCount: 0,
  init: function () {
    $("#color-picker").val("#ffffff");
    canvasEl = document.querySelector("canvas");
    $(window).keypress((e) => {
      if(e.which == 109){
        this.toggleMenu();
      }
    })
    window.addEventListener("click", () => {
      if(document.pointerLockElement == canvasEl){
        this.getData();
        //this.placeShape();
      }
    })
  },
  tick: function () {
    if ($("#flight-switch").prop("checked")) {
      $("a-camera").attr("wasd-controls", "fly: true");
      $("#flight-mode").html("Flight mode: Enabled");
    } else {
      $("a-camera").attr("wasd-controls", "fly: false");
      $("#flight-mode").html("Flight mode: Disabled");
    }
  },
  getData: function () {
    let colorPicker = document.getElementById("color-picker");
    color = $(colorPicker).val();
    $(".shape").click(function (e) {
      $(".shape").attr("selected", false);
      $(this).attr("selected", true);
      shape = $(this).attr("alt");
    });
  },
  toggleMenu: function () {
    if (!menuVis) {
      $("#shape-menu").show();
      menuVis = true;
      document.exitPointerLock();
    } else {
      $("#shape-menu").hide();
      menuVis = false;
      canvasEl.requestPointerLock();
    }
  },
  placeShape: function () {
    let tempVec = new THREE.Vector3()
    tempVec.setFromMatrixPosition(this.el.object3D.matrixWorld);

    let el = document.createElement(`a-${shape}`);
    this.shapeCount++;
    el.setAttribute("id", `shape-${this.shapeCount}`);
    el.setAttribute("click-drag", "");
    el.setAttribute("position", {x: tempVec.x, y: tempVec.y, z: tempVec.z});
    el.setAttribute("class", "shapes");
    $("a-scene").prepend(el);
  },
});

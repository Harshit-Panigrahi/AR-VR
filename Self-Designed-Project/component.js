$(function(){
  let menuBtn = document.getElementById("shape-menu-btn");
  $("#shape-menu").hide();
  menuBtn.onclick = function() {
    console.log("BTN Clicked");
    $("#shape-menu-btn").hide();
    $("#shape-menu").show();
  }
})

AFRAME.registerComponent("controls", {
  flyMode: false,
  init: function() {
    this.toggleFly()
  },
  toggleFly: ()=>{
    flyMode = false;
    $(window).keypress(function (e) {
      if (e.which == 32) {
        if (flyMode == false) {
          $("a-camera").attr("wasd-controls", "fly: true");
          flyMode = true;
        } else {
          $("a-camera").attr("wasd-controls", "fly: false");
          flyMode = false;
        }
      }
    });
  }
})
AFRAME.registerComponent("selectable", {
  init: function () {
    $(".shapes").on("mouseenter", (e) => {
      console.log(e);
    });
  },
});
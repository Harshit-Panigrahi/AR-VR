AFRAME.registerComponent("sideview", {
  schema: {},
  init: function() {
    this.createPlaces();
  },
  tick: function() {
    let placesCont = document.querySelector("#places_container");
    const { state } = placesCont.getAttribute("tour");
    if (state === "view" || state === "change-view") {
      this.el.setAttribute("visible", true);
      console.log("State is view");
    } else {
      this.el.setAttribute("visible", false);
    }
  },
  createPlaces: function(){
    let viewCont = document.querySelector("#sideview_container");
    let prevX = -150;
    let prevY = 30;
    for(let i=1; i <= 4; i++) {
      const pos = { 
        x: (prevX += 50),
        y: (prevY +=2),
        z: -40
      };
      const entityEl = this.createPlacesThumbnails(pos, i);
      viewCont.append(entityEl);
    }
  },
  createPlacesThumbnails: function (position, i) {
    let entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("id",`place-${i}`);
    entityEl.setAttribute("geometry", {
      primitive: "circle",
      radius: "2",
    });
    entityEl.setAttribute("material", {
      src: "./thumbnails/helicopter.png",
      opacity: 0.9
    })
    entityEl.setAttribute("position", position);
    entityEl.setAttribute("cursor-listener", {});
    return entityEl;
  }
});
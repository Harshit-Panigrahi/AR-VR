AFRAME.registerComponent("tour", {
  schema: {
    state: { type: "string", default: "placesList"},
    selectedCard: { type: "string", default: "card1" },
    zoomAspectRatio : {type: "number", default: 1}
  },
  init: function () {
    this.placesContainer = this.el;
    this.createCards();
  },
  update: function () {
    window.addEventListener("keydown", (e)=> {
      const cameraEl = document.querySelector("#camera")
      if (e.key == "ArrowUp") {
        console.log("arrow up pressed")
        if (this.data.zoomAspectRatio <= 10 && this.data.state == "view") {
          this.data.zoomAspectRatio += 0.01;
          cameraEl.setAttribute("zoom", this.data.zoomAspectRatio)
        }
      }
      else if(e.key === "ArrowDown"){
        console.log("arrow down pressed");
        if (this.data.zoomAspectRatio > 1 && this.data.state == "view") {
          this.data.zoomAspectRatio -= 0.01;
          cameraEl.setAttribute("zoom", this.data.zoomAspectRatio);
        }
      }
    })
  },
  tick: function() {
    const { state } = this.el.getAttribute("tour")

    if(state == "view"){
      this.hideEl([this.placesContainer]);
      this.showView();
    }
   },
  hideEl: function(elList) {
    elList.map(el => {
      el.setAttribute("visible", false)
    });
  },
  showView : function() {
    const { selectedCard } = this.data;
    const skyEl = document.querySelector("#main_container");
    skyEl.setAttribute("material", {
      src: `./360_images/${selectedCard}/place-1.jpg`,
      color: "white"
    })
  },
  createCards: function () {
    const thumbnailsRef = [
      {
        id: "taj-mahal",
        url: "./thumbnails/taj_mahal.png",
        title: "Taj Mahal",
      },
      {
        id: "budapest",
        url: "./thumbnails/budapest.jpg",
        title: "Budapest",
      },
      {
        id: "eiffel-tower",
        url: "./thumbnails/eiffel_tower.jpg",
        title: "Eiffel Tower",
      },
      {
        id: "new-york",
        url: "./thumbnails/new_york_city.png",
        title: "New York",
      },
    ];
    var posX = -45;
    for (var item of thumbnailsRef) {
      const position = { x: posX, y: -5, z: -50 };
      posX += 30

      const borderE1 = this.createBorder(position, item.id);
      const thumbnailE1 = this.createThumbnail(item);
      borderE1.appendChild(thumbnailE1);
      const titleE1 = this.createTitle(item, position);
      borderE1.appendChild(titleE1);

      this.placesContainer.appendChild(borderE1);
    }
  },
  createBorder: function (pos, id) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "ring",
      radiusInner: 12,
      radiusOuter: 13,
    });
    entityEl.setAttribute("position", pos);
    entityEl.setAttribute("material", {
      color: "royalblue",
    });
    entityEl.setAttribute("cursor-listener", {})
    return entityEl;
  },
  createThumbnail: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "circle",
      radius: 12,
    });
    entityEl.setAttribute("material", {
      src: item.url,
    });
    return entityEl;
  },
  createTitle: function (item, position) {
    const titleE1 = document.createElement("a-entity");
    titleE1.setAttribute("visible", true);
    titleE1.setAttribute("text", {
      value: item.title,
      font: "exo2bold",
      align: "center",
      color: "black",
      width: 100,
    });
    const elPosition = position;
    elPosition.y -= 4;
    titleE1.setAttribute("position", elPosition);
    return titleE1;
  },
});

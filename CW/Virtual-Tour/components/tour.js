AFRAME.registerComponent("tour", {
  schema: {},
  init: function () {
    this.placesContainer = this.el;
    this.createCards();
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
    var previousXPosition = -65;
    for (var item of thumbnailsRef) {
      const posX = previousXPosition + 26;
      const posY = -8;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      previousXPosition = posX;

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
      radiusInner: 10,
      radiusOuter: 11,
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
      radius: 10,
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
      font: "exo2bold",
      align: "center",
      width: 100,
      color: "#000",
      value: item.title,
    });
    const elPosition = position;
    elPosition.y -= 30;
    titleE1.setAttribute("position", elPosition);
    return titleE1;
  },
});

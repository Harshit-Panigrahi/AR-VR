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
    var posX = -3.75;
    for (var item of thumbnailsRef) {
      const position = { x: posX, y: 1, z: -3.5 };
      posX += 2.5

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
      radiusInner: 1,
      radiusOuter: 1.1,
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
      radius: 1,
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
      width: 10,
    });
    const elPosition = position;
    elPosition.y -= 4.5;
    titleE1.setAttribute("position", elPosition);
    return titleE1;
  },
});

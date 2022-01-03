AFRAME.registerComponent("comics", {
  init: function () {
    this.createComics();
  },
  createComics: function () {
    const coversRef = [
      {
        id: "comic1",
        url: "./comics/comic1.jpeg",
        title: "Marvel Origins",
      },
      {
        id: "comic2",
        url: "./comics/comic2.jpeg",
        title: "Wonder Woman",
      },
      {
        id: "comic3",
        url: "./comics/comic3.jpeg",
        title: "Tinkle",
      },
      {
        id: "comic4",
        url: "./comics/comic4.jpeg",
        title: "Asterix",
      },
    ];
    // Create Comics
    let xpos = -5.5;
    for (let i of coversRef) {
      let position = { x: xpos, y: 1.4, z: -5 };
      xpos += 3.67;
      
      let comicEl = document.createElement("a-entity")
      let coverEl = this.createCover(i.url, position)
      let titleEl = this.createTitle(i.title, position)
      
      comicEl.setAttribute("id", i.id)
      comicEl.appendChild(coverEl);
      comicEl.appendChild(titleEl);
      this.el.appendChild(comicEl);
    }
  },
  createCover: function (url, pos) {
    let entityEl = document.createElement("a-plane");
    entityEl.setAttribute("material", { src: url });
    entityEl.setAttribute("position", pos)
    entityEl.setAttribute("height", 1.4)
    entityEl.setAttribute("scale", {x: 3, y: 3, z: 3})
    return entityEl;
  },
  createTitle: function (title, pos) {
    let entityEl = document.createElement("a-text");
    pos.y -= 2.5
    entityEl.setAttribute("position", pos);
    entityEl.setAttribute("value", title);
    entityEl.setAttribute("font", "exo2semibold")
    entityEl.setAttribute("align", "center")
    entityEl.setAttribute("width", 7.5)
    entityEl.setAttribute("color", "black")
    return entityEl
  },
});

AFRAME.registerComponent("cursor-listener", {
  schema: {
    selectedItemId: { default: "", type: "string" },
  },
  init: function () {
    console.log("Init Funciton");
    this.handleMouseEnterEvents();
    /* this.handleMouseLeaveEvents(); */
  },
  handlePlacesListState: function () {
    console.log("hello1");
    const id = this.el.getAttribute("id");
    const placesId = ["taj-mahal", "budapest", "new-york", "eiffel-tower"];
    if (placesId.includes(id)) {
      const placeContainer = document.querySelector("#places_container");
      placeContainer.setAttribute("cursor-listener", {
        selectedItemId: id,
      });
      this.el.setAttribute("material", {
        color: "forestgreen",
        opacity: 1,
      });
    }
  },
  handleMouseEnterEvents: function () {
    //Cursor 'mouseenter' Events
    console.log("Mouse entered1");
    this.el.addEventListener("mouseenter", () => {
      console.log("Mouse entered2");
      this.handlePlacesListState();
    });
  },
  handleMouseLeaveEvents: function () {
    this.el.addEventListener("mouseleave", () => {
      const { selectedItemId } = this.data;
      if (selectedItemId) {
        const el = document.querySelector(`#${selectedItemId}`);
        const id = el.getAttribute("id");
        if (id == selectedItemId) {
          el.setAttribute("material", {
            color: "royalblue",
          });
        }
      }
    });
  },
});
